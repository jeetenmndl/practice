import Chat2 from '@/components/section/Chat2';
import RelationChats from '@/components/section/RelationChats';
import getMyRelations from '@/lib/actions/getMyRelations';
import { currentUser } from '@clerk/nextjs/server'
import { Smile } from 'lucide-react';
import React from 'react'
import { ChannelList } from 'stream-chat-react';

const page = async ({params}) => {

  const {id} = await params;
    // get relations through user id 
    const user = await currentUser();
    const userID = user.id;

    const relations = await getMyRelations();


  return (
    <main className='px-4 flex '>

        <section className='w-1/6'>
        <RelationChats data={relations.data} active={"none"} />
        </section>

        <section className='w-4/6 border-x py-10 px-4 h-[600px]'>

        <div className='border rounded-3xl w-full h-full flex gap-4 flex-col items-center justify-center'>
          <p className='text-2xl font-semibold text-gray-600'>Select a chat to continue</p>
          <Smile size={50} className='text-gray-600' />

        </div>

        </section>

        <section className='w-1/6'>
            
        </section>

    </main>
  )
}

export default page