import React from 'react';
import PostItem from '../parts/PostItem';
import getAllIssues from '@/lib/actions/getAllIssues';

const Feed = async () => {
    const issues = await getAllIssues();
    console.log(issues.data)


  return (
    <section className='space-y-6 my-6'>
      {
        issues.success
        ?

        <>
        {
          issues.data.private_issues.map((item)=>{
            return(
              <PostItem key={item.id} communityName="r/NepalSocial"
              timeAgo={item.createdAt.substring(0,10)}
              title={item.title}
              content={item.description}
              votes={1}
              comments={31}/>
            )
          })
        }
       
        
        </>

        
        :
        "you dont have issues"
      }
    </section>
  );
};

export default Feed;