import React, { useState } from 'react';
import { FcLike } from "react-icons/fc";
import { IoIosHeartDislike } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Post = ({ createdPost, deletePost }) => {
    const [likes, setLikes] = useState(Array(createdPost.length).fill(0));

    const handleLike = (index) => {
        const updatedLikes = [...likes];
        updatedLikes[index]++;
        setLikes(updatedLikes);
    };

    const handleDislike = (index) => {
        const updatedLikes = [...likes];
        updatedLikes[index]--;
        setLikes(updatedLikes);
    };

    const handleDelete = (name) => {
        deletePost(name);
        toast.success('Post deleted successfully.');
    };

    return (
        <>
            {createdPost.map((post, index) => (
                <div key={index} className='w-1/4 border-solid border-slate-900 border-2 min-h-96 rounded p-5'>
                    <div className='flex justify-evenly items-center'>
                        <img className='rounded-full w-72 h-72' src={post.url} alt="Profile Pic" />
                    </div>

                    <div>
                        <h2 className='text-center my-5 font-mono font-medium'>Profile</h2>
                        <h1 className='my-2 font-mono font-medium '>Name: {post.Name}</h1>
                        <p className='my-4'>{post.aboutPost}</p>
                        <hr />
                        <div className='flex justify-evenly items-center'>
                            <div className='flex flex-col my-2'>
                                <button className='text-2xl flex' onClick={() => handleLike(index)}>
                                    <FcLike />
                                </button>
                            </div>
                            <div className='flex flex-col'>
                                <button className='text-2xl p-2' onClick={() => handleDislike(index)}>
                                    <IoIosHeartDislike />
                                </button>
                            </div>
                            <div className='flex flex-col text-blue-500'>
                                <button className='text-2xl p-2' onClick={() => handleDelete(post.Name)}>
                                    <MdDelete />
                                </button>
                            </div>
                        </div>
                        <hr />
                        <p className='text-xs border-2 text-center rounded-full'>{likes[index]}</p>
                    </div>
                </div>
            ))}
            <ToastContainer position="top-center" pauseOnHover theme="colored" />
        </>
    );
}

export default Post;
