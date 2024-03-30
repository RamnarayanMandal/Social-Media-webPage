import React, { useContext } from "react";
import { PostList } from "../Store/Posts-List-Store";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AiOutlineLike } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { IoIosSend } from "react-icons/io";
import { CommentBox } from "./CommentBox";

const Post = ({ post }) => {
  const { deletePost } = useContext(PostList);

  return (
    <>
    
    <div className="border rounded-lg overflow-hidden sm:p-3 md:p-4 lg:p-6 w-full ">
      {/* Reaction badge */}
      <button type="button" className="relative">
        <span className="absolute top-0 start-full -translate-x-1/2 translate-y-1/2 inline-block p-4 px-2 py-0.5 text-xs font-bold leading-4 text-white bg-red-600 rounded-full ">
          {post.reactions}+<span className="sr-only">unread messages</span>
        </span>
      </button>
      {/* Post details */}
      <div className="mt-8">
        {" "}
        {/* Adjusted top padding */}
        <h1 className="text-lg font-semibold">{post.Name}</h1>
        <h2 className="text-gray-600 text-sm mb-4">{post.title}</h2>
        <p className="text-gray-800">{post.caption}{post.body}</p>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap mt-4">
        {post.tags.map((tag, index) => (
          <button
            key={index}
            className="bg-cyan-500 hover:bg-cyan-600 text-white py-1 px-3 rounded mr-2 mb-2"
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Delete button */}
      <div className="flex justify-around content-center items-center border rounded-lg overflow-hidden p-2 mt-2">
        <button
          className="bg-red-600 hover:bg-red-700 text-white py-2 px-2 rounded  flex items-center text-1xl font-extrabold"
          onClick={() => deletePost(post.id)}
        >
          <MdDelete />
        </button>

        <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-2 rounded-full flex items-center text-1xl font-extrabold ">
        <IoIosSend />
        </button>

        <CommentBox/>
        
        <button className="bg-pink-600 hover:bg-pink-700 text-white py-2 px-2 rounded-full  flex items-center text-1xl font-extrabold ">
          <AiOutlineLike />
        </button>

      </div>

      <ToastContainer position="top-center" pauseOnHover theme="colored" />
    </div>
   
    </>
  );
};

export default Post;
