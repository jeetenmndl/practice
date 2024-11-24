"use client"
import createChat from '@/lib/actions/createChat'
import React from 'react'
import { Button } from '../ui/button'

const PeopleList = () => {

    const onClick = async (otherID)=>{

        // fetch from server/cookie 
        const myID = "11111";

        const response = await createChat(myID,otherID);

        console.log(response);

    }
   
  return (
    <div className='p-8'>

        <div><Button onClick={()=>{onClick("12345")}}>  12345 Join me</Button></div>
        <div><Button onClick={()=>{onClick("54321")}}>  54321 Join me</Button></div>

    </div>
  )
}

export default PeopleList