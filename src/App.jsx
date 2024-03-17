import React, { useRef, useState } from 'react';
import NavBar from './Component/NavBar';
import CreatedPost from './Component/CreatedPost';
import Post from './Component/Post';
import PostContainer from './Component/PostContainer';
import { toast } from 'react-toastify'; // Import toast function if you're using it
import Home from './Component/Home';
import SignUp from './Component/SingUp';
import LoginPage from './Component/LoginPage';

function App() {
  const initialPost = {
    url: 'https://cdn.pixabay.com/photo/2015/01/06/16/14/woman-590490_1280.jpg',
    Name: 'rajshree',
    aboutPost: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id arcu ut elit fermentum congue at ac libero.'
  };

  const [createdPost, setCreatedPost] = useState([initialPost]);
  const [displayedPost, setDisplayedPost] = useState(null);

  const newPosturl = useRef(null);
  const newPostName = useRef(null);
  const newPostaboutPost = useRef(null);

  const handleOnClick = (name) => {
    console.log(name);
    setDisplayedPost(name);
  };

  const handleCreatedPost = (event) => {
    event.preventDefault();
    const url = newPosturl.current?.value || '';
    const aboutPost = newPostaboutPost.current?.value || '';
    const Name = newPostName.current?.value || '';
    if (!url || !aboutPost || !Name) {
      toast.error('Please fill all fields.'); // Notify user about empty fields
      return;
    }
    const newPost = {
      url: url,
      Name: Name,
      aboutPost: aboutPost,
    };
    setCreatedPost(prevPosts => [...prevPosts, newPost]);

    // Clear input fields
    newPosturl.current.value = '';
    newPostaboutPost.current.value = '';
    newPostName.current.value = '';
    toast.success('Post created successfully.');
  };

  const deletePost = (Name) => {
    if (window.confirm('Are you sure you want to delete this post?')) {
      console.log(`Delete ${Name}`);
      const newPost = createdPost.filter((post) => post.Name !== Name);
      setCreatedPost(newPost);
      toast.success('Post deleted successfully.');
    }
  };

  return (
    <>
      <NavBar handleOnClick={handleOnClick} />
      <PostContainer>
      {displayedPost === 'Post' ? (
    
         <Post createdPost={createdPost} deletePost={deletePost} />
         
        
      ) : displayedPost === 'Created post' ? (
        
          <CreatedPost
            handleCreatedPost={handleCreatedPost}
            newPosturl={newPosturl}
            newPostName={newPostName}
            newPostaboutPost={newPostaboutPost}
            deletePost={deletePost}
          />
        
      ) : displayedPost==='Home'?(
       
          <Home/>
       
      ):displayedPost==='Login'?(
       
        <LoginPage/>
      ):
      (
      
        <SignUp/>
      
      )}
      </PostContainer>
    </>
  );
}

export default App;
