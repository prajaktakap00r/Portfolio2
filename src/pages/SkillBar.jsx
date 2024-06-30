// src/SkillBar.js
import React from "react";

const SkillBar = ({ skill, level }) => {
  return (
    <div className="mb-6">
      <div className="flex justify-between mb-2">
        <span className="text-sm font-semibold text-white">{skill}</span>
        <span className="text-sm font-semibold text-white">{level}%</span>
      </div>
      <div className="w-full bg-gray-300 rounded-md h-2 shadow-inner">
        <div
          className="bg-gradient-to-r from-rose-400 to-rose-400 h-2 rounded-md shadow-lg"
          style={{ width: `${level}%` }}
        ></div>
      </div>
    </div>
  );
};

export default SkillBar;
