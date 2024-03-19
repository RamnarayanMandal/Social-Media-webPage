// import React, { useState } from 'react';
// import { FcLike } from "react-icons/fc";
// import { IoIosHeartDislike } from "react-icons/io";
// import { MdDelete } from "react-icons/md";
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const YourProfile = ({ createProfile, deleteProfile }) => {
//     const [likes, setLikes] = useState(Array(createProfile.length).fill(0));

//     const handleLike = (index) => {
//         const updatedLikes = [...likes];
//         updatedLikes[index]++;
//         setLikes(updatedLikes);
//     };

//     const handleDislike = (index) => {
//         const updatedLikes = [...likes];
//         updatedLikes[index]--;
//         setLikes(updatedLikes);
//     };

//     const handleDelete = (name) => {
//         deleteProfile(name);
//     };

//     return (
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//             {createProfile.map((Profile, index) => (
//                 <div key={index} className='border-solid border-slate-900 border-2 rounded p-5'>
//                     <div className='flex justify-center'>
//                         <img className='rounded-full w-48 h-48' src={Profile.url} alt="Profile Pic" />
//                     </div>

//                     <div>
//                         <h2 className='text-center my-5 font-mono font-medium'>Profile</h2>
//                         <h1 className='my-2 font-mono font-medium '>Name: {Profile.Name}</h1>
//                         <p className='my-4'>{Profile.Bio}</p>
//                         <hr />
//                         <div className='flex justify-evenly items-center'>
//                             <div className='flex flex-col my-2'>
//                                 <button className='text-2xl flex' onClick={() => handleLike(index)}>
//                                     <FcLike />
//                                 </button>
//                             </div>
//                             <div className='flex flex-col'>
//                                 <button className='text-2xl p-2' onClick={() => handleDislike(index)}>
//                                     <IoIosHeartDislike />
//                                 </button>
//                             </div>
//                             <div className='flex flex-col text-blue-500'>
//                                 <button className='text-2xl p-2' onClick={() => handleDelete(Profile.Name)}>
//                                     <MdDelete />
//                                 </button>
//                             </div>
//                         </div>
//                         <hr />
//                         <p className='text-xs border-2 text-center rounded-full'>{likes[index]}</p>
//                     </div>
//                 </div>
//             ))}
//             <ToastContainer position="top-center" pauseOnHover theme="colored" />
//         </div>
//     );
// }

// export default YourProfile;
