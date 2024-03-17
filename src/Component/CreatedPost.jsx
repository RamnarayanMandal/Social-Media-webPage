import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function CreatedPost(props) {

  // Function to handle form submission
  

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 ">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Created post
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={props.handleCreatedPost}>
            <div>
              <label htmlFor="Name" className="block text-sm font-medium leading-6 text-gray-900">
                Name
              </label>
              <div className="mt-2">
                <input
                  id="Name"
                  name="Name"
                  type="text"
                  autoComplete="Name"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-4"
                  ref={props.newPostName}
                />
              </div>
            </div>

            <div>
              <label htmlFor="url" className="block text-sm font-medium leading-6 text-gray-900">
                Profile pic Address
              </label>
              <div className="mt-2">
                <input
                  id="url"
                  name="url"
                  type="url"
                  autoComplete="url"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-4"
                  ref={props.newPosturl}
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="aboutPost" className="block text-sm font-medium leading-6 text-gray-900">
                  About post
                </label>
              </div>
              <div className="mt-2">
                <textarea
                  id="aboutPost"
                  name="aboutPost"
                  autoComplete="aboutPost"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-4"
                  ref={props.newPostaboutPost} />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 "
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
      </div>
    </>
  );
}
