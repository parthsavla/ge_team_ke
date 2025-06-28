'use client';

import { useEffect, useState } from 'react';

export default function InstallPrompt() {
    const [deferredPrompt, setDeferredPrompt] = useState<Event | null>(null);
    const [showInstallButton, setShowInstallButton] = useState(false);

    useEffect(() => {
        const handler = (e: Event) => {
            e.preventDefault();
            setDeferredPrompt(e);
            setShowInstallButton(true);
        };

        window.addEventListener('beforeinstallprompt', handler);

        return () => {
            window.removeEventListener('beforeinstallprompt', handler);
        };
    }, []);

    const handleInstallClick = async () => {
        if (!deferredPrompt) return;
        const promptEvent = deferredPrompt as any; // cast for `.prompt()` and `.userChoice`

        promptEvent.prompt();
        const { outcome } = await promptEvent.userChoice;

        if (outcome === 'accepted') {
            console.log('User accepted the install prompt');
        } else {
            console.log('User dismissed the install prompt');
        }

        setShowInstallButton(false);
        setDeferredPrompt(null);
    };

    return (
        <>
            {showInstallButton && (
                <button
                    onClick={handleInstallClick}
                    className="fixed bottom-6 right-6 z-50 rounded-full bg-blue-600 px-6 py-3 text-white shadow-xl hover:bg-blue-700 transition"
                >
                    Install App
                </button>
            )}
        </>
    );
}
