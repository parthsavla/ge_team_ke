import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import EmailProvider from 'next-auth/providers/email';
import { PrismaAdapter } from '@auth/prisma-adapter';
import prisma from '@/lib/prisma'; // Adjust path if needed (e.g., ../../../lib/prisma)
import nodemailer from 'nodemailer';
export const authOptions = {
    // Use the Prisma adapter to connect NextAuth.js to your database schema.
    adapter: PrismaAdapter(prisma),
    providers: [
        // Google OAuth Provider
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
        // Email/Magic Link Provider
        EmailProvider({
            server: {
                host: process.env.EMAIL_SERVER_HOST,
                port: parseInt(process.env.EMAIL_SERVER_PORT, 10),
                auth: {
                    user: process.env.EMAIL_SERVER_USER,
                    pass: process.env.EMAIL_SERVER_PASSWORD,
                },
            },
            from: process.env.EMAIL_FROM,
            // You can customize the sendVerificationRequest function for a custom email template
            // sendVerificationRequest({ identifier: email, url, provider }) {
            //   console.log(`Sending magic link to ${email}: ${url}`);
            //   // Implement your actual email sending logic here, e.g., using a transactional email service
            // }
            sendVerificationRequest: async ({ identifier: email, url, provider }) => {
                const transporter = nodemailer.createTransport(provider.server);

                await transporter.sendMail({
                    to: email,
                    from: provider.from,
                    subject: `Sign in to Sports Event App`,
                    text: `Sign in to Sports Event App by clicking here: ${url}\n\nIf you did not request this, you can ignore this email.`,
                    html: `<p>Sign in to Sports Event App by clicking the link below:</p>
                 <p><a href="${url}"><b>Sign in</b></a></p>
                 <p>If you did not request this, you can ignore this email.</p>`,
                });
                console.log(`Magic link sent to ${email}: ${url}`); // For debugging purposes
            },
        }),
    ],
    // Configure session strategy
    session: {
        strategy: 'jwt', // Recommended for App Router to avoid database lookups on every request
    },
    callbacks: {
        // This callback is called whenever a session is checked.
        // It's used to add custom data (like user role) to the session object.
        async session({ session, token, user }) {
            // If using JWT strategy, the `user` object will not be available here directly from the adapter.
            // Instead, user info comes from the `token`.
            // We populate the `token` in the `jwt` callback below.

            if (token)
            {
                session.user.id = token.sub; // `sub` is the user ID in JWT
                session.user.role = token.role; // Add role from token to session
            } else if (user)
            {
                // This 'user' is from the database when using database strategy or after initial sign-in.
                session.user.id = user.id;
                // Fetch role from the User model in your database
                const dbUser = await prisma.user.findUnique({
                    where: { id: user.id },
                    select: { role: true },
                });
                session.user.role = dbUser?.role || 'NORMAL'; // Ensure a default role
            }
            return session;
        },
        // This callback is called whenever a JWT is created or updated.
        // It's a good place to add custom data (like user role) to the JWT.
        async jwt({ token, user, account, profile }) {
            if (user)
            {
                // 'user' is the Prisma User object returned by the adapter after initial sign-in/creation.
                token.id = user.id;
                token.role = user.role; // Add role from the Prisma User to the JWT
            }
            return token;
        },
        // This callback is called when a user signs in for the first time or if their
        // account is linked. We ensure the 'role' is set for new users.
        async signIn({ user, account, profile, email }) {
            if (account.provider === 'google' || account.provider === 'email')
            {
                // Check if the user already exists in your `User` table.
                // Prisma Adapter creates the `User` entry for you.
                // We just ensure the 'role' field is set.
                const existingUser = await prisma.user.findUnique({
                    where: { email: user.email },
                });

                if (!existingUser)
                {
                    // This should ideally be handled by the Prisma Adapter's `createUser` function,
                    // but we can ensure a default role here if needed, or modify existing user data.
                    // Note: Prisma Adapter's `createUser` doesn't let you set custom fields like 'role' directly.
                    // You might need a custom `LinkAccount` function or a separate Prisma call.
                    // A simpler approach for roles is to set it as a default in the schema (which you have).
                    // For initial setup, the @default(NORMAL) in your schema works fine.
                } else
                {
                    // If the user already exists, you can update their last login or similar.
                    // For roles, you can implement logic here to assign based on external criteria
                    // or just rely on the existing role.
                }
            }
            return true; // Return true to allow the sign-in
        },
    },
    pages: {
        // Customize your sign-in, sign-out, error, and verify request pages.
        // Recommended for better user experience.
        signIn: '/roleSelection', // Example custom sign-in page
        // signOut: '/auth/signout',
        // error: '/auth/error',
        // verifyRequest: '/auth/verify-request', // For magic link message
    },
    // Debug mode for development
    debug: process.env.NODE_ENV === 'development',
};

// For App Router, you export handlers for GET and POST requests.
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };