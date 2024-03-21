import React, { useContext, useEffect, useState } from 'react';
import Post from './Post';
import{ PostList as PostListData} from '../Store/Posts-List-Store';
import WelComeSms from './WelComeSms';
import LoadingSpinner from './LoadingSpinner';

const PostList = () => {
  const { postList,addIntialPosts } = useContext(PostListData); // Access the posts from the context
  const [fetching,setFetching] = useState(false); 

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    setFetching(true);
    fetch('https://dummyjson.com/posts',{signal})
      .then(res => res.json())
      .then(data => {
        addIntialPosts(data.posts);
        setFetching(false);
      });

          return () =>{
            console.log ('clearing up UseEffect')
            controller.abort();
          } 
  }, []);
  return (
    <>
      {fetching && <LoadingSpinner/>}
      {!fetching && postList.length === 0 && <WelComeSms/>}
       
     {!fetching && <div className="flex flex-wrap justify-center gap-10">
        {postList.map((post) => ( // Iterate over posts
          <Post key={post.id} post={post} /> // Pass each post as a prop to the Post component
        ))}
      </div>
      }
    </>
  );
};

export default PostList;
