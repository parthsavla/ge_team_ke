import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
    const { token } = await req.json();

    // TODO: Save this to DB, indexed by session user
    console.log("🔒 Received FCM token:", token);

    return NextResponse.json({ success: true });
}