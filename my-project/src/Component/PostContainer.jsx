import React from 'react';

const PostContainer = (props) => {
  return (
    <div className='flex justify-center content-center my-40 mx-20'>
      {props.children}
    </div>
  );
};

export default PostContainer;
