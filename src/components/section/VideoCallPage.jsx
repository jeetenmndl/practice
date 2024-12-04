'use client'

import React, { useCallback, useEffect, useRef, useState } from 'react'
import { StreamVideo, StreamVideoClient, StreamCall, SpeakerLayout, CallControls, StreamTheme } from '@stream-io/video-react-sdk'

import '@stream-io/video-react-sdk/dist/css/styles.css'
import Layout from './Layout'

export default function VideoCallPage({userID, token, callID}) {
  // const [client, setClient] = useState(null)
  const clientRef = useRef(null);
  const [call, setCall] = useState(null)

  

  useEffect(() => {
    const initClient = async () => { 
      // console.log("inside init")
      const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY;
      if (!apiKey) {
        console.error('Stream API key is not set')
        return
      }

      const userId = userID;
      // console.log("user id is:",userID)
      
      try {

        

        const callId = "123-2-3-084";
      // console.log("call id is:",callID)


        const newClient = new StreamVideoClient({
          apiKey,
          token,
          user: { id: userId, type: "default" },
        })

        clientRef.current = newClient;
        // setClient(newClient)

        const newCall = newClient.call("default", callId);

        console.log("new call is", newCall);

        await newCall.getOrCreate()
        // await newCall.join();
        setCall(newCall)
      } catch (error) {
        console.error('Error initializing client:', error)
      }
    }

    initClient()


    return () => {
       clientRef.current.disconnectUser();
    }
  }, [])

  if (!clientRef.current || !call) {
    return <div>Loading...</div>
  }

  return (
    <Layout title="Video Call">
      <div className="h-[600px]">
        <StreamVideo client={clientRef.current}>
          <CallUI call={call} />
        </StreamVideo>
      </div>
    </Layout>
  )
}

function CallUI({ call }) {
  useEffect(() => {
    call.join({ create: true })
    return () => {
      call.leave()
    }
  }, [call])

  return (
    <div className="h-full">
      <StreamCall call={call}>
        <StreamTheme>
          <SpeakerLayout />
          <CallControls />
        </StreamTheme>
      </StreamCall>
    </div>
  )
}


