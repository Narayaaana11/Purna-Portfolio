"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="w-full mt-25 px-6 py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col gap-12 justify-center">
        <motion.div
          className="text-center flex flex-col justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <span className="underline decoration-1 decoration-red-500">
            Who I Am
          </span>
          <h2 className="font-display tracking-wide text-4xl font-bold text-gray-50">
            About Me
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 items-center">
          <motion.div
            className="col-span-1 md:col-span-2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative w-full max-w-sm mx-auto aspect-[4/5] rounded-2xl overflow-hidden shadow-xl border-2 border-gray-700">
              <Image
                src="/images/purna-about.jpg"
                alt="Purna - profile photo 2"
                fill
                className="object-cover grayscale-100 hover:grayscale-0 transition-all duration-300"
              />
            </div>
          </motion.div>

          <motion.div
            className="col-span-1 md:col-span-3 flex flex-col gap-4 text-lg text-gray-300"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            {/* --- THIS IS THE FIX --- */}
            <p>
              Hello! I&apos;m Purna, a developer and student currently pursuing
              my{" "}
              <strong className="text-white">
                Master of Computer Applications (MCA)
              </strong>{" "}
              at{" "}
              <strong className="text-white">
                Aditya University, Surampalem
              </strong>
              .
            </p>
            <p>
              My core passion is{" "}
              <strong className="text-white">Full-Stack Development</strong>.
              I&apos;m driven by the challenge of building complete, end-to-end
              digital solutions, from a user-friendly interface to a robust
              server logic.
            </p>
            {/* --- END FIX --- */}
            <p>
              I specialize in the{" "}
              <strong className="text-white">React</strong> ecosystem (including{" "}
              <strong className="text-white">Next.js</strong>) for crafting
              dynamic front-ends and{" "}
              <strong className="text-white">Node.js</strong> for building
              efficient, scalable back-end services.
            </p>
            <p>
              I am focused on writing clean code to solve real-world problems and
              am actively seeking opportunities to apply my skills and grow as a
              developer.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;