"use client";

import {
  InstagramIcon,
  MailIcon,
  SendIcon,
  GithubIcon,
  LinkedinIcon,
} from "lucide-react";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const Hero = () => {
  // Common style for social links
  const socialLinkClass =
    "p-2 text-gray-400 hover:text-gray-100 transition-all duration-200 hover:scale-110 rounded-lg";

  // Animation variants for the container (staggers children)
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.2, // Start after a short delay
        staggerChildren: 0.15, // Each child animates 0.15s after the previous
      },
    },
  };

  // Animation variants for each item (fades up)
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section
      id="home"
      className="w-full mt-35 px-6 pt-24 pb-12 overflow-hidden"
    >
      <motion.div
        className="max-w-7xl mx-auto flex flex-col gap-6 justify-center items-center"
        initial="hidden"
        animate="show"
        variants={containerVariants}
      >
        <motion.div
          className="group relative w-32 sm:w-40 md:w-48 lg:w-56 aspect-square overflow-hidden rounded-full transition-all duration-300"
          variants={itemVariants}
        >
          <Image
            src="/images/purna.jpg" // Uses the /public/images/purna.jpg path
            alt="Purna - profile photo"
            fill
            priority
            className="grayscale-100 hover:grayscale-0 object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
          />
        </motion.div>

        <motion.div
          className="flex flex-col justify-center items-center gap-5 max-w-3xl text-center"
          variants={itemVariants}
        >
          <div className="flex flex-col gap-2">
            <span className="text-lg text-gray-400">Hi, I&apos;m</span>
            <h1 className="font-display tracking-wide text-5xl font-bold text-gray-50">
              Purna
            </h1>
            {/* --- UPDATED H2 --- */}
            <h2 className="font-semibold text-2xl text-blue-400 animate-pulse">
              Full-Stack Developer
            </h2>
          </div>
        </motion.div>

        <motion.div variants={itemVariants}>
          {" "}
          <ul className="flex gap-3 justify-center items-center">
            <li>
              <Link
                href="https://linkedin.com/in/YOUR_USERNAME" // <-- CHANGEME
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn"
                className={socialLinkClass}
              >
                <LinkedinIcon />
              </Link>
            </li>
            <li>
              <Link
                href="https://github.com/YOUR_USERNAME" // <-- CHANGEME
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub"
                className={socialLinkClass}
              >
                <GithubIcon />
              </Link>
            </li>
            <li>
              <Link
                href="mailto:your.email@example.com" // <-- CHANGEME
                title="Email"
                className={socialLinkClass}
              >
                <MailIcon />
              </Link>
            </li>
          </ul>
        </motion.div>

        {/* --- UPDATED PARAGRAPH --- */}
        <motion.p
          className="text-lg text-gray-300 text-center max-w-2xl" // Added text-center and max-width
          variants={itemVariants}
        >
          A full-stack developer bridging the gap between web and mobile. I craft
          seamless, high-performance applications using{" "}
          <strong className="text-gray-100">React</strong>,{" "}          <strong className="text-gray-100">Node.js</strong>, complemented by
          expertise in native{" "}
          <strong className="text-gray-100">Android development</strong>.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default Hero;