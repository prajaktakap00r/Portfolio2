import { Link } from "react-router-dom";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import profile from "../assets/profile.svg";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-white  overflow-x-hidden overflow-y-hidden">
      <div className="flex flex-col items-center  overflow-x-hidden overflow-y-hidden ">
        <img src={profile} alt="Coder" className="w-64 h-64 object-cover m-4" />

        <div className="text-center flex-col m-4">
          <h1 className="text-5xl font-bold text-pink-400">Hey there,</h1>
          <span className="text-3xl text-purple-400">I am Prajakta Kapoor</span>
        </div>

        <h2 className="text-2xl font-bold m-3">Let's Connect</h2>

        <div className="flex justify-center space-x-8">
          <Link
            to="https://github.com/prajaktakap00r"
            className="text-white rounded-md p-3 border-2 border-purple-400 shadow-lg shadow-purple-600 hover:shadow-purple-200"
          >
            <GitHubIcon />
          </Link>

          <Link
            to="https://www.linkedin.com/in/prajaktakapoor/"
            className="text-white rounded-md p-3 border-2 border-purple-400  shadow-lg shadow-purple-600 hover:shadow-purple-200"
          >
            <LinkedInIcon />
          </Link>

          <Link
            to="https://x.com/kapoor_prajakta"
            className="text-white rounded-md p-3 border-2 border-purple-400 shadow-lg shadow-purple-600 hover:shadow-purple-200"
          >
            <XIcon />
          </Link>
        </div>
      </div>
    </div>
  );
}
