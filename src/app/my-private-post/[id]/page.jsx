
import PostItem from "@/components/parts/PostItem"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import getMyIssues from "@/lib/actions/getMyIssues"
import getSpecificIssue from "@/lib/actions/getSpecificIssue"
import timeAgo from "@/lib/actions/timeAgo"



const SAMPLE_POST = {
  id: '1',
  communityName: 'r/legal',
  author: 'Sure_Back_2542',
  timeAgo: '11 hr. ago',
  title: 'Can I force my mom to financially support me?',
  content: "Long story short, my mom (f32) kicked me (f16) out around 7 months ago. I've been staying with my grandparents and since she's been stopping by once every 2 months. I ask her for money for food, clothes, and other every day expenses and she helps with nothing. My grandparents have been complaining about the rise in utility costs as well. My grandparents are not my legal guardians and we leave in the state on Pennsylvania. Is there anything I can do to legally force her to support me financially?",
  votes: 12,
  commentCount: 35,
  comments: []
}


export default async function Page({params}) {

  const {id} = await params;
  const response = await getSpecificIssue(id);

  return (
    <div className="max-w-2xl mx-auto p-4">

     <PostItem data={response.issue[0]} />

      <h2 className="text-2xl font-bold mt-8 mb-4">Private Suggestions</h2>
      <div className="space-y-4">

        {
          
        response.issue[0].reply.length==0?

        <div className="text-2xl font-semibold text-gray-500 py-10 text-center"> No suggestions yet.</div>

        :
        
        response.issue[0].reply.map((suggestion) => (
          <Card key={suggestion.id} className="p-4 hover:bg-green-50">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-2">
              <h3 className="font-medium text-sm">username</h3>
              • 
              <p className="text-sm text-muted-foreground">{timeAgo(suggestion.date)}</p>
            </div>
            <Button className="bg-main hover:bg-purple-600" size="sm">Relate</Button>
          </div>
          <p className="mt-2 text-sm">{suggestion.message}</p>
        </Card>
        ))}

      </div>
    </div>
  )
}

