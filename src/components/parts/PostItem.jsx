'use client'

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowBigDown, ArrowBigUp, MessageSquare, Share2, MoreVertical } from 'lucide-react'
import { useState } from "react"

export default function PostItem({
  communityName,
  timeAgo,
  title,
  content,
  votes = 0,
  comments = 0
}) {


  return (
    <Card className=" group mx-auto border hover:bg-blue-50 shadow-none transition-colors duration-200">
      <div className="p-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-blue-600" />
            <span className="text-sm font-medium">{communityName}</span>
            <span className="text-sm text-muted-foreground">• {timeAgo}</span>
          </div>
          <div className="flex items-center gap-2">
            
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <MoreVertical className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Content */}
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-sm text-muted-foreground mb-4">{content} Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt id nam totam esse a voluptas recusandae accusamus vero dolorem! Error, alias veritatis incidunt vitae laboriosam commodi quidem voluptatem nesciunt aperiam tempora nam! Totam ex culpa recusandae deleniti obcaecati ab aliquam voluptates rerum quidem! Rerum, totam.</p>

        {/* Footer */}
        <div className="flex items-center gap-4 ">
         
          <Button variant="ghost" size="sm" className=" group-hover:bg-white h-8 gap-2">
            <MessageSquare className="h-4 w-4" />
            <span>{comments}</span>
          </Button>
          <Button variant="ghost" size="sm" className=" group-hover:bg-white h-8 gap-2">
            <Share2 className="h-4 w-4" />
            Share
          </Button>
        </div>
      </div>
    </Card>
  )
}

