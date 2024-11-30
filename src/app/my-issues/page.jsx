import getMyIssues from '@/lib/actions/getMyIssues'
import { currentUser } from '@clerk/nextjs/server'
import React from 'react'

const page = async () => {

  // const response = await getMyIssues();
  const {id} = await currentUser();

  console.log(id)

  return (
    <div>my issues</div>
  )
}

export default page