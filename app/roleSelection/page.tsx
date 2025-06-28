'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Layout from '@/components/layout/Layout';
import { User, Eye } from 'lucide-react';
import Swal from 'sweetalert2';
import { useRouter } from 'next/navigation';


export default function RoleSelectionPage() {
    const [selectedRole, setSelectedRole] = useState<'none' | 'spectator' | 'participant'>('none');
    const [memberNumber, setMemberNumber] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();

    // Submit logic using SweetAlert2
    const submit = (role: 'spectator' | 'participant', memberNo?: string) => {
        if (role === 'spectator') {
            Swal.fire({
                icon: 'info',
                title: 'Welcome, Spectator!',
                text: 'Enjoy watching the event!',
                confirmButtonText: 'OK',
            }).then(() => {
                router.push('/')

            });
        }

        if (memberNo && memberNo.trim().length > 3) {
            const dummy = {
                name: 'John Doe',
                sport: 'Track & Field',
            };

            Swal.fire({
                icon: 'success',
                title: 'Participant Confirmed!',
                html: `
                    <p><strong>Name:</strong> ${dummy.name}</p>
                    <p><strong>Sport:</strong> ${dummy.sport}</p>
                `,
                confirmButtonText: 'Continue',
            }).then(() => {
                setSelectedRole('none');
                setMemberNumber('');
                router.push('/personalDash')

            });
        } else {
            setError('Please enter a valid member number.');
        }
    };

    const handleRoleSelect = (role: 'spectator' | 'participant') => {
        setSelectedRole(role);
        setError('');
        if (role === 'spectator') {
            submit('spectator');
        } else {
            setMemberNumber('');
        }
    };

    useEffect(() => {
        if (selectedRole === 'participant' && memberNumber.trim().length > 3) {
            setError('');
            const timeout = setTimeout(() => {
                submit('participant', memberNumber.trim());
            }, 600);
            return () => clearTimeout(timeout);
        }
    }, [memberNumber, selectedRole]);

    return (
        <Layout>
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-50 px-4 py-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="relative w-full max-w-md sm:max-w-xl bg-white rounded-3xl border border-gray-200 shadow-xl p-6 sm:p-10"
                >
                    <div className="text-center mb-8">
                        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Welcome! 👋</h1>
                        <p className="text-gray-600 text-base sm:text-lg">Choose your role to get started.</p>
                    </div>

                    {/* Role Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                        <motion.div
                            whileTap={{ scale: 0.95 }}
                            onClick={() => handleRoleSelect('spectator')}
                            className={`cursor-pointer p-5 rounded-2xl border text-center transition shadow-sm duration-300 ${selectedRole === 'spectator'
                                ? 'bg-blue-600 text-white shadow-md'
                                : 'bg-white text-blue-700 border-blue-200 hover:border-blue-400 hover:bg-blue-50'
                                }`}
                        >
                            <Eye className="mx-auto mb-2 w-6 h-6" />
                            <div className="font-semibold text-base">Spectator</div>
                            <p className="text-sm mt-1 opacity-80">Just watching the event</p>
                        </motion.div>

                        <motion.div
                            whileTap={{ scale: 0.95 }}
                            onClick={() => handleRoleSelect('participant')}
                            className={`cursor-pointer p-5 rounded-2xl border text-center transition shadow-sm duration-300 ${selectedRole === 'participant'
                                ? 'bg-green-600 text-white shadow-md'
                                : 'bg-white text-green-700 border-green-200 hover:border-green-400 hover:bg-green-50'
                                }`}
                        >
                            <User className="mx-auto mb-2 w-6 h-6" />
                            <div className="font-semibold text-base">Participant</div>
                            <p className="text-sm mt-1 opacity-80">Actively taking part</p>
                        </motion.div>
                    </div>

                    {/* Participant Member Number Input */}
                    {selectedRole === 'participant' && (
                        <motion.div
                            initial={{ opacity: 0, y: -8 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                            className="mb-4"
                        >
                            <label htmlFor="memberNumber" className="block text-sm font-medium text-gray-700 mb-1">
                                Enter Member Number
                            </label>
                            <input
                                id="memberNumber"
                                type="text"
                                placeholder="e.g. 12345"
                                value={memberNumber}
                                onChange={(e) => setMemberNumber(e.target.value)}
                                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-green-500 focus:outline-none text-base"
                            />
                        </motion.div>
                    )}

                    {/* Error Message */}
                    {error && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-red-500 text-sm mb-4"
                        >
                            {error}
                        </motion.div>
                    )}

                    <p className="text-xs text-gray-400 text-center mt-8">
                        We use your role to personalize your experience.
                    </p>
                </motion.div>
            </div>
        </Layout>
    );
}
