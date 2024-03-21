import React, { useContext, useRef } from "react";
import { PostList } from "../Store/Posts-List-Store"; // Assuming this is the correct path to your context
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function CreatedPost() {
  const { addPost } = useContext(PostList);
  const newTitle = useRef(null);
  const newTags = useRef(null);
  const newCaptions = useRef(null);
  const Newphoto = useRef(null);

  const handlesOnSubmit = (event) => {
    event.preventDefault();
    const title = newTitle.current?.value || '';
    const tags = newTags.current?.value.split(' ') || '';
    const captions = newCaptions.current?.value || '';
    const photo = Newphoto.current?.files[0]; // Get the file object from the input element
  
    if (!title || !tags || !captions || !photo) {
      toast.error('Please fill all fields.'); // Notify user about empty fields
      return;
    }
  
    const reader = new FileReader();
  
    reader.onload = function(event) {
      const photoURL = event.target.result; // Get the base64 encoded URL of the file
      // Assuming addPost takes an object as an argument
      addPost(
        title,
        tags,
        captions,
        photoURL
      );
  
      toast.success("Add Post successfully");
    };
  
    reader.onerror = function(event) {
      console.error("File could not be read! Code " + event.target.error.code);
    };
  
    reader.readAsDataURL(photo); // Read the file as a data URL
    newTitle.current.value='';
    newTags.current.value='';
    newCaptions.current.value='';
    Newphoto.current.value='';
  }
  

  return (
    <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Create Post
        </h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">
          Aute magna irure deserunt veniam aliqua magna enim voluptate.
        </p>
      </div>
      <form onSubmit={handlesOnSubmit} className="mx-auto mt-16 max-w-xl sm:mt-20">
        <div className="sm:col-span-2">
          <div>
            <label htmlFor="title" className="block text-sm font-semibold leading-6 text-gray-900">
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
            <label htmlFor="tags" className="block text-sm font-semibold leading-6 text-gray-900">
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
            <label htmlFor="caption" className="block text-sm font-semibold leading-6 text-gray-900">
              Caption
            </label>
            <div className="mt-2.5">
              <textarea
                ref={newCaptions}
                name="caption"
                id="caption"
                rows={4}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                defaultValue={""}
              />
            </div>
          </div>

          <div className="sm:col-span-2 mt-2">
            <label htmlFor="Photo" className="block text-sm font-semibold leading-6 text-gray-900">
              Photo
            </label>
            <div className="mt-2.5">
              <input
                ref={Newphoto}
                type="file"
                accept="image/png,image/jpeg,image/gif img/jpg"
                name="Photo"
                id="Photo"
                autoComplete="Photo"  
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                multiple
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
        <ToastContainer
          position="top-center"
          pauseOnHover
          theme="colored"
        />
      </form>
    </div>
  );
}
