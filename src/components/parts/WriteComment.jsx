"use client"

import React, { useState } from 'react'
import { Textarea } from '../ui/textarea'
import { Button } from '../ui/button'

const WriteComment = () => {

    const [comment, setComment] = useState("")

    const handleClick = async ()=>{
        console.log(comment);
    }

    const handleChange = (e)=>{
        setComment(e.target.value)
    }

  return (
    <div className="mb-16">
        <h3 className="text-lg font-semibold mb-2">Write your comment</h3>
        <Textarea id="commentBox" onChange={handleChange}  placeholder="What are your thoughts?" className="w-full" />
        <Button onClick={handleClick} className="mt-2 float-right">Comment</Button>
  </div>
  )
}

export default WriteComment