// app/api/auth/[...nextauth]/route.ts

import { authOptions } from "@/lib/auth";
import NextAuth from "next-auth";

const handler = NextAuth(authOptions);

// Export GET and POST for Next.js App Router
export { handler as GET, handler as POST };
