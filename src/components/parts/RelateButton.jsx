"use client"

import { useState } from "react";
import { Button } from "../ui/button"
import { useToast } from "@/hooks/use-toast";
import buildRelation from "@/lib/actions/buildRelation";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { connectUser, disconnectUser, streamToken } from "@/lib/actions/stream";
import { StreamChat } from "stream-chat";

const RelateButton = ({userID, suggestion}) => {

    const [loading, setLoading] = useState(false);
    const {toast} = useToast();
    const router = useRouter();


    const handleAccept = async () => {

      try {
        setLoading(true);

        const streamClient = StreamChat.getInstance(process.env.NEXT_PUBLIC_STREAM_API_KEY);

        // Connect both users to Stream
        const token1 = await streamToken(suggestion.repliedBy);

        await streamClient.connectUser({ id: suggestion.repliedBy, name: `User ${suggestion.repliedBy}` }, token1);

        await streamClient.disconnectUser();

        const token2 = await streamToken(userID);

        await streamClient.connectUser({ id: userID, name: `User ${userID}` }, token2);

        await connectUser(userID, `User ${userID}`);
  
        // Create a new channel

        const channel = streamClient.channel('messaging', {
          members: [userID, suggestion.repliedBy],
        });
  
        const channelInfo = await channel.create();
        const channelData = {
          id: channelInfo.channel.id,
          createdAt: channelInfo.channel.created_at
        }
        
        const response = await buildRelation(suggestion, token2, token1, channelData );

        if(response.success){
          router.push('/relations');
        }else{
          toast({
            title: "OOPS!",
            description: "Internal Server Error",
            variant: "destructive"
          })
        }
        
        // Redirect to chats page
      } catch (error) {
        console.error('Error accepting request:', error);
      }
      finally{
        // await streamClient.disconnectUser();
        setLoading(false)
      }
    };

  return (
    <>
      {
              
              !loading
              ?
              <Button className="bg-main hover:bg-purple-600" size="sm" onClick={handleAccept}>
                Relate
              </Button>
              :
              <Button className="bg-main" disabled>
                  <Loader2 className=" h-4 w-4 animate-spin" />
              </Button>
          }
 

    </>
    
  )
}

export default RelateButton