    // components/PushNotificationManager.js
    'use client';

    import { useEffect, useState } from 'react';

    // Function to convert VAPID public key
    function urlBase64ToUint8Array(base64String: any) {
        const padding = '='.repeat((4 - base64String.length % 4) % 4);
        const base64 = (base64String + padding)
            .replace(/-/g, '+')
            .replace(/_/g, '/');

        const rawData = window.atob(base64);
        const outputArray = new Uint8Array(rawData.length);

        for (let i = 0; i < rawData.length; ++i) {
            outputArray[i] = rawData.charCodeAt(i);
        }
        return outputArray;
    }


    export default function PushNotificationManager() {
        const [permission, setPermission] = useState(false);
        const [subscription, setSubscription] = useState(null);
        const [isSubscribing, setIsSubscribing] = useState(false);

        useEffect(() => {
            if ('serviceWorker' in navigator && 'PushManager' in window) {
                navigator.serviceWorker.register('/sw.js')
                    .then(swReg => {
                        console.log('Service Worker is registered', swReg);
                        swReg.pushManager.getSubscription().then((sub: any) => {
                            if (sub) {
                                console.log('User IS already subscribed.');
                                setSubscription(sub);
                                setPermission(true);
                            } else {
                                console.log('User is NOT subscribed.');
                            }
                        });
                    })
                    .catch(error => {
                        console.error('Service Worker Error', error);
                    });
            }
        }, []);

        const subscribeToPushNotifications = async () => {
            if (isSubscribing) return;
            setIsSubscribing(true);

            if (!('serviceWorker' in navigator)) {
                console.error("Service Worker not supported.");
                setIsSubscribing(false);
                return;
            }

            try {
                const swReg = await navigator.serviceWorker.ready;

                const vapidPublicKey = process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY;

                // --- CRITICAL DEBUGGING STEP ---
                // Let's log the key to ensure it's loaded from .env.local
                console.log("Attempting to subscribe with VAPID key:", vapidPublicKey);

                if (!vapidPublicKey) {
                    console.error("VAPID public key not found. Ensure NEXT_PUBLIC_VAPID_PUBLIC_KEY is set in your .env.local file and the server was restarted.");
                    alert("Configuration error: VAPID key is missing.");
                    setIsSubscribing(false);
                    return;
                }

                const convertedVapidKey = urlBase64ToUint8Array(vapidPublicKey);

                const sub: any = await swReg.pushManager.subscribe({
                    userVisibleOnly: true,
                    applicationServerKey: convertedVapidKey
                });

                console.log('Successfully subscribed:', sub);

                // Send subscription to your backend to store it
                await fetch('/api/subscribe', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(sub)
                });

                setSubscription(sub);
                setPermission(true);
            } catch (error: any) {
                console.error('Failed to subscribe the user: ', error);
                alert(`Subscription failed. Check the console for details. Error: ${error.name}`);
            }

            setIsSubscribing(false);
        };

        // Simple UI to request permission
        return (
            <div style={{ padding: '20px', textAlign: 'center' }}>
                {!permission && (
                    <button
                        onClick={subscribeToPushNotifications}
                        className="btn btn-primary"
                        disabled={isSubscribing}
                    >
                        {isSubscribing ? 'Subscribing...' : 'Enable Push Notifications'}
                    </button>
                )}
                {permission && <p>Push notifications are enabled!</p>}
            </div>
        );
    }
