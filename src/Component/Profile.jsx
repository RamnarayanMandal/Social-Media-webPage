import React from "react";
import { CiCirclePlus } from "react-icons/ci";
import { AiOutlineLike } from "react-icons/ai";
import { MdDelete } from "react-icons/md";

const Profile = ({ profile }) => {
  return (
    <div className="border-solid border-slate-900 border-2 rounded p-5 my-4">
      <button type="button" className="relative">
        <span className="absolute -left-4 -top-4  inline-block p-4 px-4 py-4 text-xs font-bold leading-4 text-white bg-red-600 rounded-full ">
          90+<span className="sr-only">unread messages</span>
        </span>
      </button>
      <div className="flex justify-center">
        <img className="rounded" src={profile.url} alt="Profile Pic" />
      </div>
      <div>
        <h1 className="my-1 font-mono font-medium ">Name: {profile.Name}</h1>

        <h1 className="my-1 font-mono font-medium ">
          UserName: {profile.Username}
        </h1>
        <p className="my-2">
          Bio <br />
          {profile.Bio}
        </p>
      </div>
      <div className="flex justify-between content-center">
        <button
          className="bg-red-600 hover:bg-red-700 text-white py-4 px-4 rounded mt-4 flex items-center text-2xl font-extrabold"
          onClick={() => deletePost(post.id)}
        >
          <MdDelete />
        </button>
        <button className="bg-green-600 hover:bg-green-700 text-white py-4 px-4 rounded-full mt-4 flex items-center text-2xl font-extrabold">
          <CiCirclePlus />
        </button>

        <button className="bg-pink-600 hover:bg-pink-700 text-white py-4 px-4 rounded-full mt-4 flex items-center text-2xl font-extrabold ">
          <AiOutlineLike />
        </button>
      </div>
    </div>
  );
};

export default Profile;
