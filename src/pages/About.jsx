import React from "react";
import profileImage from "../assets/ab1.svg";
function About() {
  return (
    <div className="m-2 p-2">
      <div className="text-white p-1 ">
        {/* Into Section */}
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
              Prajakta Kapoor
            </h1>
            <p className="text-lg text-rose-50 text-center md:text-left mb-8"></p>
            <div></div>
          </div>
        </section>
        <section id="about" className="p-6">
          <h2 className="text-4xl font-bold text-center mb-4 text-purple-300">
            Education Background
          </h2>

          <div className="w-[60rem] mx-auto px-4 mt-10 border-2 rounded-md border-rose-300">
            <div className="max-w-4xl mx-auto text-white p-6">
              <div className="flex justify-between items-center">
                <h1 className=" text-xl text-bold uppercase text-rose-300">
                  Chandigarh University
                </h1>
                <h2>2021-2025</h2>
              </div>
              <hr></hr>
              <h4 className="mt-2">Bachelor's in Computer Science</h4>
              <h4 className="mt-1">Grade: 8.41 CGPA</h4>
            </div>
          </div>
          <div className="w-[60rem] mx-auto px-4 mt-10 border-2 border-rose-300">
            <div className="max-w-4xl mx-auto text-white p-6">
              <div className="flex justify-between items-center">
                <h1 className=" text-xl text-bold uppercase text-rose-300">
                  Kendriya Vidyalaya Kathua
                </h1>
                <h2>2020-2021</h2>
              </div>
              <hr></hr>
              <h4 className="mt-2">12th</h4>
              <h4 className="mt-1">Grade: 95.6%</h4>
            </div>
          </div>
          <div className="w-[60rem] mx-auto px-4 mt-10 border-2 border-rose-300">
            <div className="max-w-4xl mx-auto text-white p-6">
              <div className="flex justify-between items-center">
                <h1 className=" text-xl text-bold uppercase text-rose-300">
                  Kendriya Vidyalaya Kathua
                </h1>
                <h2>2018-2019</h2>
              </div>
              <hr></hr>
              <h4 className="mt-2">Bachelor's in Computer Science</h4>
              <h4 className="mt-1">Grade: 92.8%</h4>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default About;
