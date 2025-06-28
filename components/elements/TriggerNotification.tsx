'use client';
export default function TriggerNotification() {
  const sendNotification = async () => {
    const res = await fetch('/api/push', {
      method: 'POST',
      body: JSON.stringify({
        title: '🔔 New Alert',
        body: 'This is a test notification!',
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await res.json();
    console.log('Notification result:', data);
  };

  return <button onClick={sendNotification}>Send Push Notification</button>;
}
