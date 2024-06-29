import React from "react";
import { Link } from "react-router-dom";
import profileImage from "../assets/profile.svg";
import XIcon from "@mui/icons-material/Twitter"; // Adjusted to reflect Twitter's icon
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center  text-white">
      <div className="max-w-md p-8 rounded-lg  bg-black/90 border-2 border-purple-600 shadow-lg shadow-purple-600 transform hover:scale-105 transition-transform duration-500 ease-in-out">
        <img
          src={profileImage}
          alt="Profile"
          className="rounded-md w-32 h-32 mx-auto mb-4 object-cover"
        />
        <h1 className="text-3xl font-bold text-pink-600 text-center mb-4">
          Hey there,
        </h1>
        <p className="text-lg text-center mb-6">
          Welcome to my portfolio! I'm here to build amazing things with code.
        </p>
        <div className="flex justify-center mb-8">
          <Link
            to="https://drive.google.com/file/d/11aIPOaH5wYOGUc58ZABeVSxrjITtYz-G/view?usp=sharing"
            className="bg-purple-600 text-white rounded-md px-4 py-2 mr-4 hover:bg-purple-300 transition duration-300 ease-in-out"
          >
            Resume
          </Link>
          <Link
            to="https://www.youtube.com/@3rd_tier-coder"
            className="bg-purple-600 text-white rounded-md px-4 py-2 hover:bg-purple-300 transition duration-300 ease-in-out"
          >
            YouTube
          </Link>
        </div>
        <div className="text-center">
          <h2 className="text-4xl font-bold mt-8 mb-4">Let's Connect</h2>
          <div className="flex justify-center space-x-8">
            <Link
              to="https://github.com/prajaktakap00r"
              className="text-white rounded-md p-3 border-2 border-pink-400 shadow-lg shadow-pink-600 hover:shadow-pink-200"
            >
              <GitHubIcon />
            </Link>
            <Link
              to="https://www.linkedin.com/in/prajaktakapoor/"
              className="text-white rounded-md p-3 border-2 border-pink-400 shadow-lg shadow-pink-600 hover:shadow-pink-200"
            >
              <LinkedInIcon />
            </Link>
            <Link
              to="https://twitter.com/kapoor_prajakta"
              className="text-white rounded-md p-3 border-2 border-pink-400 shadow-lg shadow-pink-600 hover:shadow-pink-200"
            >
              <XIcon />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
