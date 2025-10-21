"use client";

import React from "react";
import { motion } from "framer-motion";
import { SchoolIcon } from "lucide-react";

// Data extracted from the provided PDF
const educationData = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "Aditya University",
    location: "Surampalem, Andhra Pradesh",
    dates: "August 2024 - May 2026",
    grade: "SGPA: 9.9/10",
  },
  {
    degree: "Bachelor of Computer Science (B.Sc)",
    institution: "Spaces Degree College",
    location: "Payakaraopeta",
    dates: "August 2021 - May 2024",
    grade: "CGPA: 8.5/10",
  },
];

const Education = () => {
  return (
    // IMPORTANT: The id is "experience" to match your Header.tsx link
    <section id="experience" className="w-full mt-25 px-6 py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col gap-12 justify-center items-center">
        {/* --- Title --- */}
        <motion.div
          className="text-center flex flex-col justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <span className="underline decoration-1 decoration-red-500">
            My Journey
          </span>
          <h2 className="font-display tracking-wide text-4xl font-bold text-gray-50">
            Education
          </h2>
        </motion.div>

        {/* --- Education Grid --- */}
        <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              className="flex flex-col border border-gray-700 bg-[#161B22]/70 p-6 rounded-2xl shadow-lg h-full" // Added h-full for equal height
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <div className="flex items-center gap-4 mb-4">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-800 text-blue-400 flex-shrink-0">
                  <SchoolIcon size={20} />
                </span>
                <div>
                  <h3 className="text-lg font-display font-semibold text-gray-50 leading-tight">
                    {edu.degree}
                  </h3>
                </div>
              </div>

              <div className="flex flex-col flex-grow">
                <p className="text-base text-gray-300">
                  {edu.institution}, {edu.location}
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  {edu.dates}
                </p>
                <div className="flex-grow" /> {/* Pushes grade to the bottom */}
                <p className="text-sm font-medium text-blue-300 mt-4">
                  {edu.grade}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
