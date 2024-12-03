import Chat2 from '@/components/section/Chat2';
import RelationChats from '@/components/section/RelationChats';
import getMyRelations from '@/lib/actions/getMyRelations';
import { currentUser } from '@clerk/nextjs/server'
import React from 'react'
import { ChannelList } from 'stream-chat-react';

const page = async ({params}) => {

  const {id} = await params;
    // get relations through user id 
    const user = await currentUser();
    const userID = user.id;

    const relations = await getMyRelations();


  return (
    <main className='px-28 flex '>

        <section className='w-1/4'>
        <RelationChats data={relations.data} active={"none"} />
        </section>

        <section className='w-2/4'>

        </section>

        <section className='w-1/4'>
            
        </section>

    </main>
  )
}

export default page