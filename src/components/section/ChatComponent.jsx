"use client"

import React, { useEffect, useState } from "react";
import { StreamChat } from "stream-chat";
import { Chat, Channel, ChannelHeader, MessageList, MessageInput } from "stream-chat-react";
import "@stream-io/stream-chat-css/dist/v2/css/index.css";
import "@stream-io/stream-chat-css/dist/v2/css/emoji-mart.css";
import "@stream-io/stream-chat-css/dist/v2/css/emoji-replacement.css";
import "@stream-io/stream-chat-css/dist/v2/css/index.layout.css";



const ChatComponent = ({ userID }) => {
  const [client, setClient] = useState(null);
  const [channel, setChannel] = useState(null);

  useEffect(() => {
    const initChat = async () => {
      const response = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/api/stream/token`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userID }),
      });

      const { token } = await response.json();

      const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY;
      const chatClient = StreamChat.getInstance(apiKey);

      await chatClient.connectUser(
        {
          id: userID,
          name: `User ${userID}`,
        },
        token
      );

      const newChannel = chatClient.channel("messaging", {
        members: [userID, "12345"], // Replace with dynamic user IDs
      });

      setChannel(newChannel);
      setClient(chatClient);
    };

    initChat();

    return () => {
      if (client) client.disconnectUser();
    };
  }, [userID]);

  if (!client || !channel) return <div>Loading chat...</div>;

  return (
    <Chat client={client} theme="messaging light">
      <Channel channel={channel}>
        <div className="flex flex-col w-full h-dvh">

        <ChannelHeader />
        <MessageList />
        <MessageInput className="fixed bottom-6"/>
        </div>
      </Channel>
    </Chat>
  );
};

export default ChatComponent;
