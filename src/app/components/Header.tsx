"use client";

import React, { useState, useEffect } from "react";
import {
  Code2Icon,
  FolderClosedIcon,
  GithubIcon,
  HomeIcon,
  UserIcon,
  BriefcaseIcon,
  LinkedinIcon,
  MailIcon,
  WrenchIcon,
  SendIcon,
  MenuIcon, // Added for mobile
  XIcon, // Added for mobile
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Import usePathname

const Header: React.FC = () => {
  return (
    <header className="w-full fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-gray-950/95 to-transparent">
      <NavBar />
    </header>
  );
};

export default Header;

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Common style for nav links
  const linkClassName =
    "flex items-center gap-2 hover:text-gray-200 transition-all duration-200 bg-gradient-to-b from-transparent to-transparent hover:from-transparent hover:to-gray-900 hover:border-b-[0.2] border-gray-500 px-3 py-2 rounded-lg";

  // Style for mobile links
  const mobileLinkClassName =
    "flex items-center gap-2 hover:text-gray-200 transition-all duration-200 rounded-lg px-3 py-2 text-base w-full hover:bg-gray-900";

  const socialLinkClassName =
    "flex items-center gap-2 hover:text-gray-200 transition-all duration-200 bg-gradient-to-b from-transparent to-transparent hover:from-transparent hover:to-gray-900 px-3 py-2 rounded-lg";

  // All nav items as a reusable fragment
  const navItems = (
    <>
      {/* --- Main Page Links --- */}
      <li>
        <Link
          href="/#home"
          className={isOpen ? mobileLinkClassName : linkClassName}
        >
          <HomeIcon size={18} /> Home
        </Link>
      </li>
      <li>
        <Link
          href="/#about"
          className={isOpen ? mobileLinkClassName : linkClassName}
        >
          <UserIcon size={18} /> About
        </Link>
      </li>
      <li>
        <Link
          href="/#skills"
          className={isOpen ? mobileLinkClassName : linkClassName}
        >
          <WrenchIcon size={18} /> Skills
        </Link>
      </li>
      <li>
        <Link
          href="/#projects"
          className={isOpen ? mobileLinkClassName : linkClassName}
        >
          <FolderClosedIcon size={18} /> Projects
        </Link>
      </li>
      <li>
        <Link
          href="/#experience"
          className={isOpen ? mobileLinkClassName : linkClassName}
        >
          <BriefcaseIcon size={18} /> Education
        </Link>
      </li>
      <li>
        <Link
          href="/#contact"
          className={isOpen ? mobileLinkClassName : linkClassName}
        >
          <SendIcon size={18} /> Contact
        </Link>
      </li>

      {/* --- Separator (hidden on mobile, shown on desktop) --- */}
      <li
        className={`py-1 h-6 ${
          isOpen ? "hidden" : "hidden md:flex"
        } items-center`}
      >
        <span className="w-px h-4/5 bg-gray-700 inline-block"></span>
      </li>

      {/* --- Social & Contact Links --- */}
      <li>
        <Link
          href="https://linkedin.com/in/YOUR_USERNAME" // <-- CHANGEME
          target="_blank"
          rel="noopener noreferrer"
          className={isOpen ? mobileLinkClassName : socialLinkClassName}
          title="LinkedIn"
        >
          <LinkedinIcon size={18} /> {isOpen && "LinkedIn"}{" "}
          {/* Show text on mobile */}
        </Link>
      </li>
      <li>
        <Link
          href="https://github.com/YOUR_USERNAME" // <-- CHANGEME
          target="_blank"
          rel="noopener noreferrer"
          className={isOpen ? mobileLinkClassName : socialLinkClassName}
          title="GitHub"
        >
          <GithubIcon size={18} /> {isOpen && "GitHub"}{" "}
          {/* Show text on mobile */}
        </Link>
      </li>

      <li>
        <Link
          href="mailto:your.email@example.com" // <-- CHANGEME
          className={isOpen ? mobileLinkClassName : socialLinkClassName}
          title="Email"
        >
          <MailIcon size={18} /> {isOpen && "Email"}{" "}
          {/* Show text on mobile */}
        </Link>
      </li>
    </>
  );

  return (
    <div className="border-[0.2] border-gray-700 max-w-4xl mx-auto text-gray-400 backdrop-blur-3xl bg-[#0D1117]/75 mt-6 rounded-2xl flex justify-between items-center relative p-3 px-6 md:px-12">
      <a
        href="/"
        className="font-medium font-display text-gray-50 flex gap-2 items-center"
      >
        <Code2Icon />
        Purna
      </a>

      {/* --- Desktop Nav --- */}
      <nav className="hidden md:block">
        <ul className="flex gap-2 text-sm font-medium items-center">
          {navItems}
        </ul>
      </nav>

      {/* --- Mobile Menu Button --- */}
      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          className="p-2 rounded-md text-gray-400 hover:text-gray-100"
        >
          {isOpen ? <XIcon size={22} /> : <MenuIcon size={22} />}
        </button>
      </div>

      {/* --- Mobile Menu --- */}
      {isOpen && (
        <div className="md:hidden absolute top-[76px] left-0 right-0 w-full">
          <nav className="border-[0.2] border-gray-700 text-gray-400 backdrop-blur-3xl bg-[#0D1117]/90 mx-6 rounded-2xl shadow-xl">
            <ul
              className="flex flex-col gap-2 text-sm font-medium items-start p-4"
              onClick={() => setIsOpen(false)} // Close menu on link click
            >
              {navItems}
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
};