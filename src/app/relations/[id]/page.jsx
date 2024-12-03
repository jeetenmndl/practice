import ChatPage from '@/components/section/ChatPage';
import RelationChats from '@/components/section/RelationChats';
import getMyRelations from '@/lib/actions/getMyRelations';
import { currentUser } from '@clerk/nextjs/server'
import React from 'react'

const page = async ({params}) => {

  const {id} = await params;
  const relations = await getMyRelations();

    const user = await currentUser();
    const userID = user.id;

  return (
    <main className='px-28 flex '>

    <section className='w-1/4'>
      <RelationChats data={relations.data} active={id} />
    </section>

    <section className='w-2/4'>
      <ChatPage userID={userID} channelID={id} />

    </section>

    <section className='w-1/4'>
        
    </section>

</main>
  )
}

export default page