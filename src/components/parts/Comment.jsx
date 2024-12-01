'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { ArrowBigDown, ArrowBigUp, Award, MessageSquare, MoreHorizontal, Share2 } from 'lucide-react'



export function Comment ({ comment, depth = 0 }) {
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [voteCount, setVoteCount] = useState(comment.votes)
  const [isUpvoted, setIsUpvoted] = useState(false)
  const [isDownvoted, setIsDownvoted] = useState(false)

  const handleUpvote = () => {
    if (isUpvoted) {
      setVoteCount(prev => prev - 1)
      setIsUpvoted(false)
    } else {
      if (isDownvoted) {
        setVoteCount(prev => prev + 2)
        setIsDownvoted(false)
      } else {
        setVoteCount(prev => prev + 1)
      }
      setIsUpvoted(true)
    }
  }

  const handleDownvote = () => {
    if (isDownvoted) {
      setVoteCount(prev => prev + 1)
      setIsDownvoted(false)
    } else {
      if (isUpvoted) {
        setVoteCount(prev => prev - 2)
        setIsUpvoted(false)
      } else {
        setVoteCount(prev => prev - 1)
      }
      setIsDownvoted(true)
    }
  }

  return (
    <div className="relative flex items-start gap-2">
      {depth > 0 && (
        <div 
          className="absolute left-3 top-8 bottom-0 w-[2px] bg-gray-200"
          onClick={() => setIsCollapsed(!isCollapsed)}
        />
      )}
      <Button
        variant="outline"
        size="sm"
        className="h-6 w-6 rounded-full p-0 text-xs"
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        {isCollapsed ? '+' : '−'}
      </Button>
      <div className="flex-1">
        <div className="flex items-start gap-2">
          <div className="w-6 h-6 rounded-full bg-gray-200" />
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <span className="font-medium">{comment.author}</span>
              <span className="text-sm text-muted-foreground">• {comment.timeAgo}</span>
            </div>
            {!isCollapsed && (
              <>
                <p className="text-sm mt-1">{comment.content}</p>
                <div className="flex items-center gap-2 mt-2">
                  <div className="flex items-center bg-muted rounded-full">
                    <Button
                      variant="ghost"
                      size="icon"
                      className={`h-6 w-6 rounded-l-full ${isUpvoted ? 'text-orange-500' : ''}`}
                      onClick={handleUpvote}
                    >
                      <ArrowBigUp className="h-4 w-4" />
                    </Button>
                    <span className="px-2 text-xs font-medium">{voteCount}</span>
                    <Button
                      variant="ghost"
                      size="icon"
                      className={`h-6 w-6 rounded-r-full ${isDownvoted ? 'text-blue-500' : ''}`}
                      onClick={handleDownvote}
                    >
                      <ArrowBigDown className="h-4 w-4" />
                    </Button>
                  </div>
                  <Button variant="ghost" size="sm" className="h-6 text-xs gap-1">
                    <MessageSquare className="h-3 w-3" />
                    Reply
                  </Button>
                  <Button variant="ghost" size="sm" className="h-6 text-xs gap-1">
                    <Award className="h-3 w-3" />
                    Award
                  </Button>
                  <Button variant="ghost" size="sm" className="h-6 text-xs gap-1">
                    <Share2 className="h-3 w-3" />
                    Share
                  </Button>
                  <Button variant="ghost" size="icon" className="h-6 w-6">
                    <MoreHorizontal className="h-3 w-3" />
                  </Button>
                </div>
              </>
            )}
          </div>
        </div>
        {!isCollapsed && comment.replies && (
          <div className="pl-8 mt-2">
            {comment.replies.map((reply) => (
              <Comment key={reply.id} comment={reply} depth={depth + 1} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

