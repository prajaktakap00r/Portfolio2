import React from "react";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import project1 from "../assets/bg1.svg";
import project2 from "../assets/bg1.svg";
import project3 from "../assets/bg3.svg";
import project4 from "../assets/bg4.svg";
import project5 from "../assets/bg1.jpg";
import project6 from "../assets/bg1.jpg";

const projects = [
  {
    id: 1,
    name: "Innovify",
    description:
      "Developed a comprehensive Job Tracking application to facilitate job searching and application processes for users. The app provides a seamless user experience with robust functionality, leveraging the MERN stack for efficient performance and scalability.",
    image: project1,
    link: "https://innovify.onrender.com/",
  },
  {
    id: 2,
    name: "Project Management System",
    description:
      "A project management system where users can add, edit, and remove projects. Users can select projects from a sidebar to add tasks and delete them after completion. This system enhances productivity by organizing project workflows efficiently.",
    image: project2,
    link: "https://innovify.onrender.com/",
  },
  {
    id: 3,
    name: "Portfolio",
    description:
      "My portfolio, built with Tailwind CSS and React, showcases my projects, provides detailed information about me, and offers ways to connect with me. You can also access my YouTube channel and download my resume. Explore to learn more about my work and get in touch!",
    image: project3,
    link: "https://innovify.onrender.com/",
  },
  {
    id: 4,
    name: "Heart Disease Prediction System",
    description:
      "Fusce tristique tortor sed tellus vestibulum, sit amet efficitur elit elementum.",
    image: project4,
    link: "https://innovify.onrender.com/",
  },
  {
    id: 5,
    name: "Wedding Guest Management System",
    description:
      "Integer vitae enim id elit faucibus vestibulum. Quisque tincidunt augue at magna dapibus, in sagittis magna tincidunt.",
    image: project5,
    link: "https://innovify.onrender.com/",
  },
  {
    id: 6,
    name: "Tic Tac Toe",
    description:
      "Ut eget neque interdum, rutrum nisl ac, commodo lorem. Nulla efficitur, tortor eget venenatis convallis.",
    image: project6,
    link: "https://innovify.onrender.com/",
  },
];

const Projects = () => {
  return (
    <div className="container mx-auto py-12 px-4 ">
      <h1 className="text-3xl font-bold text-center mb-8 text-white">
        Our Projects
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-black shadow-lg rounded-lg overflow-hidden  transform hover:scale-105 transition-transform duration-500 ease-in-out hover:shadow-purple-600  "
          >
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-bold mb-2 uppercase text-pink-500 flex flex-row">
                {project.name}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-row items-center text-pink-500 hover:text-pink-700"
                >
                  <OpenInNewIcon />
                </a>
              </h2>
              <p className="text-white">{project.description} </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
