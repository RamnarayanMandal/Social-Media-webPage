import React from "react";
import img from "../img/myai-asset.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-blue-500 flex justify-center content-center items-center mt-20 min-h-screen">
      <div className="flex flex-col sm:flex-row justify-evenly py-10 sm:mt-20 w-full sm:w-9/12">
        <div className="w-full sm:w-1/2 sm:ms-10 sm:mt-0 text-white">
          <h1 className="text-4xl sm:text-6xl my-4 text-center sm:text-left font-semibold text-yellow-50 ">
            Welcome to Our Social Media Platform!
          </h1>
          <p className="mx-4 sm:mx-0 whitespace-pre-line text-lg sm:text-3xl ps-8">
            Chat, Snap, and video call your friends from wherever you are.
          </p>
          <p className="m-4 sm:mx-0 whitespace-pre-line text-lg sm:text-3xl ps-8">
            Message My AI, your personal chatbot sidekick!
          </p>

          <div className="flex justify-center sm:justify-start">
            <Link to="/sinup" className="bg-black text-white py-2 px-4 rounded inline-block m-2 hover:bg-yellow-400 hover:text-black font-semibold">
              Signup
            </Link>
            <Link to="/login" className="bg-black text-white py-2 px-4 rounded inline-block m-2  hover:bg-yellow-400  hover:text-black font-semibold">
              Login
            </Link>
          </div>
        </div>
        <div className="w-full sm:w-1/2 sm:me-10 animate-pulse">
          <img className="rounded w-full h-auto hover:w-" src={img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
