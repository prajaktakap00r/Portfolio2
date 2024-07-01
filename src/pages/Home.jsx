import React, { useEffect, useState } from "react";
import emailjs from "emailjs-com";
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
  const [formData, setFormData] = useState({
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_l83upe4",
        "template_km81sbl",
        formData,
        "CyO8vrIghhChWll48"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send the message, please try again.");
        }
      );

    setFormData({ email: "", message: "" });
  };

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
                className="bg-rose-500 text-white rounded-md px-6 py-2 hover:bg-purple-300 transition duration-300 shadow-md border-b-2 border-rose-200 hover:shadow-rose-200"
              >
                Resume
              </a>
              <a
                href="https://www.youtube.com/@3rd_tier-coder"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-rose-500 text-white rounded-md px-6 py-2 hover:bg-purple-300 transition duration-300 shadow-md border-b-2 border-rose-200 hover:shadow-rose-200"
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

        {/* Contact Section */}
        <section id="projects" className=" p-6 rounded-lg shadow-lg">
          <div className="container mx-auto py-12 px-4">
            <h2 className="text-4xl font-bold text-center mb-8 text-purple-300">
              Contact Me
            </h2>
            <form
              className="bg-black/80 p-8 rounded-lg shadow-lg mx-auto max-w-lg border-r-2 border-l-2 border-purple-500"
              onSubmit={handleSubmit}
            >
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block text-white text-sm font-bold mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-3 py-2 rounded-md text-black"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-white text-sm font-bold mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full px-3 py-2 rounded-md text-black"
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-rose-400 text-white px-6 py-2 rounded-md hover:bg-rose-500 transition duration-300"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </section>

        {/* Connect Section */}
        <section id="connect" className=" p-6 rounded-lg shadow-lg">
          <h2 className="text-4xl font-bold text-center mb-4 text-purple-300 "></h2>
          <div className="flex justify-center space-x-8">
            <a
              href="https://github.com/prajaktakap00r"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white rounded-md p-3 border-r-2 border-l-2 border-rose-400 shadow-lg hover:shadow-pink-200 transition duration-300"
            >
              <GitHubIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/prajaktakapoor/"
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
