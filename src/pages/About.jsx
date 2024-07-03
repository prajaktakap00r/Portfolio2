import React from "react";
import profileImage from "../assets/ab1.svg";
import LocationOnIcon from "@mui/icons-material/LocationOn";

function About() {
  return (
    <div className="m-2 p-2">
      <div className="text-white p-1">
        {/* Intro Section */}
        <section
          id="home"
          className="flex flex-col md:flex-row items-center justify-center h-[35rem]"
        >
          <img
            src={profileImage}
            alt="Proud self"
            className="rounded-md p-2 w-62 h-60 mb-4 border-white"
          />
          <div className="flex flex-col items-center md:items-start md:ml-10">
            <h1 className="text-5xl font-bold text-purple-300 text-center md:text-left mb-4">
              Prajakta Kapoor
            </h1>
            <p className="text-lg text-rose-50 text-center md:text-left mb-8">
              <LocationOnIcon /> Kathua, Jammu & Kashmir
            </p>
          </div>
        </section>

        {/* Education Section */}
        <section id="about" className="p-6">
          <h2 className="text-4xl font-bold text-center mb-4 text-purple-300">
            Education Background
          </h2>

          <div className="mx-auto px-4 mt-10 border-2 bg-pink-300/20 rounded-md border-rose-300 shadow-lg hover:shadow-rose-300 w-full max-w-4xl overflow-hidden transform hover:scale-105 transition-transform duration-500 ease-in-out">
            <div className="text-white p-6">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <h1 className="text-xl font-bold uppercase text-rose-300">
                  Chandigarh University
                </h1>
                <h2 className="mt-2 md:mt-0">2021-2025</h2>
              </div>
              <hr className="my-4 border-white" />
              <h4 className="text-white">Bachelor's in Computer Science</h4>
              <h4 className="mt-1">Grade: 8.41 CGPA</h4>
            </div>
          </div>

          <div className="mx-auto px-4 mt-10 border-2 bg-pink-300/20 rounded-md w-full border-rose-300 shadow-lg hover:shadow-rose-300 max-w-4xl overflow-hidden transform hover:scale-105 transition-transform duration-500 ease-in-out">
            <div className="text-white p-6  ">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <h1 className="text-xl font-bold uppercase text-rose-300">
                  Kendriya Vidyalaya
                </h1>
                <h2 className="mt-2 md:mt-0">2020-2021</h2>
              </div>
              <hr className="my-4" />
              <h4>12th-PCM with CS</h4>
              <h4 className="mt-1">Grade: 95.6%</h4>
            </div>
          </div>

          <div className="mx-auto px-4 mt-10 border-2 bg-pink-300/20 rounded-md border-rose-300 shadow-lg hover:shadow-rose-300 w-full max-w-4xl overflow-hidden transform hover:scale-105 transition-transform duration-500 ease-in-out">
            <div className="text-white p-6">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <h1 className="text-xl font-bold uppercase text-rose-300">
                  Kendriya Vidyalaya
                </h1>
                <h2 className="mt-2 md:mt-0">2018-2019</h2>
              </div>
              <hr className="my-4" />
              <h4>Matriculation</h4>
              <h4 className="mt-1">Grade: 92.8%</h4>
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section id="hobbies" className="p-36 justify-center align-middle ">
          <h2 className="text-4xl font-bold text-center mb-4 text-purple-300">
            Achievements
          </h2>

          <div className="flex flex-row justify-between gap-10  w-[70rem] h-[8rem] ">
            <div className="mx-auto px-4 mt-10 border-2  bg-pink-300/20  rounded-es-3xl rounded-tr-3xl  border-rose-300 shadow-lg hover:shadow-rose-300 w-full max-w-4xl">
              <div className="text-white p-6 ">
                <h4 className="m-2">Gold Medalist in Athletics</h4>
              </div>
            </div>

            <div className="mx-auto px-4 mt-10 border-2  bg-pink-300/20  rounded-es-3xl rounded-tr-3xl border-rose-300 shadow-lg hover:shadow-rose-300 w-full max-w-4xl">
              <div className="text-white p-6">
                <h4 className="mt-2">School Topper in 10th and 12th</h4>
              </div>
            </div>
            <div className="mx-auto px-4 mt-10 border-2   bg-pink-300/20 rounded-es-3xl rounded-tr-3xl border-rose-300 shadow-lg hover:shadow-rose-300 w-full max-w-4xl">
              <div className="text-white p-6">
                <h4 className="mt-2">Solved 400+ Problems on Leetcode</h4>
              </div>
            </div>
          </div>
        </section>
        {/* Certification Section */}
        <section id="hobbies" className="p-6">
          <h2 className="text-4xl font-bold text-center mb-4 text-purple-300">
            Certification
          </h2>

          <div className="flex flex-row justify-between gap-10">
            <div className="mx-auto px-4 mt-10 border-2 rounded-md  bg-pink-300/20  border-rose-300 shadow-lg hover:shadow-rose-300 w-full max-w-4xl">
              <div className="text-white p-6 ">
                <h4 className="mt-2">MERN Stack Development, Udemy 2024</h4>
              </div>
            </div>

            <div className="mx-auto px-4 mt-10 border-2 rounded-md   bg-pink-300/20  border-rose-300 shadow-lg hover:shadow-rose-300 w-full max-w-4xl">
              <div className="text-white p-6">
                <h4 className="mt-2">
                  Participated in Electrothon, NIT Hamirpur, 2024
                </h4>
              </div>
            </div>
            <div className="mx-auto px-4 mt-10 border-2 rounded-md   bg-pink-300/20  border-rose-300 shadow-lg hover:shadow-rose-300 w-full max-w-4xl">
              <div className="text-white p-6">
                <h4 className="mt-2">
                  Complete Machine Learning and Data Science Course, Udemy 2023
                </h4>
              </div>
            </div>
            <div className="mx-auto px-4 mt-10 border-2 rounded-md   bg-pink-300/20  border-rose-300 shadow-lg hover:shadow-rose-300 w-full max-w-4xl">
              <div className="text-white p-6">
                <h4 className="mt-2">Complete DSA by Abdul Bari, Udemy 2023</h4>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default About;
