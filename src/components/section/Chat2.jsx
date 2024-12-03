"use client"

import React from 'react'
import { ChannelList } from 'stream-chat-react'

const Chat2 = ({userID}) => {
  return (
    <div>
         <ChannelList filters={ {type: "messaging", members: { $in: [userID] }} } className="w-1/4" />
    </div>
  )
}

export default Chat2