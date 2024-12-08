import MitraChat from '@/components/section/MitraChat'
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader } from '@/components/ui/card';
import loadConversation from '@/lib/actions/loadConversation'
import React from 'react'

const page = async () => {

  const response = await loadConversation();
  // console.log(response)
  return (
    <main className="px-28 flex">
      <MitraChat loadedMessages={response.data || []} />

      <section className='w-1/3 p-4 '>
        <Card className="sticky top-8 h-[570px]">
          <CardHeader>
          <div className="flex gap-4 border-b pb-4">
            <div className="bg-blue-500 h-8 w-8 rounded-full"></div>
            <h2 className='text-2xl font-semibold'>Mitra</h2>
          </div>
          
          </CardHeader>
          <CardContent>
            <div className="space-y-2 w-full mt-72">

            <Button className="bg-red-500 hover:bg-red-600 w-full">Report</Button>
            <Button variant="secondary" className="w-full" >Feedback</Button>
            </div>


          </CardContent>
          <CardFooter>
          <div className="text-xs font-light text-gray-500">
            Share your thoughts with mitra and get suggestions about what people did to handle the challanges that you are currently facing.
          </div>
          </CardFooter>
        </Card>

      </section>

    </main>
  )
}

export default page