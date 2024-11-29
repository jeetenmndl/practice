import React from 'react';
import PostItem from '../parts/PostItem';

const Feed = () => {
    const posts = [
        {
          username: 'JohnDoe',
          timestamp: '22 hr. ago',
          title: 'My girlfriend is prolly going to get married soon.. what should I do??',
          content: 'My (23M) girlfriend (22F) is prolly going to get married and I am tensed af .. She is saying that her parents have started talking about her marriage... They be asking her if she has someone or do they need to find someone for her... My gf is saying she wanna tell about me to her parents but I dont want that.. I dont want to get involved in this thing this soon.. I am not even financially independent.. I recently qualified as a CA and even my 3 year articleship is yet to be completed, my fuckin principal extended my articleship period by 3 fuckin months that I am still stuck in it.. I dont have to ask money from my parents for minor expenses as I look after it by myself with my stipend but I am ...',
          votes: 1,
          comments: 31
        },
        {
          username: 'SaraJane',
          timestamp: '6 hr. ago',
          title: 'Wife had an affair when her sister passed away',
          content: '4 years ago, my SIL unexpectedly passed away. My wife was very close with her, and her sisters death affected her a lot. She really started resenting everyone, including me. However, a year later, my wife joined therapy to deal with the grief, and it really helped her a lot. My wife apologized for she had behaved the past year but I told her it was ok, and there was no one way to deal with grief, and I would support her regardless. Our marriage got back on its track, and the next year we had our first baby. Our baby is now 2, and things were going great and I couldnt have been happier. However, last week, my wife wanted to confess something to me. She said she had an emotional affair with...',
          votes: 348,
          comments: 272
        }
      ];

  return (
    <section className="posts-section">
      {posts.map((post, index) => (
        <PostItem key={index} post={post} />
      ))}
    </section>
  );
};

export default Feed;