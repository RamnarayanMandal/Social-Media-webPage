import React, { useContext, useRef } from "react";
import { PostList } from "../Store/Posts-List-Store"; // Assuming this is the correct path to your context
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MdOutlineCancel } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";

export default function CreatedPost() {
  const { addPost } = useContext(PostList);
  const navigate = useNavigate();

  const newTitle = useRef(null);
  const newTags = useRef(null);
  const newbody = useRef(null);

  const handlesOnSubmit = (event) => {
    event.preventDefault();
    const title = newTitle.current?.value || "";
    const tags = newTags.current?.value.split(" ") || "";
    const body = newbody.current?.value || "";

    if (!title || !tags || !body) {
      toast.error("Please fill all fields."); // Notify user about empty fields
      return;
    }



    // send to server request
try{
  fetch('https://dummyjson.com/posts/add', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      title: title,
      tags: tags,
      body: body,
      reactions: 0,
      userId:'5'
      
    })
  })
  .then(res => res.json())
  .then((post)=>{
    
    addPost(post);
  });
       
      toast.success("Add Post successfully");
      navigate("/post");
    }
    catch{
      toast.error("Something went wrong. Please try again.");
    }
  }


  return (
    <div className="flex justify-center items-center content-center">
    <div className="isolate bg-white px-6 w-9/12  flex flex-wrap  mt-32  ">
      <div className="w-1/2">
        <img
          src="https://images.unsplash.com/photo-1498758536662-35b82cd15e29?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2102&q=80"
          alt=""
          className="object-cover h-full w-full rounded-s"
        />
      </div>
      <div className="w-1/2 pt-64 border rounded-r overflow-hidden p-10">
        <Link to="/profile" className="absolute top-36 right-56 rounded-md text-gray-300 hover:text-white hover:bg-slate-200 focus:outline-none focus:ring-2 focus:ring-white text-4xl border rounded-r overflow-hidden">
          <MdOutlineCancel />
        </Link>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl ">
            Create Post
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Aute magna irure deserunt veniam aliqua magna enim voluptate.
          </p>
        </div>
        <form
          onSubmit={handlesOnSubmit}
          className="mx-auto mt-8 max-w-xl sm:mt-20"
        >
          <div className="sm:col-span-2">
            <div>
              <label
                htmlFor="title"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Title
              </label>
              <div className="mt-2.5">
                <input
                  ref={newTitle}
                  type="text"
                  name="title"
                  id="title"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="tags"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Tags
              </label>
              <div className="mt-2.5">
                <input
                  ref={newTags}
                  type="text"
                  name="tags"
                  id="tags"
                  autoComplete="organization"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="body"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                body
              </label>
              <div className="mt-2.5">
                <textarea
                  ref={newbody}
                  name="body"
                  id="body"
                  rows={4}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  defaultValue={""}
                />
              </div>
            </div>
          </div>
          <div className="mt-10">
            <button
              type="submit"
              className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Post
            </button>
          </div>
          <ToastContainer position="top-center" pauseOnHover theme="colored" />
        </form>
      </div>
    </div>
    </div>
  );
}
