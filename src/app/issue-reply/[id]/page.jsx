import PostItem from "@/components/parts/PostItem"
import { ReplyForm } from "@/components/parts/ReplyForm"


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

export default function PostWithSuggestionFormPage() {
  return (
    <div className="max-w-2xl mx-auto p-4">
      

      <PostItem data={{title:SAMPLE_POST.title,createdAt: new Date(), description: SAMPLE_POST.content,id:1, private:true}} />

      <div className="mt-8">
        <ReplyForm />
      </div>
    </div>
  )
}

