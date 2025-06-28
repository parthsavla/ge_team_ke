'use client';

import { signIn, signOut, useSession } from 'next-auth/react';
import Image from 'next/image';

export default function GoogleLoginButton() {
    const { data: session, status } = useSession();

    const handleGoogleLogin = () => {
        signIn('google', { callbackUrl: '/roleSelection' }); // ✅ redirect after login
    };
    const handleLogout = () => {
        signOut();
    };

    return (
        <>
            
                <button
                    onClick={handleGoogleLogin}
                    className="btn btn-outline-secondary btn-lg w-100 d-flex align-items-center justify-content-center fw-bold"
                    style={{ padding: '0.75rem 1.5rem', fontSize: '1.1rem' }}
                >
                    <Image
                        src=""
                        alt="Google logo"
                        width={24}
                        height={24}
                        className="me-2"
                    />
                    Sign In with Google
                </button>
            
        </>
    );
}
