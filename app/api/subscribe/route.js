// app/api/subscribe/route.js
import { NextResponse } from 'next/server';

// This is a mock database. In a real app, you would use a proper database.
const subscriptions = [];

export async function POST(request) {
    try
    {
        const subscription = await request.json();
        console.log('Received subscription:', subscription);

        // TODO: In a real application, you would save this subscription to a database
        // associated with a user.
        subscriptions.push(subscription);

        return NextResponse.json({ success: true }, { status: 201 });
    } catch (error)
    {
        console.error('Error saving subscription:', error);
        return NextResponse.json({ error: 'Failed to save subscription' }, { status: 500 });
    }
}
