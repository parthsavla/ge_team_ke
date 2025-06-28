'use client';

import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Layout from '@/components/layout/Layout';
import GoogleLoginButton from '@/components/elements/GoogleLoginButton';

export default function Home() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        router.push('/roleSelection');
        return
        const res = await signIn('credentials', {
            email,
            password,
            redirect: false,
        });

        if (res?.ok) {
            router.push('/roleSelection');
        } else {
            alert('Invalid email or password');
        }
    };

    return (
        <Layout>
            <div className="min-h-screen d-flex justify-content-center align-items-center bg-light m-auto">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-sm-10 col-md-8 col-lg-5">
                            <div className="p-5 rounded-lg border-0 animate-fade-in">
                                <div className="card-body text-center">
                                    <h1 className="card-title mb-3 text-dark fw-bolder fs-2">
                                        Welcome
                                    </h1>
                                    <p className="text-secondary mb-5 fs-6">
                                        Sign in to unlock your personalized experience.
                                    </p>

                                    {/* Email and Password Login Form */}
                                    <form onSubmit={handleSubmit} className="text-start">
                                        <div className="mb-3">
                                            <label htmlFor="emailInput" className="form-label visually-hidden">
                                                Email address
                                            </label>
                                            <input
                                                type="email"
                                                className="form-control form-control-lg"
                                                id="emailInput"
                                                placeholder="Enter your email"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                //required
                                            />
                                        </div>
                                        <div className="mb-4">
                                            <label htmlFor="passwordInput" className="form-label visually-hidden">
                                                Password
                                            </label>
                                            <input
                                                type="password"
                                                className="form-control form-control-lg"
                                                id="passwordInput"
                                                placeholder="Password"
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                                //required
                                            />
                                        </div>
                                        <div className="d-grid gap-2">
                                            <button type="submit" className="btn btn-linear hover-up btn-lg fw-bold">
                                                Sign In
                                            </button>
                                        </div>
                                    </form>

                                    {/* Google Login Button */}
                                    <div className="mt-4">
                                        <p className="text-secondary mb-3">Or sign in with:</p>
                                        <GoogleLoginButton />
                                    </div>

                                    <p className="mt-4 text-sm">
                                        <a href="/privacy-policy" className="text-decoration-none text-info">
                                            Learn more about signing in and our privacy policy.
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .card {
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
        }
        .rounded-lg {
          border-radius: 1rem !important;
        }
        .form-control-lg {
          padding: 0.75rem 1.25rem;
          font-size: 1.1rem;
        }
        .btn-lg {
          padding: 0.75rem 1.5rem;
          font-size: 1.1rem;
        }
      `}</style>
        </Layout>
    );
}
