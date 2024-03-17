import React from 'react';

const PostContainer = (props) => {
  return (
    <div className='flex flex-wrap gap-4 sm:gap-10 justify-center mt-10 sm:mt-20 lg:my-36'>
      {props.children}
    </div>
  );
};

export default PostContainer;
