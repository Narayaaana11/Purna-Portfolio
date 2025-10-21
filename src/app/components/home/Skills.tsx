import React from "react";
import { IconType } from "react-icons";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { TbBrandTypescript } from "react-icons/tb";
import { RiTailwindCssLine } from "react-icons/ri";
import { SiExpress } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";
import { TbBrandMongodb } from "react-icons/tb";
import { DiRedis } from "react-icons/di";
import { TbBrandJavascript } from "react-icons/tb";
import { SiFirebase } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { RiVercelLine } from "react-icons/ri";
import { TbBrandCloudflare } from "react-icons/tb";

export interface SkillItem {
  name: string;
  logo: IconType;
}

// Kept this structure for easy data management
export const skillsData = [
  {
    title: "Frontend",
    skills: [
      { name: "React", logo: FaReact },
      { name: "Next.js", logo: TbBrandNextjs },
      { name: "TypeScript", logo: TbBrandTypescript },
      { name: "TailwindCSS", logo: RiTailwindCssLine },
      { name: "Javascript", logo: TbBrandJavascript },
      { name: "Git", logo: FaGitAlt },
      { name: "Github", logo: FaGithub },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", logo: FaNodeJs },
      { name: "Express", logo: SiExpress },
      { name: "PostgreSQL", logo: SiPostgresql },
      { name: "Mongodb", logo: TbBrandMongodb },
      { name: "Redis", logo: DiRedis },
      { name: "Firebase", logo: SiFirebase },
      { name: "Vercel", logo: RiVercelLine },
      { name: "Cloudflare", logo: TbBrandCloudflare },
    ],
  },
];

const Skills = () => {
  // Flatten the skillsData array into a single array of skills
  const allSkills = skillsData.flatMap((group) => group.skills);

  return (
    <section id="skills" className="w-full mt-25 px-6">
      <div className="max-w-7xl mx-auto flex flex-col gap-2 justify-center items-center">
        <div className="text-center flex flex-col justify-center items-center">
          <span className="underline decoration-1 decoration-red-500">
            Tech Stack
          </span>
          <h2 className="font-display tracking-wide text-4xl font-bold text-gray-50">
            Technologies
          </h2>
          <p className="text-gray-500">
            Technologies I use to craft digital experiences
          </p>
        </div>

        {/* --- New Grid Container --- */}
        <div className="w-full max-w-5xl">
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {allSkills.map((skill) => (
              <div
                key={skill.name}
                className="text-gray-400 decoration-red-500 flex items-center justify-center gap-2 border border-gray-700 bg-[#0D1117] px-4 py-3 rounded-md"
              >
                <skill.logo size={20} />
                <span className="text-sm font-medium">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

// --- Removed the SkillsCard sub-component as it's no longer needed ---