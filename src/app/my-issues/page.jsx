import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import MyPosts from '@/components/parts/MyPosts';
import getMyIssues from '@/lib/actions/getMyIssues';


const Page = async () => {
    const issues = await getMyIssues();
    // console.log(issues.data)


  return (
    <main className='px-28 py-4 flex gap-4'>

    <section className='my-6 w-3/4'>
      {
        issues.success
        ?

        <>
        <Tabs defaultValue="public">
        <TabsList className=" mb-4">
          <TabsTrigger value="public" className="px-20 ">Public</TabsTrigger>
          <TabsTrigger value="private" className="px-20 ">Private</TabsTrigger>
        </TabsList>
        <TabsContent value="public">
          <div className="grid grid-cols-2 gap-3">
            {
              issues.data.public_issues.map((item)=>{
                return(
                  <>
                  <MyPosts key={item.id} data={item} />
                  <MyPosts key={item.id+1} data={item} />
                  <MyPosts key={item.id+2} data={item} />
                  </>
                )
              })
            }
          </div>
        </TabsContent>

        <TabsContent value="private">
        <div className="grid grid-cols-2 gap-2">
        {
          issues.data.private_issues.map((item)=>{
            return(
              <MyPosts key={item.id} data={item} />
            )
          })
        }
        </div>
        </TabsContent>
      </Tabs>
       
       
        
        </>

        
        :
        "you dont have issues"
      }
    </section>

    <aside className='w-1/4'>

    </aside>
    </main>

  );
};

export default Page;