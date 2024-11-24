"use server"

export default async function createChat(userID, otherUserId) {
    const response = await fetch(`${process.env.DOMAIN}/api/stream/token`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userID, otherUserId }),
    });
  
    const { channelId } = await response.json();
    return channelId;
  }