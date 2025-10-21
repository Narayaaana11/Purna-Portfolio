"use client";

import {
  Code2Icon,
  GithubIcon,
  LinkedinIcon,
  MailIcon,
} from "lucide-react";
import Link from "next/link";
import React from "react";
// import { BsWhatsapp } from "react-icons/bs"; // Removed
import { GoMoveToTop } from "react-icons/go";

const Footer: React.FC = () => {
  const linkClassName =
    "p-2 text-gray-400 hover:text-gray-100 hover:scale-110 transition-all duration-200 rounded-lg";

  return (
    <footer className="w-full mt-35 bg-[#0D1117] p-4 shadow-[0_-10px_30px_rgba(13,17,23,0.45)] pb-14 pt-14">
      <div className="max-w-7xl mx-auto flex flex-col gap-3 justify-center items-center px-6 mb-3">
        <Link
          href="/#home"
          title="Go to top"
          className="flex items-center gap-2 hover:scale-105 text-gray-500 hover:text-gray-200 transition-all duration-200 bg-gradient-to-b from-transparent to-transparent hover:from-transparent hover:to-gray-900 hover:border-b-[0.2] border-gray-500 px-2 py-1 rounded-lg"
        >
          <GoMoveToTop size={24} className="" />
        </Link>
        <div className="mt-4 w-full flex flex-col-reverse md:flex-row gap-8 justify-between">
          <div className="flex gap-1 flex-col items-center md:items-start justify-center">
            <h3 className="text-xl font-medium font-display flex gap-1 items-center">
              <Code2Icon /> Purna
            </h3>
            <p className="text-gray-500 text-center">
              Purna © {new Date().getFullYear()} Built with ❤️ by Purna
            </p>
          </div>

          <div>
            <ul className="flex gap-2 items-center md:items-start justify-center">
              <li>
                <Link
                  href="https://linkedin.com/in/YOUR_USERNAME" // <-- CHANGEME
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClassName}
                  title="LinkedIn"
                >
                  <LinkedinIcon size={22} />
                </Link>
              </li>
              <li>
                <Link
                  href="https://github.com/YOUR_USERNAME" // <-- CHANGEME
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClassName}
                  title="GitHub"
                >
                  <GithubIcon size={22} />
                </Link>
              </li>
              <li>
                <Link
                  href="mailto:your.email@example.com" // <-- CHANGEME
                  className={linkClassName}
                  title="Email"
                >
                  <MailIcon size={22} />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;