import React from "react";
import project1 from "../assets/bg1.jpg";
import project2 from "../assets/bg3.jpg";
import project3 from "../assets/bg1.jpg";
import project4 from "../assets/bg1.jpg";
import project5 from "../assets/bg1.jpg";
import project6 from "../assets/bg1.jpg";

const projects = [
  {
    id: 1,
    name: "Innovify",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in velit justo.",
    image: project1,
  },
  {
    id: 2,
    name: "Project Management System",
    description:
      "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
    image: project2,
  },
  {
    id: 3,
    name: "Portfolio",
    description:
      "Vestibulum euismod nunc ac augue cursus, nec pretium sem varius.",
    image: project3,
  },
  {
    id: 4,
    name: "Heart Disease Prediction System",
    description:
      "Fusce tristique tortor sed tellus vestibulum, sit amet efficitur elit elementum.",
    image: project4,
  },
  {
    id: 5,
    name: "Wedding Guest Management System",
    description:
      "Integer vitae enim id elit faucibus vestibulum. Quisque tincidunt augue at magna dapibus, in sagittis magna tincidunt.",
    image: project5,
  },
  {
    id: 6,
    name: "Tic Tac Toe",
    description:
      "Ut eget neque interdum, rutrum nisl ac, commodo lorem. Nulla efficitur, tortor eget venenatis convallis.",
    image: project6,
  },
];

const Projects = () => {
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold text-center mb-8">Our Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white shadow-md rounded-lg overflow-hidden"
          >
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-bold mb-2 uppercase">
                {project.name}
              </h2>
              <p className="text-gray-600">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
