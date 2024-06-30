import React from "react";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import project1 from "../assets/project1.svg";
import project2 from "../assets/project2.svg";
import project3 from "../assets/project3.svg";
import project4 from "../assets/project4.svg";
import project5 from "../assets/project5.svg";
import project6 from "../assets/project6.svg";

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
      "A system that predicts heart disease using machine learning algorithms. This project aims to assist in early diagnosis and better healthcare planning.",
    image: project4,
    link: "https://innovify.onrender.com/",
  },
  {
    id: 5,
    name: "Wedding Guest Management System",
    description:
      "An efficient system to manage wedding guest lists, invitations, and RSVPs. Built with a user-friendly interface for ease of use.",
    image: project5,
    link: "https://innovify.onrender.com/",
  },
  {
    id: 6,
    name: "Tic Tac Toe",
    description:
      "A classic Tic Tac Toe game with a modern twist, built using React. Enjoy the game with a sleek and responsive design.",
    image: project6,
    link: "https://innovify.onrender.com/",
  },
];

const Projects = () => {
  return (
    <div className="container mx-auto py-12 px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-20">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-black/80 h-auto border-b-2  border-rose-400 shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-500 ease-in-out hover:shadow-rose-600 flex flex-col"
          >
            <div className="flex flex-row p-4">
              <img
                src={project.image}
                alt={project.name}
                className="w-1/3 h-auto object-cover rounded-lg mr-4"
              />
              <div className="flex flex-col justify-center">
                <h2 className="text-lg font-bold mb-2 uppercase italic text-rose-200 flex items-center">
                  {project.name}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-rose-300 hover:text-pink-700 ml-2"
                  >
                    <OpenInNewIcon />
                  </a>
                </h2>
                <p className="text-white italic text-sm">
                  {project.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
