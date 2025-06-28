// app/api/push/route.js
import { NextResponse } from 'next/server';
import webpush from 'web-push';

// In a real app, you would retrieve subscriptions from your database.
// For this example, we'll import the mock array.
// NOTE: This will only work in a single-server instance development environment.
// For production, you MUST use a database.
const subscriptions = []; // This should be your database of subscriptions.

// To make this example work, we'll temporarily import the subscriptions array.
// A better approach is to have a shared module or a proper database.
// Let's assume we can access the subscriptions collected by the other route.
// This is a conceptual example.

// A simple way to share subscriptions in dev (NOT FOR PRODUCTION)
// We need to import the array from the subscribe route, which isn't ideal.
// For a better dev experience without a DB, you could write to a temp JSON file.
// But for now, we'll keep it simple and you can test by first subscribing, then pushing.

let sharedSubscriptions = [];
if (typeof global.subscriptions === 'undefined')
{
    global.subscriptions = [];
}
sharedSubscriptions = global.subscriptions;


export async function POST(request) {
    try
    {
        // Configure web-push with your VAPID details
        webpush.setVapidDetails(
            'mailto:your-email@example.com', // Replace with your email
            process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY,
            process.env.VAPID_PRIVATE_KEY
        );

        // Get the subscriptions from our temporary store
        // In a real app, you'd fetch these from your database
        const allSubscriptions = sharedSubscriptions;

        if (allSubscriptions.length === 0)
        {
            return NextResponse.json({ message: 'No subscriptions to notify.' }, { status: 200 });
        }


        // Create a notification payload
        const notificationPayload = JSON.stringify({
            title: 'New Notification from AstraX!',
            body: 'This is a test notification sent from the server.',
        });

        // Send a notification to each subscription
        const sendPromises = allSubscriptions.map(sub =>
            webpush.sendNotification(sub, notificationPayload)
        );

        await Promise.all(sendPromises);

        return NextResponse.json({ message: 'Notifications sent successfully.' }, { status: 200 });
    } catch (error)
    {
        console.error('Error sending notification:', error);
        return NextResponse.json({ error: 'Failed to send notification' }, { status: 500 });
    }
}