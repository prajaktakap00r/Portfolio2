import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SkillBar from "./SkillBar";
import profileImage from "../assets/profile2.svg";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Home = () => {
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
              <Link
                to="https://drive.google.com/file/d/11aIPOaH5wYOGUc58ZABeVSxrjITtYz-G/view?usp=sharing"
                className="bg-rose-400 text-white rounded-md px-6 py-2 hover:bg-rose-500 transition duration-300 shadow-md border-b-2 border-rose-200 hover:shadow-rose-200"
              >
                Resume
              </Link>
              <Link
                to="https://www.youtube.com/@3rd_tier-coder"
                className="bg-rose-400 text-white rounded-md px-6 py-2 hover:bg-rose-500 transition duration-300 shadow-md border-b-2 border-rose-200 hover:shadow-rose-200"
              >
                YouTube
              </Link>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className=" p-6 ">
          <h2 className="text-4xl font-bold text-center mb-4 text-purple-300">
            Skills
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
          <h2 className="text-4xl font-bold text-center mb-4">Projects</h2>
          <p className="text-md leading-relaxed">
            Over the years, I have worked on numerous projects that showcase my
            versatility and creativity. Here are some highlights:
          </p>
          <ul className="list-disc list-inside space-y-2 mt-4">
            <li>Project A: Description of project A.</li>
            <li>Project B: Description of project B.</li>
            <li>Project C: Description of project C.</li>
          </ul>
        </section>

        {/* Connect Section */}
        <section id="connect" className=" p-6 rounded-lg shadow-lg">
          <h2 className="text-4xl font-bold text-center mb-4">Let's Connect</h2>
          <div className="flex justify-center space-x-8">
            <Link
              to="https://github.com/prajaktakap00r"
              className="text-white rounded-full p-3 border-2 border-pink-400 shadow-lg hover:shadow-pink-200 transition duration-300"
            >
              <GitHubIcon />
            </Link>
            <Link
              to="https://www.linkedin.com/in/prajaktakapoor/"
              className="text-white rounded-full p-3 border-2 border-pink-400 shadow-lg hover:shadow-pink-200 transition duration-300"
            >
              <LinkedInIcon />
            </Link>
            <Link
              to="https://twitter.com/kapoor_prajakta"
              className="text-white rounded-full p-3 border-2 border-pink-400 shadow-lg hover:shadow-pink-200 transition duration-300"
            >
              <TwitterIcon />
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
const skills = [
  { skill: "JavaScript", level: 80 },
  { skill: "React", level: 75 },
  { skill: "Tailwind CSS", level: 70 },
  { skill: "Node.js", level: 65 },
  { skill: "Express.js", level: 60 },
];
