import getMyIssues from '@/lib/actions/getMyIssues'
import { currentUser } from '@clerk/nextjs/server'
import React from 'react'
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowBigDown, ArrowBigUp, MessageSquare, Share2, MoreVertical } from 'lucide-react'
import PostItem from '@/components/parts/PostItem'


const page = async () => {

  // const response = await getMyIssues();
  const {id} = await currentUser();

  console.log(id)

  return (
    <div className="p-4 space-y-4">
      <PostItem
        communityName="r/NepalSocial"
        timeAgo="19 hr. ago"
        title="My parents are forcing me to get married"
        content="My parents have started looking for a groom for me, but I can't marry someone I don't feel a connection with. Is there anyone who's open to getting married for their parents sake? We can live as friends with no expectations..."
        votes={1}
        comments={31}
      />
      <PostItem
        communityName="r/AITAH"
        timeAgo="6 hr. ago"
        title="Wife had an affair when her sister passed away"
        content="4 years ago, my SIL unexpectedly passed away. My wife was very close with her, and her sister's death affected her a lot..."
        votes={348}
        comments={272}
      />
      
    </div>
  )
}

export default page