import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="h-[3.5rem] flex flex-col md:flex-row md:items-center m-2 p-2 justify-center">
      <ul className="flex flex-col md:flex-row md:items-center md:justify-end text-md uppercase font-bold">
        <li className="mr-8 md:mr-12">
          <Link
            to="/"
            className="block text-white rounded-md p-2 border-pink-400 border-2 shadow-lg shadow-pink-600 hover:shadow-rose-300"
          >
            Home
          </Link>
        </li>
        <li className="mr-8 md:mr-12">
          <Link
            to="/about"
            className="block text-white rounded-md p-2 border-pink-400 border-2 shadow-lg shadow-pink-600 hover:shadow-rose-300"
          >
            About
          </Link>
        </li>
        <li className="mr-8 md:mr-12">
          <Link
            to="/projects"
            className="block text-white rounded-md p-2 border-pink-400 border-2 shadow-lg shadow-pink-600 hover:shadow-rose-300"
          >
            Projects
          </Link>
        </li>
      </ul>
    </div>
  );
}
