import React, { useContext, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { PostList } from "../Store/Posts-List-Store";
import { useNavigate } from "react-router-dom";

export default function CreatedProfile() {
  // Function to handle form submission
   
  const {addProfile} =useContext(PostList);
  const navagite = useNavigate();

  const newProfileurl = useRef(null);
  const newProfileName = useRef(null);
  const newProfileBio = useRef(null);
  const newProfileGender = useRef(null);
  const newProfileUsername = useRef(null);


  const handlecreateProfile = (event) => {
    event.preventDefault();
    console.log(event.target.value);
    const url = newProfileurl.current?.value || '';
    const Bio = newProfileBio.current?.value || '';
    const Name = newProfileName.current?.value || '';
    const Gender = newProfileGender.current?.value || '';
    const Username = newProfileUsername.current?.value || '';
    
    console.log(url, Name, Gender, Username ,Bio);
    if (!url || !Bio || !Name || !Gender ||!Username ) {
      toast.error('Please fill all fields.'); // Notify user about empty fields
      return;
    }
    
     
    addProfile(url, Name, Gender, Username, Bio);
    // Clear input fields
    newProfileurl.current.value = '';
    newProfileBio.current.value = '';
    newProfileName.current.value = '';
    newProfileGender.current.value = '';
    newProfileUsername.current.value = '';
    toast.success('Profile created successfully.');
    navagite("/profile");
  };



  return (
    <> 
       <div className="flex justify-center content-center items-center">
      <div className="flex flex-col sm:flex-row  w-11/12 justify-center content-center sm:justify-between lg:bg-gray-100 p-10 md:p-0 lg:p-0 mt-40 ">
        <div className="w-full sm:w-1/2 lg:w-1/2 xl:w-1/2 m-0">
          <img
            className="h-full w-full object-cover rounded-lg shadow-md"
            src="https://cdn.pixabay.com/photo/2019/08/01/05/59/girl-4376755_1280.jpg"
            alt=""
          />
        </div>
        <div className="w-full sm:w-1/2 lg:w-7/12 xl:w-8/12 flex justify-center mt-10 mb-10">
          <div className="w-full sm:w-10/12 md:w-8/12 lg:w-7/12">
            <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Created Profile
            </h2>

            <form className="mt-6 space-y-6" onSubmit={handlecreateProfile}>
              <div>
                <label
                  htmlFor="Name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Name
                </label>
                <div className="mt-2">
                  <input
                    id="Name"
                    name="Name"
                    type="text"
                    autoComplete="Name"
                    required
                    className="block w-full rounded-md border py-2 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    ref={newProfileName}
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="Gender"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Gender
                </label>
                <div className="mt-2">
                  <input
                    id="Gender"
                    name="Gender"
                    type="text"
                    autoComplete="Gender"
                    required
                    className="block w-full rounded-md border py-2 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    ref={newProfileGender}
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="url"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Profile pic Address
                </label>
                <div className="mt-2">
                  <input
                    id="url"
                    name="url"
                    type="url"
                    autoComplete="url"
                    required
                    className="block w-full rounded-md border py-2 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    ref={newProfileurl}
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="username"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Username
                </label>
                <div className="mt-2">
                  <input
                    id="username"
                    name="username"
                    type="text"
                    autoComplete="username"
                    required
                    className="block w-full rounded-md border py-2 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    ref={newProfileUsername}
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="Bio"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Bio
                  </label>
                </div>
                <div className="mt-2">
                  <textarea
                    id="Bio"
                    name="Bio"
                    autoComplete="Bio"
                    required
                    className="block w-full rounded-md border py-2 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    ref={newProfileBio}
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Profile
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      </div>
      <ToastContainer position="top-center" pauseOnHover theme="colored" />
    </>
  );
}
