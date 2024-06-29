import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="h-[3.5rem]">
      <ul className="flex text-md uppercase font-bold">
        <Link
          to="/"
          className="m-8 text-white rounded-md p-2 border-pink-600 border-2 transition-shadow hover:shadow-lg hover:shadow-pink-600"
        >
          Home
        </Link>
        <Link
          to="/about"
          className="m-8 text-white rounded-md p-2 border-pink-600 border-2 transition-shadow hover:shadow-lg hover:shadow-pink-600"
        >
          About
        </Link>
        <Link
          to="/projects"
          className="m-8 text-white rounded-md p-2 border-pink-600 border-2 transition-shadow hover:shadow-lg hover:shadow-pink-600"
        >
          Projects
        </Link>
      </ul>
    </div>
  );
}
