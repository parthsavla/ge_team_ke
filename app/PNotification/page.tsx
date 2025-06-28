'use client'

import Layout from "@/components/layout/Layout";
import Section1 from "@/components/sections/home/Section1";
import Section2 from "@/components/sections/home/Section2";
import Section3 from "@/components/sections/home/Section3";
import Section4 from "@/components/sections/home/Section4";
import { useState } from 'react'

export default function Home() {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [sending, setSending] = useState(false);
    const [message, setMessage] = useState('');

    const handleSendNotification = async () => {
        setSending(true);
        setMessage('');

        try {
            const res = await fetch('/api/send-push', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ title, body }),
            });

            const data = await res.json();

            if (res.ok) {
                setMessage('✅ Push notification sent!');
            } else {
                setMessage(`❌ Error: ${data.error || 'Something went wrong'}`);
            }
        } catch (err) {
            setMessage('❌ Error sending push notification');
        }

        setSending(false);
    };

    return (
        <Layout>


            {/* Admin Push Notification Form */}
            <div className="container mt-5 mb-5">
                <div className="row justify-content-center">
                    <div className="col-md-8 col-lg-6">
                        <div className="card shadow-sm">
                            <div className="card-body">
                                <h5 className="card-title mb-4 text-center fw-bold">
                                    🔔 Send Push Notification
                                </h5>

                                <div className="mb-3">
                                    <label className="form-label">Notification Title</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter title"
                                        value={title}
                                        onChange={(e) => setTitle(e.target.value)}
                                    />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Notification Body</label>
                                    <textarea
                                        className="form-control"
                                        placeholder="Enter message"
                                        rows={4}
                                        value={body}
                                        onChange={(e) => setBody(e.target.value)}
                                    />
                                </div>

                                <div className="d-grid">
                                    <button
                                        className="btn btn-primary"
                                        disabled={sending || !title || !body}
                                        onClick={handleSendNotification}
                                    >
                                        {sending ? 'Sending...' : 'Send Notification'}
                                    </button>
                                </div>

                                {message && (
                                    <div className="alert alert-info mt-4" role="alert">
                                        {message}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
