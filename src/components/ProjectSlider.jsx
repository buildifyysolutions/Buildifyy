import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaTimes } from "react-icons/fa";

const ProjectSlider = ({ project, isOpen, onClose }) => {
  if (!project) return null;
  console.log("Project:", project);

  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center ${
        isOpen ? "block" : "hidden"
      }`}
    >
      <motion.div
        className="bg-white rounded-lg p-5 w-11/12 md:w-3/4 lg:w-1/2"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
      >
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold text-gray-900">{project.name}</h2>
          <button onClick={onClose} className="text-gray-500">
            <FaTimes />
          </button>
        </div>
        <p className="mt-2 text-gray-700">{project.description}</p>
        <div className="mt-4">
          {project.image ? (
            <div className="bg-gray-100 p-4 rounded-lg shadow-md flex items-center justify-center">
              <img
                src={project.image}
                alt={`${project.name} image`}
                className="w-full h-auto rounded-md object-contain"
              />
            </div>
          ) : (
            <p className="text-gray-400">No images available.</p>
          )}
        </div>

        <div className="mt-4 flex justify-between">
          <a
            href={project.website_link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500"
          >
            View Website
          </a>
          <a
            href={project.source_code_link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500"
          >
            View Source Code
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectSlider;
