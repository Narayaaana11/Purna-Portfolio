"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { GithubIcon, ArrowUpRight } from "lucide-react";

export interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
}

export const projectsData: Project[] = [
  {
    id: 1,
    title: "Full-Stack E-commerce Store",
    description:
      "A complete e-commerce platform built with Next.js, featuring product listings, a shopping cart, and a full checkout process powered by a Node.js & PostgreSQL backend.",
    imageUrl:
      "https://images.unsplash.com/photo-1522204523234-8729aa6e3d5f?q=80&w=1740&auto=format&fit=crop",
    tags: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS"],
    githubUrl: "https://github.com/YOUR_USERNAME/ecommerce-project",
    liveUrl: "https://your-project-live-url.com",
  },
  {
    id: 2,
    title: "Real-time Chat Application",
    description:
      "A full-stack chat application. Users can join rooms and send messages in real-time. Built with a React front-end and a Node.js backend using Express and WebSockets.",
    imageUrl:
      "https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=1740&auto=format&fit=crop",
    tags: ["React", "Node.js", "Express", "WebSocket", "MongoDB"],
    githubUrl: "https://github.com/YOUR_USERNAME/chat-app-project",
  },
  {
    id: 3,
    title: "Full-Stack Blog Platform",
    description:
      "A headless CMS blog. Wrote a custom Node.js backend with a REST API and a dynamic Next.js frontend for rendering posts and managing content.",
    imageUrl:
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1740&auto=format&fit=crop",
    tags: ["Next.js", "Node.js", "MongoDB", "REST API", "Tailwind CSS"],
    githubUrl: "https://github.com/YOUR_USERNAME/blog-project",
    liveUrl: "https://your-blog-live-url.com",
  },
  {
    id: 4,
    title: "Data Analysis Dashboard",
    description:
      "A web dashboard that connects to a Python backend. Visualizes complex data using React and data visualization libraries like Chart.js.",
    imageUrl:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1740&auto=format&fit=crop",
    tags: ["React", "Python", "Flask", "Chart.js", "TypeScript"],
    githubUrl: "https://github.com/YOUR_USERNAME/dashboard-project",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="w-full mt-25 px-6 py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col gap-12 justify-center items-center">
        <motion.div
          className="text-center flex flex-col justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <span className="underline decoration-1 decoration-red-500">
            Featured
          </span>
          <h2 className="font-display tracking-wide text-4xl font-bold text-gray-50">
            Projects
          </h2>
          {/* --- THIS IS THE FIX --- */}
          <p className="text-gray-500">
            A selection of projects I&apos;ve built.
          </p>
          {/* --- END FIX --- */}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              delay={index * 0.15}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

const ProjectCard = ({
  project,
  delay,
}: {
  project: Project;
  delay: number;
}) => {
  return (
    <motion.div
      className="flex flex-col border border-gray-700 bg-[#161B22]/70 rounded-2xl overflow-hidden shadow-xl"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: delay }}
    >
      <div className="w-full aspect-video border-b border-gray-700 overflow-hidden">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>

      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-lg font-display font-semibold text-gray-50 mb-2">
          {project.title}
        </h3>
        <p className="text-sm text-gray-400 mb-3 flex-grow">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-medium text-blue-300 bg-blue-900/50 px-2 py-0.5 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-4 items-center">
          <Link
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
          >
            <GithubIcon size={18} />
            Code
          </Link>

          {project.liveUrl && (
            <>
              <span className="text-gray-600">|</span>
              <Link
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
              >
                <ArrowUpRight size={18} />
                Live Demo
              </Link>
            </>
          )}
        </div>
      </div>
    </motion.div>
  );
};