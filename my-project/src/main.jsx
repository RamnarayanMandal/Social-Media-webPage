import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Component/Home.jsx";
import ShowProfile from "./Component/ShowProfile.jsx";
import CreatedProfile from "./Component/CreatedProfile.jsx";
import LoginPage from "./Component/LoginPage.jsx";
import Post from "./Component/Post.jsx";
import PostList from "./Component/PostList.jsx";
import SignUp from "./Component/SingUp.jsx";
import CreatedPost from "./Component/CreatedPost.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/profile", element: <ShowProfile /> },
      { path: "/createProfile", element: <CreatedProfile /> },
      { path: "/login", element: <LoginPage /> },
      { path: "/sinup", element:  <SignUp /> },
      { path: "/post", element: <PostList /> },
      { path: "/post/:id", element: <Post /> },
      { path: "/createPost", element:<CreatedPost/>  },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
