// src/SkillBar.js
import React from "react";

const SkillBar = ({ skill, level }) => {
  return (
    <div className="mb-6">
      <div className="flex justify-between mb-2">
        <span className="text-lg font-semibold text-white">{skill}</span>
        <span className="text-lg font-semibold text-white">{level}%</span>
      </div>
      <div className="w-full bg-gray-300 rounded-full h-3 shadow-inner">
        <div
          className="bg-gradient-to-r from-rose-300 to-rose-300 h-3 rounded-full shadow-lg"
          style={{ width: `${level}%` }}
        ></div>
      </div>
    </div>
  );
};

export default SkillBar;
