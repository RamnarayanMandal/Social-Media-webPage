import React, { useContext } from 'react';
import Post from './Post';
import{ PostList as PostListData} from '../Store/Posts-List-Store';

const PostList = () => {
  const { postList } = useContext(PostListData); // Access the posts from the context
  console.log(postList)
  return (
    <>
      <div className="flex flex-wrap justify-center gap-10">
        {postList.map((post) => ( // Iterate over posts
          <Post key={post.id} post={post} /> // Pass each post as a prop to the Post component
        ))}
      </div>
    </>
  );
};

export default PostList;
