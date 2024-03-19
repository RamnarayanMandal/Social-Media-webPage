import React, { createContext, useReducer } from "react";

// Create context for post and profile lists
export const PostList = createContext({
  postList: [],
  profileList: [],
  addPost: () => {},
  addProfile: () => {},
  deletePost: () => {},
});

// Reducer for managing post list
const postListReducer = (currentPostList, action) => {
  switch (action.type) {
    case "ADD_POST":
      return [...currentPostList, action.payload];
    case "DELETE_POST":
      return currentPostList.filter((post) => post.id !== action.payload);
    default:
      return currentPostList;
  }
};

// Reducer for managing profile list
const profileListReducer = (currentProfileList, action) => {
  switch (action.type) {
    case "ADD_PROFILE":
      return [action.payload, ...currentProfileList];
    default:
      return currentProfileList;
  }
};

// Component to provide context for post and profile lists
const PostListProvider = ({ children }) => {
  // Default values for post and profile lists
  const DEFAULT_POST_LIST = [
    {
      id: "01",
      url: "https://cdn.pixabay.com/photo/2016/10/10/14/44/train-1728537_1280.jpg",
      title: "Going to Mumbai",
      body: "Hi friends, I'm going to go to Mumbai for my vacation. Hope to enjoy a lot. Peace out.",
      reactions: 2,
      userId: "ramnarayan847231@gmail.com",
      tags: ["vacation", "Mumbai", "Enjoying"],
    },
    {
      id: "02",
      url: "https://cdn.pixabay.com/photo/2021/08/04/13/06/software-developer-6521720_1280.jpg",
      title: "Pass ho bhai",
      body: "4 saal ke masti ke baad ho gaye hai pass. Hard to believe.",
      reactions: 15,
      userId: "ramnarayan847230@gmail.com",
      tags: ["Graduating", "Unbelievable"],
    },
  ];

  const DEFAULT_PROFILE_LIST = [
    { id: '01',
      url: 'https://cdn.pixabay.com/photo/2015/01/06/16/14/woman-590490_1280.jpg',
      Name: 'rajshree',
      Username: 'rajshree@123',
      Gender: 'Female',
      Bio: 'Dancer Tea lover'
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

  console.log(profileList);

  // Function to add a new post
  const addPost = () => {
    // Logic for adding posts
  };

  // Function to add a new profile
  const addProfile = (url, Name, Gender, Username, Bio) => {
    console.log(url, Name, Gender, Username, Bio);
    dispatchProfileList({
      type: "ADD_PROFILE",
      payload: {
        id: Date.now(),
        url: url,
        Name: Name,
        Bio: Bio,
        Gender: Gender,
        Username: Username,
      }
    });
  };

  // Function to delete a post
  const deletePost = (postId) => {
    if (window.confirm("Are you sure you want to delete")) {
      dispatchPostList({ type: "DELETE_POST", payload: postId });
    }
  };

  // Provide post list, profile list, and relevant functions to children components
  return (
    <PostList.Provider value={{ postList, profileList, addPost, addProfile, deletePost }}>
      {children}
    </PostList.Provider>
  );
};

export default PostListProvider;
