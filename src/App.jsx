import React, { useRef, useState } from 'react';
import NavBar from './Component/NavBar';

import { toast } from 'react-toastify'; // Import toast function if you're using it
import Home from './Component/Home';
import SignUp from './Component/SingUp';
import LoginPage from './Component/LoginPage';
import CreatedProfile from './Component/CreatedProfile';
import Footer from './Component/Footer';
import ShowProfile from './Component/ShowProfile';
import Post from './Component/Post';
import PostList from './Component/PostList';
import PostContainer from './Component/PostContainer';
import PostListProvider from './Store/Posts-List-Store';
import CreatedPost from './Component/CreatedPost';




function App() {
  
  const [displayedProfile, setDisplayedProfile] = useState(null);
  const [isFooterVisible, setIsFooterVisible] = useState(true); // State to manage footer visibility

  const handleOnClick = (name) => {
    console.log(name);
    setDisplayedProfile(name);

    if (name === 'ShowProfile') {
      setIsFooterVisible(false); // Hide footer when ShowProfile is clicked
    } else {
      setIsFooterVisible(true); // Show footer for other components
    }
  };


  const deleteProfile = (Name) => {
    if (window.confirm('Are you sure you want to delete this Profile?')) {
      const newProfile = createProfile.filter((Profile) => Profile.Name !== Name);
      setcreateProfile(newProfile);
      toast.success('Profile deleted successfully.');
    }
  };

  const [signUpData, setSignUpData] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const emailAddressRef = useRef(null);
  const passwordRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const firstName = firstNameRef.current.value;
    const lastName = lastNameRef.current.value;
    const emailAddress = emailAddressRef.current.value;
    const password = passwordRef.current.value;
    console.log(firstName, lastName, emailAddress, password);
    const data = {
      firstName: firstName,
      lastName: lastName,
      emailAddress: emailAddress,
      password: password,
    };

    setSignUpData([...signUpData, data]);
    handleOnClick('Home');

    // Clear input values after submission
    firstNameRef.current.value = "";
    lastNameRef.current.value = "";
    emailAddressRef.current.value = "";
    passwordRef.current.value = "";
  };

  const login = (e) => {
    e.preventDefault();
    const emailAddress = e.target.email.value; // Access email input value
  const password = e.target.password.value; // Access password input value
    console.log(emailAddress, password);
    const user = signUpData.find(user => user.emailAddress === emailAddress && user.password === password);

    if (user) {
      toast.success('Login successfully');
      setIsLoggedIn(true);
      handleOnClick('Home');
      
    } else {
      // Handle invalid login
      console.log("Invalid email or password");
      toast.error('Invalid email or password.');
      
    }
  };
  
  return (
    <>
      <PostListProvider>
      <NavBar handleOnClick={handleOnClick} />
      <PostContainer>
      {displayedProfile === 'Profile' ? (
    
        <ShowProfile/>
        
      ) : displayedProfile === 'Created Profile' ? (
        
          <CreatedProfile/>
          
        
      ) : displayedProfile==='Home'?(
       
          <Home/>
       
      ):displayedProfile==='Login'?(
        
        <LoginPage login={login}/>

      ):displayedProfile==='Post'?(
        <PostList/>

      ):displayedProfile=='Created post'?(
          <CreatedPost/>
      ):
      (
    
        <SignUp handleSubmit={handleSubmit} firstNameRef={firstNameRef} lastNameRef={lastNameRef} 
        emailAddressRef={ emailAddressRef} passwordRef={passwordRef} />
      
      )
      }
      </PostContainer>
      {isFooterVisible && <Footer />} {/* Render footer based on visibility state */}
      </PostListProvider>
     
    </>
  );
}

export default App;
