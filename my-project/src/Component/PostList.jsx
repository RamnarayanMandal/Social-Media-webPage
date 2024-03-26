import React, { useContext } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../Store/Posts-List-Store";
import WelComeSms from "./WelComeSms";
import LoadingSpinner from "./LoadingSpinner";
import SideBar from "./SideBar";

const PostList = () => {
  const { postList, fetching } = useContext(PostListData); // Access the posts from the context

  return (
    <>
      <div className="flex flex-wrap my-32">
     
        <div className=" md:w-1/4 hidden md:block ">
          <SideBar/>
        </div>
        {fetching && <LoadingSpinner className="w-full lg:w-7/12 px-4 sm:px-min-32 lg:px:32" />}
        {!fetching && postList.length === 0 && <WelComeSms className="w-full lg:w-7/12 px-4 sm:px-min-32 lg:px:32" />}
        {!fetching &&
        
        <div className="w-full lg:w-6/12 px-4 sm:px-min-32 lg:px:32 flex flex-wrap gap-20">
          {postList.map((post) => (
            <div key={post.id} className="">
              <Post post={post} />
            </div>
          ))}
        
        </div>
        }
       
        <div className="hidden md:hidden lg:block w-1/4 h-screen bg-teal-600"></div>
      </div>
    </>
  );
};

export default PostList;
