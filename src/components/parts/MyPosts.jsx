'use client'

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowBigDown, ArrowBigUp, MessageSquare, Share2, MoreVertical, Reply } from 'lucide-react'
import Link from "next/link"
import { useState } from "react"

export default function MyPosts({data}) {


  function timeAgo(inputDateTime) {
    const now = new Date();
    const inputDate = new Date(inputDateTime);

    const diffInSeconds = Math.floor((now - inputDate) / 1000);

    if (diffInSeconds < 60) {
        return `${diffInSeconds} second${diffInSeconds === 1 ? '' : 's'} ago`;
    }

    const diffInMinutes = Math.floor(diffInSeconds / 60);
    if (diffInMinutes < 60) {
        return `${diffInMinutes} minute${diffInMinutes === 1 ? '' : 's'} ago`;
    }

    const diffInHours = Math.floor(diffInMinutes / 60);
    if (diffInHours < 24) {
        return `${diffInHours} hour${diffInHours === 1 ? '' : 's'} ago`;
    }

    const diffInDays = Math.floor(diffInHours / 24);
    if (diffInDays < 7) {
        return `${diffInDays} day${diffInDays === 1 ? '' : 's'} ago`;
    }

    const diffInWeeks = Math.floor(diffInDays / 7);
    if (diffInWeeks < 4) {
        return `${diffInWeeks} week${diffInWeeks === 1 ? '' : 's'} ago`;
    }

    const diffInMonths = Math.floor(diffInDays / 30);
    if (diffInMonths < 12) {
        return `${diffInMonths} month${diffInMonths === 1 ? '' : 's'} ago`;
    }

    const diffInYears = Math.floor(diffInDays / 365);
    return `${diffInYears} year${diffInYears === 1 ? '' : 's'} ago`;
}




  return (
    <Card className=" group mx-auto border hover:bg-blue-50 shadow-none transition-colors duration-200">
      <div className="p-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-blue-600" />
            <span className="text-sm font-medium">{data.userName}</span>
            <span className="text-sm text-muted-foreground">• {timeAgo(data.createdAt)} • {data.preferredCharacter}</span>
          </div>

          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <MoreVertical className="h-4 w-4" />
            </Button>
          </div>

        </div>

        {/* Content */}
        <h2 className="text-xl font-semibold mb-2">{data.title}</h2>
        <p className="text-sm leading-6 text-muted-foreground mb-4">{data.description} Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates delectus quasi nesciunt repellat eius tempore recusandae similique quaerat animi cupiditate! Aperiam at aspernatur alias perspiciatis quae, nulla distinctio impedit fugiat?</p>

        {/* Footer */}
        <div className="flex justify-between items-center">
          <div>
            {
              data.private?
              <p className=" text-sm">{data.reply_count} • replies • {data.preferredCharacter}</p>
              :
              <p className=" text-sm">{data.comments_count} • comments • {data.preferredCharacter}</p>
            }
          </div>

          <div className="flex items-center  gap-4 ">

            {
              data.private?
              <Link href={"/my-private-post/"+data.id}>
                <Button variant="secondary" size="sm" className=" group-hover:bg-white h-8 gap-2 rounded-full">
                  <Reply className="h-4 w-4" />
                  View Replies
                </Button>
              </Link>
              :
              <Link href={"/public-post/"+data.id}>
                <Button variant="secondary" size="sm" className=" group-hover:bg-white h-8 gap-2 rounded-full">
                  <MessageSquare className="h-4 w-4" />
                  View Comments
                </Button>
              </Link>
            }
          

            <Button variant="secondary" size="sm" className=" group-hover:bg-white h-8 gap-2 rounded-full">
              <Share2 className="h-4 w-4" />
              Share
            </Button>
          </div>
        </div>

      </div>
    </Card>
  )
}

