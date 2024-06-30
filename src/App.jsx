import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./pages/NavBar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import bg from "./assets/bb2.jpg";

function App() {
  return (
    <Router>
      <div
        className="bg-cover bg-center h-200vh"
        /*  style={{
          backgroundImage: `url(${bg})`,
        }} */
        style={{
          backgroundImage:
            "url('https://1.bp.blogspot.com/-YOIuzv4Ey2M/YQL27kQNBVI/AAAAAAAAjDE/FwnVrDEAFQEke8Zeu9RMSFmyZvu3tPBQgCLcBGAsYHQ/s2535/AMOLED-HD.png')",
        }}
        //style={{ backgroundColor: "black" }}
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
