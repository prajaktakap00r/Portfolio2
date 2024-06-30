import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SkillBar from "./SkillBar";
import profileImage from "../assets/profile2.svg";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Home = () => {
  const skills = [
    { skill: "C++", level: 90 },
    { skill: "JavaScript", level: 80 },
    { skill: "React", level: 75 },
    { skill: "Tailwind CSS", level: 70 },
    { skill: "Node.js", level: 65 },
    { skill: "Express.js", level: 60 },
    { skill: "MongoDB", level: 60 },
  ];

  return (
    <div className="m-2 p-2">
      <div className="text-white p-1 ">
        {/* Hero Section */}
        <section
          id="home"
          className="flex flex-col md:flex-row items-center justify-center h-[35rem]"
        >
          <img
            src={profileImage}
            alt="Profile"
            className="rounded-md p-2 w-62 h-60 mb-4   border-white"
          />
          <div className="flex flex-col items-center md:items-start md:ml-10">
            <h1 className="text-5xl font-bold text-purple-300 text-center md:text-left mb-4">
              Bold Designs For A Bold Future!
            </h1>
            <p className="text-lg text-rose-50 text-center md:text-left mb-8">
              Crafting Digital Experiences With Passion And Precision.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://drive.google.com/file/d/11aIPOaH5wYOGUc58ZABeVSxrjITtYz-G/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-rose-400 text-white rounded-md px-6 py-2 hover:bg-rose-500 transition duration-300 shadow-md border-b-2 border-rose-200 hover:shadow-rose-200"
              >
                Resume
              </a>
              <a
                href="https://www.youtube.com/@3rd_tier-coder"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-rose-400 text-white rounded-md px-6 py-2 hover:bg-rose-500 transition duration-300 shadow-md border-b-2 border-rose-200 hover:shadow-rose-200"
              >
                Youtube
              </a>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className=" p-6 ">
          <h2 className="text-4xl font-bold text-center mb-4 text-purple-300">
            My Tech Stack
          </h2>

          <div className="w-full px-4 mt-10">
            <div className="max-w-4xl mx-auto">
              {skills.map((skill, index) => (
                <SkillBar key={index} skill={skill.skill} level={skill.level} />
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className=" p-6 rounded-lg shadow-lg">
          <h2 className="text-4xl font-bold text-center mb-4 text-purple-300">
            Coding Stats
          </h2>
          <div class="min-h-full max-w-full mx-auto py-6 sm:px-6 lg:px-8">
            Hi
          </div>
        </section>

        {/* Connect Section */}
        <section id="connect" className=" p-6 rounded-lg shadow-lg">
          <h2 className="text-4xl font-bold text-center mb-4 text-purple-300 ">
            Let's Connect
          </h2>
          <div className="flex justify-center space-x-8">
            <a
              href="https://twitter.com/kapoor_prajakta"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white rounded-md p-3 border-r-2 border-l-2 border-rose-400 shadow-lg hover:shadow-pink-200 transition duration-300"
            >
              <GitHubIcon />
            </a>
            <a
              href="https://twitter.com/kapoor_prajakta"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white rounded-md p-3 border-r-2 border-l-2 border-rose-400 shadow-lg hover:shadow-pink-200 transition duration-300"
            >
              <LinkedInIcon />
            </a>
            <a
              href="https://twitter.com/kapoor_prajakta"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white rounded-md p-3 border-r-2 border-l-2 border-rose-400 shadow-lg hover:shadow-pink-200 transition duration-300"
            >
              <TwitterIcon />
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
