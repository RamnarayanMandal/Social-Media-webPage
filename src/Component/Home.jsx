import React from 'react';

const Home = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-evenly mt-10 sm:mt-20'>
      <div className='w-full sm:w-1/2 sm:ms-10 sm:mt-20'>
        <h1 className='text-4xl my-4 text-center sm:text-left'>
          Welcome to Our Social Media Platform!
        </h1>
        <p className='mx-4 sm:mx-0 whitespace-pre-line'>
          Join our vibrant community where connections flourish, creativity blossoms, and conversations thrive. Connect with loved ones, explore diverse content, and express yourself freely. Engage in meaningful discussions, stay informed, and be inspired. Your privacy and security are our top priorities. Join us today and become part of something special!
        </p>
      </div>
      <div className='w-full sm:w-1/2 sm:me-10'>
        <img className='rounded w-full h-auto' src="https://cdn.pixabay.com/photo/2017/07/10/10/02/social-media-2489594_960_720.jpg" alt="" />
      </div>
    </div>
  );
};

export default Home;
