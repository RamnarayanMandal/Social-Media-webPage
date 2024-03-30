import React from "react";
import { CiCirclePlus } from "react-icons/ci";
import { AiOutlineLike } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { useContext } from "react";
import { PostList } from "../Store/Posts-List-Store";
import { Link } from "react-router-dom";
import { MinuButton } from "./MinuButton";
import { SmsBox } from "./SmsBox";

const Profile = ({ profile }) => {
  const { deleteProfile } = useContext(PostList);

  const urlImg = [
    "https://cdn.pixabay.com/photo/2024/02/28/14/01/woman-8602128_1280.png",
    "https://cdn.pixabay.com/photo/2023/08/11/03/35/deer-8182756_1280.jpg",
    "https://cdn.pixabay.com/photo/2024/03/05/19/26/duck-8615153_1280.jpg"
  ];

  return (
    <div className="w-full my-4">
      <div className="flex justify-between">
        <div className="rounded w-20 h-20 md:w-40 md:h-52">
          <img
            className="rounded"
            src={profile.url}
            alt="Profile Pic"
          />
        </div>
        <div className="text-center md:text-left mt-4 w-1/2">
          <h1 className="text-2xl font-semibold my-2">{profile.Name}</h1>
          <p className="text-xs">{profile.Username}</p>

          <div className="flex my-4 justify-between">
             <div>
             <SmsBox url={profile.url} Name={profile.Name} />
             </div>
              <div>
              <Link
              to="#"
              className="border rounded overflow-hidden w-32 h-8 py-1.5 px-4 text-center "
            >
              Call
            </Link>
              </div>
               <div>
               <MinuButton  className="text-4xl"/>
               </div>
          </div>
        </div>
      </div>
      <hr className="mt-10 mb-4" />
      <div className="flex justify-start gap-4 content-center">
        {urlImg.map((url, index) => (
          <div key={index} className="border-t-orange-700 border-b-yellow-500 border-indigo-700 border-2 rounded-full w-20 h-20 cursor-pointer">
            <img
              className="rounded-full w-20 h-20"
              src={url}
              alt="Profile Pic"
            />
            <p className="text-xs mx-4">highlight</p>
          </div>
        ))}
      </div>
      <hr className="my-4 mt-8" />
      <div className="flex justify-between content-center ">
        <div className="w-1/3">
          <h1 className="text-1xl">Bio</h1>
        </div>
        <div className="w-2/3">
          <p className="text-xs text-left">{profile.Bio}</p>
        </div>
      </div>

      <hr className="my-4" />
      <div className="flex justify-between content-center ">
        <div className="w-1/3">
          <h1 className="text-1xl">Location</h1>
        </div>
        <div className="w-2/3">
          <p className="text-xs text-left">Delhi</p>
        </div>
      </div>

      <hr className="my-4" />
      <div className="flex justify-between content-center ">
        <div className="w-1/3">
          <h1 className="text-1xl">Birthday</h1>
        </div>
        <div className="w-2/3">
          <p className="text-xs text-left">02/03/2001</p>
        </div>
      </div>
      <hr className="my-4" />

      <div className="flex justify-between content-center">
        <button
          className="bg-red-600 hover:bg-red-700 text-white py-2 px-2 rounded  flex items-center text-2xl font-extrabold"
          onClick={() => deleteProfile(profile.id, profile.Password)}
        >
          <MdDelete />
        </button>
        <Link
          to="/createPost"
          className="bg-green-600 hover:bg-green-700 text-white py-2 px-2 rounded-full  flex items-center text-2xl font-extrabold"
        >
          <CiCirclePlus />
        </Link>

        <button className="bg-pink-600 hover:bg-pink-700 text-white py-2 px-2 rounded-full flex items-center text-1xl font-extrabold ">
          <AiOutlineLike />
        </button>
      </div>
      <hr className="my-4" />
      <hr />
    </div>
  );
};

export default Profile;
