import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./pages/NavBar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";

function App() {
  return (
    <Router>
      <div
        className="bg-cover bg-center h-200vh"
        /* style={{
          backgroundImage:
            "url('https://media.istockphoto.com/id/1191607201/photo/black-gray-satin-dark-fabric-texture-luxurious-shiny-that-is-abstract-silk-cloth-background.jpg?s=612x612&w=0&k=20&c=RQbgXSbaCWC6bCwM4aZyRBozca2Wtf2o1Y7Fbj7FYsQ=')",
        }} */
        style={{ backgroundColor: "black" }}
      >
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
