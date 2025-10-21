"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { MailIcon, PhoneIcon, LinkedinIcon, GithubIcon } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you'd send this data to an API endpoint
    console.log("Form data submitted:", formData);
    
    // Removed the alert() and just reset the form
    setFormData({ name: "", "email": "", message: "" });
  };

  // Common style for input fields
  const inputStyle =
    "w-full p-3 rounded-lg bg-[#0D1117] border border-gray-700 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500";

  return (
    <section id="contact" className="w-full mt-25 px-6 py-16 overflow-hidden">
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
            Let&apos;s Talk {/* <-- Fixed apostrophe */}
          </span>
          <h2 className="font-display tracking-wide text-4xl font-bold text-gray-50">
            Get in Touch
          </h2>
        </motion.div>

        {/* --- Content Grid --- */}
        <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* --- Left Column: Contact Info --- */}
          <motion.div
            className="flex flex-col gap-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-display font-semibold text-gray-50">
              Contact Information
            </h3>
            <p className="text-gray-400">
              Feel free to reach out to me directly or use the form. I&apos;m {/* <-- Fixed apostrophe */}
              always open to discussing new projects, creative ideas, or
              opportunities.
            </p>

            <a
              href="mailto:24m11mc045@adityauiversity.in" // From PDF
              className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors"
            >
              <MailIcon
                size={20}
                className="text-blue-400 flex-shrink-0"
              />
              <span>24m11mc045@adityauiversity.in</span>
            </a>
            <a
              href="tel:+918688313600" // From PDF
              className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors"
            >
              <PhoneIcon
                size={20}
                className="text-blue-400 flex-shrink-0"
              />
              <span>+91 8688313600</span>
            </a>
            <a
              href="https://linkedin.com/in/YOUR_USERNAME" // <-- CHANGEME
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors"
            >
              <LinkedinIcon
                size={20}
                className="text-blue-400 flex-shrink-0"
              />
              <span>Connect on LinkedIn</span>
            </a>
            <a
              href="https://github.com/YOUR_USERNAME" // <-- CHANGEME
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors"
            >
              <GithubIcon
                size={20}
                className="text-blue-400 flex-shrink-0"
              />
              <span>View my GitHub</span>
            </a>
          </motion.div>

          {/* --- Right Column: Form --- */}
          <motion.form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <label htmlFor="name" className="sr-only">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className={inputStyle}
              />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
                className={inputStyle}
              />
            </div>
            <div>
              <label htmlFor="message" className="sr-only">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                required
                className={inputStyle}
              />
            </div>
            <button
              type="submit"
              className="w-full p-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors duration-200"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
