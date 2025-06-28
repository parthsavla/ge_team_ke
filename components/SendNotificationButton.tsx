// components/SendNotificationButton.js
'use client';

import React from 'react';

export default function SendNotificationButton() {

    const handleSendNotification = async () => {
        try {
            const response = await fetch('/api/push', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            const data = await response.json();

            if (response.ok) {
                alert('Notification sent successfully!');
                console.log(data);
            } else {
                throw new Error(data.error || 'Something went wrong');
            }
        } catch (error: any) {
            alert(`Error sending notification: ${error.message}`);
            console.error('Error sending notification:', error);
        }
    };

    return (
        <div style={{ padding: '20px', textAlign: 'center' }}>
            <button onClick={handleSendNotification} className="btn btn-secondary">
                Send Test Notification
            </button>
        </div>
    );
}