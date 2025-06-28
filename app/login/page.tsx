'use client'; // This is a client component

import Layout from '@/components/layout/Layout';
import { useSession, signIn, signOut } from 'next-auth/react';
import React, { useState } from 'react';

export default function HomePage() {
    const { data: session, status }: { data: any, status: any } = useSession();
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    if (status === 'loading') {
        return (
            <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
                <p className="ml-4 text-lg">Loading session...</p>
            </div>
        );
    }

    const handleGoogleSignIn = async () => {
        setMessage('');
        try {
            await signIn('google'); // Use 'google' as the provider ID
        } catch (error) {
            console.error('Google sign-in error:', error);
            setMessage('Failed to sign in with Google. Check console for details.');
        }
    };

    const handleEmailSignIn = async () => {
        setMessage('');
        if (!email) {
            setMessage('Please enter your email.');
            return;
        }
        try {
            const result: any = await signIn('email', { email, redirect: false });
            if (result.error) {
                setMessage(`Error sending magic link: ${result.error}`);
            } else {
                setMessage(`A magic link has been sent to ${email}. Please check your inbox and click the link to sign in.`);
                setEmail('');
            }
        } catch (error) {
            console.error('Email sign-in error:', error);
            setMessage('Failed to send magic link. Check console for details.');
        }
    };

    const handleSignOut = async () => {
        setMessage('');
        try {
            await signOut();
        } catch (error) {
            console.error('Sign-out error:', error);
            setMessage('Failed to sign out. Check console for details.');
        }
    };

    return (
        <Layout>
            <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-4">
                <div className="bg-gray-800 p-8 rounded-lg shadow-xl w-full max-w-md text-center border border-gray-700">
                    <h1 className="text-3xl font-bold mb-6 text-indigo-400">Sports Event Auth</h1>

                    {message && (
                        <p className="mb-4 text-sm px-4 py-2 rounded-md bg-blue-600 text-white break-words">
                            {message}
                        </p>
                    )}

                    {session ? (
                        <div>
                            <h2 className="text-2xl font-semibold mb-4 text-green-400">Welcome, {session.user.name || session.user.email}!</h2>
                            <p className="mb-2 text-lg"><strong>Email:</strong> {session.user.email}</p>
                            <p className="mb-2 text-lg"><strong>User ID:</strong> <span className="text-sm break-all">{session.user.id}</span></p>
                            <p className="mb-4 text-lg"><strong>Role:</strong> <span className="font-bold text-yellow-300">{session.user.role || 'Not Set'}</span></p>

                            {/* Example of role-based rendering */}
                            {session.user.role === 'ADMIN' && (
                                <p className="mb-4 text-purple-400">You have admin privileges!</p>
                            )}
                            {session.user.role === 'PARTICIPANT' && (
                                <p className="mb-4 text-cyan-400">You are a registered participant!</p>
                            )}

                            <button
                                onClick={handleSignOut}
                                className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-md transition duration-300 ease-in-out transform hover:scale-105 shadow-lg"
                            >
                                Sign Out
                            </button>
                        </div>
                    ) : (
                        <div>
                            <div className="mb-6">
                                <input
                                    type="email"
                                    placeholder="Enter your email for magic link"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full px-5 py-3 mb-3 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                />
                                <button
                                    onClick={handleEmailSignIn}
                                    className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-md transition duration-300 ease-in-out transform hover:scale-105 shadow-lg"
                                >
                                    Send Magic Link
                                </button>
                            </div>
                            <div className="relative flex py-5 items-center">
                                <div className="flex-grow border-t border-gray-700"></div>
                                <span className="flex-shrink mx-4 text-gray-500">OR</span>
                                <div className="flex-grow border-t border-gray-700"></div>
                            </div>
                            <button
                                onClick={handleGoogleSignIn}
                                className="w-full flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-md transition duration-300 ease-in-out transform hover:scale-105 shadow-lg"
                            >
                                <svg className="w-5 h-5 mr-3" viewBox="0 0 48 48">
                                    <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.6-6.44C36.83 4.01 30.73 2 24 2 15.16 2 7.41 7.23 4.25 15.15l7.71 6c3.16-7.56 10.4-13.15 19.04-13.15z"></path><path fill="#4285F4" d="M46.72 24c0-.79-.06-1.56-.18-2.34H24v4.46h12.91c-.55 2.87-2.31 5.24-4.91 6.94l6.6 6.44c3.81-3.51 6.04-8.54 6.04-15.04z"></path><path fill="#FBBC04" d="M12.9 31.33c-.76-2.28-1.19-4.68-1.19-7.33s.43-5.05 1.19-7.33l-7.71-6C3.23 15.34 2 19.54 2 24c0 4.46 1.23 8.66 3.39 12.01l7.71-6.68z"></path><path fill="#34A853" d="M24 46c6.26 0 11.59-2.07 15.47-5.61l-6.6-6.44c-3.1 2.91-7.1 4.75-8.87 4.75-7.46 0-13.71-5.6-16.09-13.15l-7.71 6c3.25 7.92 10.99 13.15 19.04 13.15z"></path><path fill="none" d="M0 0h48v48H0z"></path>
                                </svg>
                                Sign in with Google
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </Layout>
    );
}
