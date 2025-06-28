import '@/public/assets/css/vendors/bootstrap.min.css';
import '@/public/assets/css/vendors/swiper-bundle.min.css';
import '@/public/assets/css/vendors/aos.css';
import '@/public/assets/css/vendors/carouselTicker.css';
import '@/public/assets/css/vendors/odometer.css';
import '@/public/assets/css/vendors/magnific-popup.css';
import '@/public/assets/fonts/bootstrap-icons/bootstrap-icons.min.css';
import '@/public/assets/fonts/boxicons/boxicons.min.css';
import '@/public/assets/fonts/remixicon/remixicon.css';
import '@/public/assets/fonts/fontawesome/fontawesome.min.css';
import '@/public/assets/fonts/fontawesome/solid.min.css';
import '@/public/assets/fonts/fontawesome/regular.min.css';
import '@/public/assets/css/main.css';
import '@/public/assets/css/style.css';
import { SessionProvider } from 'next-auth/react';
import { Libre_Franklin, Rubik } from 'next/font/google';
import type { Metadata, Viewport } from 'next';
import InstallPrompt from './InstallPrompt';
import PushNotificationManager from '@/components/PushNotificationManager';
import SendNotificationButton from '@/components/SendNotificationButton';

const LibreFranklinHeading = Libre_Franklin({
    weight: ['300', '400', '500', '600', '700'],
    subsets: ['latin'],
    variable: '--tc-heading-font-family',
    display: 'swap',
});

const rubik = Rubik({
    weight: ['300', '400', '500', '600', '700'],
    subsets: ['latin'],
    variable: '--tc-body-font-family',
    display: 'swap',
});

export const metadata: Metadata = {
    title: 'Team Kenya GE-2025',
    manifest: '/manifest.webmanifest', // ✅ Required!
    icons: {
        icon: '/assets/favicon/favicon.ico',
        apple: [{ url: '/assets/favicon/apple-touch-icon.png', sizes: '180x180' }],
    },
    other: {
        'apple-mobile-web-app-capable': 'yes',
        'apple-mobile-web-app-status-bar-style': 'black-translucent',
        'format-detection': 'telephone=no',
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html
            lang="en"
            className={`${LibreFranklinHeading.variable} ${rubik.variable}`}
        ><head>
                <meta name="application-name" content="AstraX AI" />
                <meta name="apple-mobile-web-app-capable" content="yes" />
                <meta name="apple-mobile-web-app-status-bar-style" content="default" />
                <meta name="apple-mobile-web-app-title" content="AstraX AI" />
                <meta name="description" content="AI Solutions by AstraX" />
                <meta name="format-detection" content="telephone=no" />
                <meta name="mobile-web-app-capable" content="yes" />
                <meta name="theme-color" content="#000000" />
                <link rel="manifest" href="/manifest.json" />
                <link rel="apple-touch-icon" href="/icons/icon-192x192.png"></link>
                <title>AstraX AI Solutions</title>
            </head>
            <body>
                <PushNotificationManager />
                {/*<SendNotificationButton></SendNotificationButton> */}
                {children}
            </body>
        </html>
    );
}
