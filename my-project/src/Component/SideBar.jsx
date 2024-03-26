import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { RiAccountCircleFill } from "react-icons/ri";
import { MdManageAccounts } from "react-icons/md";
import { MdOutlineCompost } from "react-icons/md";
import { TbMessageCircle2Filled } from "react-icons/tb";
import { BsCameraReelsFill } from "react-icons/bs";
import { IoIosBook } from "react-icons/io";
import { IoMdPhotos } from "react-icons/io";
import { PiVideoFill } from "react-icons/pi";
import { IoMdSettings } from "react-icons/io";
import { IoLogOut } from "react-icons/io5";
import { PostList } from '../Store/Posts-List-Store';
import { IoMdAddCircle } from "react-icons/io";

const SideBar = () => {
  const { profileList } = useContext(PostList);
  return (
    <div className="fixed left-0 top-0 h-full overflow-y-auto bg-slate-50 w-1/4">
      <ul className="p-10 pt-20">
        {profileList.map((profile, index) => (
          <li key={index} className="flex items-center my-4 mt-10">
            <div>
              <img className=' rounded-full w-12 h-12' src={profile.url} alt="profile photo" />
            </div>
            <div className="ml-4">
              <h1 className="text-xl ">{profile.Name}</h1>
            </div>
          </li>
        ))}
        <li className="flex items-center my-4">
          <div className="bg-slate-200 h-12 w-12 flex justify-center items-center rounded-full">
            <FaHome />
          </div>
          <Link to="/" className="ml-4 hover:bg-slate-200 rounded px-4 py-2">
            Home
          </Link>
        </li>
        <li className="flex items-center my-4">
          <div className="bg-slate-200 h-12 w-12 flex justify-center items-center rounded-full font-bold">
            <MdManageAccounts />
          </div>
          <Link to="/sinup" className="ml-4 hover:bg-slate-200 rounded px-4 py-2">
            Creating an account
          </Link>
        </li>
        <li className="flex items-center my-4">
          <div className="bg-slate-200 h-12 w-12 flex justify-center items-center rounded-full">
            <RiAccountCircleFill />
          </div>
          <Link to="/profile" className="ml-4 hover:bg-slate-200 rounded px-4 py-2">
            Your profile
          </Link>
        </li>
        <li className="flex items-center my-4">
          <div className="bg-slate-200 h-12 w-12 flex justify-center items-center rounded-full">
            <MdOutlineCompost />
          </div>
          <Link to="" className="ml-4 hover:bg-slate-200 rounded px-4 py-2">
            Your posts
          </Link>
        </li>
        <li className="flex items-center my-4">
          <div className="bg-slate-200 h-12 w-12 flex justify-center items-center rounded-full">
          <IoMdAddCircle />
          </div>
          <Link to="/createPost" className="ml-4 hover:bg-slate-200 rounded px-4 py-2">
            Create your post
          </Link>
        </li>

        <li className="flex items-center my-4">
          <div className="bg-slate-200 h-12 w-12 flex justify-center items-center rounded-full">
            <TbMessageCircle2Filled />
          </div>
          <Link to="" className="ml-4 hover:bg-slate-200 rounded px-4 py-2">
            Message
          </Link>
        </li>
        <li className="flex items-center my-4">
          <div className="bg-slate-200 h-12 w-12 flex justify-center items-center rounded-full">
            <BsCameraReelsFill />
          </div>
          <Link to="" className="ml-4 hover:bg-slate-200 rounded px-4 py-2">
            Reels
          </Link>
        </li>
        <li className="flex items-center my-4">
          <div className="bg-slate-200 h-12 w-12 flex justify-center items-center rounded-full">
            <IoIosBook />
          </div>
          <Link to="" className="ml-4 hover:bg-slate-200 rounded px-4 py-2">
            Stories
          </Link>
        </li>
        <li className="flex items-center my-4">
          <div className="bg-slate-200 h-12 w-12 flex justify-center items-center rounded-full">
            <IoMdPhotos />
          </div>
          <Link to="" className="ml-4 hover:bg-slate-200 rounded px-4 py-2">
            Photos
          </Link>
        </li>
        <li className="flex items-center my-4">
          <div className="bg-slate-200 h-12 w-12 flex justify-center items-center rounded-full">
            <PiVideoFill />
          </div>
          <Link to="" className="ml-4 hover:bg-slate-200 rounded px-4 py-2">
            Videos
          </Link>
        </li>
        <li className="flex items-center my-4">
          <div className="bg-slate-200 h-12 w-12 flex justify-center items-center rounded-full">
            <IoMdSettings />
          </div>
          <Link to="" className="ml-4 hover:bg-slate-200 rounded px-4 py-2">
            Settings
          </Link>
        </li>
        <li className="flex items-center my-4">
          <div className="bg-slate-200 h-12 w-12 flex justify-center items-center rounded-full">
            <IoLogOut />
          </div>
          <Link to="/" className="ml-4 hover:bg-slate-200 rounded px-4 py-2">
            Logout
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
