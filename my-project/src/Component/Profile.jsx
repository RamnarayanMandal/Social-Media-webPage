import React from "react";
import { CiCirclePlus } from "react-icons/ci";
import { AiOutlineLike } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { useContext } from "react";
import { PostList } from "../Store/Posts-List-Store";
import { Link } from "react-router-dom";
import MinuButton  from "./MinuButton";


const Profile = ({ profile }) => {
  const { deleteProfile } = useContext(PostList);

  const urlImg = [
    "https://cdn.pixabay.com/photo/2024/02/28/14/01/woman-8602128_1280.png",
    "https://cdn.pixabay.com/photo/2023/08/11/03/35/deer-8182756_1280.jpg",
    "https://cdn.pixabay.com/photo/2024/03/05/19/26/duck-8615153_1280.jpg"
  ];

  return (
    <div className="w-full my-4">
      <div className="bg-indigo-700 w-full h-20">
        <div className="flex justify-center absolute top-10 left-10 border-t-orange-700 border-b-yellow-500 border-lime-400 border-2 rounded-xl">
          <img
            className=" rounded-xl w-32 h-52"
            src={profile.url}
            alt="Profile Pic"
          />
        </div>
      </div>
      <div className="flex justify-end content-center">
        <div className="">
          <h1 className="text-2xl font-semibold my-2">{profile.Name}</h1>
          <p className="text-xs">{profile.Username}</p>
          <div className="flex justify-between my-5 gap-2 content-center">
            <Link to="#" className="bg-indigo-700 text-white px-2 p-1 rounded">
              Message
            </Link>
            <Link
              to="#"
              className="border rounded overflow-hidden w-24 h-8 py-0.5 text-center "
            >
              Call
            </Link>
            <Link
              to="#"
            >
            <MinuButton/>
            </Link>
          </div>
        </div>
      </div>
      <hr className="mt-10 mb-4" />
      <div className="flex justify-start gap-4 content-center">
        {urlImg.map((url, index) => {
          return (
            <div key={index} className=" border-t-orange-700 border-b-yellow-500 border-indigo-700 border-2 rounded-full w-20 h-20 cursor-pointer">
              <img
                className="rounded-full w-20 h-20"
                src={url}
                alt="Profile Pic"
              />
            <p className="text-xs mx-4">highlight</p>
            </div>
          );
        })}
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
      <hr className="my-4"/>
      <hr />
    </div>
  );
};

export default Profile;
