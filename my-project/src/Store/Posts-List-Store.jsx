import React, { createContext, useReducer } from "react";

// Create context for post and profile lists
export const PostList = createContext({
  postList: [],
  profileList: [],
  addPost: () => {},
  addProfile: () => {},
  addIntialPosts: () => {},
  deletePost: () => {},
  deleteProfile: () => {},
});

// Reducer for managing post list
const postListReducer = (currentPostList, action) => {
  switch (action.type) {
    case "ADD_POST":
      return [action.payload, ...currentPostList ];
    case "DELETE_POST":
      return currentPostList.filter((post) => post.id !== action.payload);
    case "ADD_INTIAL_POSTS":
      return currentPostList=action.payload.posts;
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

// Component to provide context for post and profile lists
const PostListProvider = ({ children }) => {
  // Default values for post and profile lists
  const DEFAULT_POST_LIST = [
    {
      id: "0.231@!@#7555",
      photoURL: "https://cdn.pixabay.com/photo/2016/10/10/14/44/train-1728537_1280.jpg",
      title: "Going to Mumbai",
      caption:
        "Hi friends, I'm going to go to Mumbai for my vacation. Hope to enjoy a lot. Peace out.",
      reactions: 2,
      userId: "ramnarayan847231@gmail.com",
      tags: ["vacation", "Mumbai", "Enjoying"],
    },
    {
      id: "0.212@3344&*^%@2",
      photoURL: "https://cdn.pixabay.com/photo/2021/08/04/13/06/software-developer-6521720_1280.jpg",
      title: "Pass hogaye bhai",
      caption: "4 saal ke masti ke baad ho gaye hai pass. Hard to believe.",
      reactions: 15,
      userId: "ramnarayan847230@gmail.com",
      tags: ["Graduating", "Unbelievable"],
    },
  ];

  const DEFAULT_PROFILE_LIST = [
    {
      id: "01",
      url: "https://cdn.pixabay.com/photo/2015/01/06/16/14/woman-590490_1280.jpg",
      Name: "rajshree",
      Username: "rajshree@123",
      Gender: "Female",
      Bio: "Dancer Tea lover",
    },
  ];

  // Initialize post list reducer with default value
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST
  );

  // Initialize profile list reducer with default value
  const [profileList, dispatchProfileList] = useReducer(
    profileListReducer,
    DEFAULT_PROFILE_LIST
  );

  // Function to add a new post
  const addPost = (title, tags, caption, photoURL) => {
         dispatchPostList({
           type: "ADD_POST",
           payload: {
             id: Date.now(),
             title,
             tags,
             caption,
             photoURL,
             reactions: 0,
           },
         })
    
  };

  const addIntialPosts = (posts) => {
    dispatchPostList({
      type: "ADD_INTIAL_POSTS",
      payload: {
        posts
       

      },
    })

};

  // Function to add a new profile
  const addProfile = (url, Name, Gender, Username, Bio) => {
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
  };

  // Function to delete a profile
  const deleteProfile = (profileId, Password) => {
    let PasswordConformation = window.prompt(
      "Enter your password to confirm deletion:"
    );
    if (PasswordConformation === Password) {
      dispatchProfileList({ type: "DELETE_PROFILE", payload: profileId });
    } else {
      alert("Wrong password.");
    }
  };

  // Function to delete a post
  const deletePost = (postId) => {
    if (window.confirm("Are you sure you want to delete?")) {
      dispatchPostList({ type: "DELETE_POST", payload: postId });
    }
  };

  // Provide post list, profile list, and relevant functions to children components
  return (
    <PostList.Provider
      value={{
        postList,
        profileList,
        addPost,
        addProfile,
        addIntialPosts,
        deletePost,
        deleteProfile,
      }}
    >
      {children}
    </PostList.Provider>
  );
};

export default PostListProvider;
