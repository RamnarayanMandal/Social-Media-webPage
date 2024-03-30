import React, { createContext, useCallback, useEffect, useReducer, useState } from "react";

// Create context for post and profile lists
export const PostList = createContext({
  postList: [],
  profileList: [],
  signUpData: [],
  isLoggedIn: [],
  fetching: false,
  addPost: () => { },
  addProfile: () => { },
  addIntialPosts: () => { },
  deletePost: () => { },
  deleteProfile: () => { },
  signUp: () => { },
  login: () => { },
});

// Reducer for managing post list
const postListReducer = (currentPostList, action) => {
  switch (action.type) {
    case "ADD_POST":
      return [action.payload, ...currentPostList];
    case "DELETE_POST":
      return currentPostList.filter((post) => post.id !== action.payload);
    case "ADD_INTIAL_POSTS":
      return (currentPostList = action.payload.posts);
    default:
      return currentPostList;
  }
};

// Reducer for managing profile list
const profileListReducer = (currentProfileList, action) => {
  switch (action.type) {
    case "ADD_PROFILE":
      return [action.payload, ...currentProfileList];
    case "DELETE_PROFILE":
      return currentProfileList.filter(
        (profile) => profile.id !== action.payload
      );
    default:
      return currentProfileList;
  }
};


const singUpReducer = (currentSingupData, action) => {
  switch (action.type) {
    case "SINGUP":
      return [action.payload, ...currentSingupData];

    default:
      return currentSingupData;
  }
}


const loginReducer = (currentLoginData, action) => {
  switch (action.type) {
    case "LOGIN":
      return [action.payload, ...currentLoginData];

      default: return currentLoginData;
  }
}

// Component to provide context for post and profile lists
const PostListProvider = ({ children }) => {
  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    setFetching(true);
    fetch("https://dummyjson.com/posts", { signal })
      .then((res) => res.json())
      .then((data) => {
        addIntialPosts(data.posts);
        setFetching(false);
      });

    return () => {
      controller.abort();
    };
  }, []);

  // Default values for post and profile lists

  const DEFAULT_PROFILE_LIST = [
    {
      id: "01",
      url: "https://cdn.pixabay.com/photo/2015/01/06/16/14/woman-590490_1280.jpg",
      Name: "Rajshree Raj",
      Username: "rajshree@123",
      Gender: "Female",
      Bio: "Hi there! I'm RajShree, software developer.Passionate about [Your Interests/Hobbies]. 📚 Constantly learning and growing. 💡 Sharing insights and inspiration. 🌍 Let's connect and make a positive impact together! 🚀 #YourHashtag",
    },
  ];

  // Initialize post list reducer with default value
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    []
  );

  // Initialize profile list reducer with default value
  const [profileList, dispatchProfileList] = useReducer(
    profileListReducer,
    DEFAULT_PROFILE_LIST
  );


  const [signUpData, dispatchsignUpData] = useReducer(
    singUpReducer,
    []
  );
  

  const [isLoggedIn, dispatchisLoggedIn] = useReducer(
    loginReducer,
    []
  );
  // Function to add a new post
  const addPost = useCallback((post) => {

    dispatchPostList({
      type: "ADD_POST",
      payload: post,
    });
  }, []);

  const addIntialPosts = useCallback(
    (posts) => {
      dispatchPostList({
        type: "ADD_INTIAL_POSTS",
        payload: {
          posts,
        },
      });
    },
    [dispatchPostList]
  );

  // Function to add a new profile
  const addProfile = useCallback(
    (url, Name, Gender, Username, Bio) => {
      dispatchProfileList({
        type: "ADD_PROFILE",
        payload: {
          id: Date.now(),
          url: url,
          Name: Name,
          Bio: Bio,
          Gender: Gender,
          Username: Username,
          Password: "Ram@1234",
        },
      });
    },
    [dispatchProfileList]
  );

  // Function to delete a profile
  const deleteProfile = useCallback(
    (profileId, Password) => {
      let PasswordConformation = window.prompt(
        "Enter your password to confirm deletion:"
      );
      if (PasswordConformation === Password) {
        dispatchProfileList({ type: "DELETE_PROFILE", payload: profileId });
      } else {
        alert("Wrong password.");
      }
    },
    [dispatchProfileList]
  );

  // Function to delete a post
  const deletePost = useCallback(
    (postId) => {
      if (window.confirm("Are you sure you want to delete?")) {
        dispatchPostList({ type: "DELETE_POST", payload: postId });
      }
    },
    [dispatchPostList]
  );

  const signUp = (data) => {
    dispatchsignUpData({
      type: "SINGUP",
      payload: data,
    });
  };



const login = (emailAddress, password) => {
  dispatchisLoggedIn({
    type: "LOGIN",
    payload: {
      emailAddress,
      password,
    }

  })
  
}
// Provide post list, profile list, and relevant functions to children components
return (
  <PostList.Provider
    value={{
      postList,
      profileList,
      fetching,
      signUpData,
      isLoggedIn,
      addPost,
      addProfile,
      addIntialPosts,
      deletePost,
      deleteProfile,
      signUp,
      login,
    }}
  >
    {children}
  </PostList.Provider>
);
};

export default PostListProvider;
