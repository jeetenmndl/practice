
import PostItem from "@/components/parts/PostItem"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"



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

const SAMPLE_SUGGESTIONS = [
  {
    id: '1',
    username: 'LegalEagle123',
    description: "You should contact Child Protective Services immediately. Your mother has a legal obligation to support you until you're 18.",
    date: '2 hours ago'
  },
  {
    id: '2',
    username: 'SocialWorker22',
    description: "There are youth shelters and support programs that can help you. I'd be happy to provide some local resources.",
    date: '1 hour ago'
  },
  {
    id: '3',
    username: 'FamilyCounselor',
    description: "Have you tried family mediation? It might help improve communication between you and your mother.",
    date: '30 minutes ago'
  }
]

export default function Page({params}) {

    // get from params.id 

  return (
    <div className="max-w-2xl mx-auto p-4">

     <PostItem data={{title:SAMPLE_POST.title,createdAt: new Date(), description: SAMPLE_POST.content,id:1, private:true}} />

      <h2 className="text-2xl font-bold mt-8 mb-4">Private Suggestions</h2>
      <div className="space-y-4">

        {SAMPLE_SUGGESTIONS.map((suggestion) => (
          <Card key={suggestion.id} className="p-4 hover:bg-green-50">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="font-semibold">{suggestion.username}</h3>
              <p className="text-sm text-muted-foreground">{suggestion.date}</p>
            </div>
            <Button className="bg-main hover:bg-purple-600" size="sm">Relate</Button>
          </div>
          <p className="mt-2 text-sm">{suggestion.description}</p>
        </Card>
        ))}

      </div>
    </div>
  )
}

