"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
} from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss } from "react-icons/si";

// Icon mapping object
const iconMapping = {
  HTML: FaHtml5,
  CSS: FaCss3,
  JavaScript: FaJs,
  React: FaReact,
  "Tailwind CSS": SiTailwindcss,
  "Next.js": SiNextdotjs,
  "Node.js": FaNodeJs,
  Figma: FaFigma,
};

const about = {
  title: "About Me",
  description:
    "I'm a full stack developer with a passion for creating beautiful and functional websites. I have experience with a variety of technologies including HTML, CSS, JavaScript, React, Node.js, and more. I am always looking to learn new things and improve my skills.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Alwin Aby",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+91) 9947581345",
    },
    {
      fieldName: "Experience",
      fieldValue: "2+ years",
    },
    {
      fieldName: "Instagram",
      fieldValue: "alwx.n",
    },
    {
      fieldName: "Email",
      fieldValue: "alwinaby2004@gmail.com",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Malayalam, Hindi, Arabic",
    },
  ],
};

const experience = {
  icons: "/assets/resume/badge.svg",
  title: "My Experience",
  description:
    "I have worked with a variety of companies and clients to create websites and web applications. Here are some of the projects that I have worked on:",
  items: [
    {
      company: "Nest Digital",
      position: "Gen-AI intern",
      duration: "June 2024- July-2024",
    },
    {
      company: "Nest Digital",
      position: "Gen-AI intern",
      duration: "June 2024- July-2024",
    },
    {
      company: "Nest Digital",
      position: "Gen-AI intern",
      duration: "June 2024- July-2024",
    },
    {
      company: "Nest Digital",
      position: "Gen-AI intern",
      duration: "June 2024- July-2024",
    },
    {
      company: "Nest Digital",
      position: "Gen-AI intern",
      duration: "June 2024- July-2024",
    },
    {
      company: "Nest Digital",
      position: "Gen-AI intern",
      duration: "June 2024- July-2024",
    },
  ],
};

const education = {
  icons: "/assets/resume/cap.svg",
  title: "My Education",
  description:
    "I have worked with a variety of companies and clients to create websites and web applications. Here are some of the projects that I have worked on:",
  items: [
    {
      institution: "TENS, Sharjah",
      degree: "Primary Education",
      duration: "2009-2020",
    },
    {
      institution: "TENS, Sharjah",
      degree: "Primary Education",
      duration: "2009-2020",
    },
    {
      institution: "TENS, Sharjah",
      degree: "Primary Education",
      duration: "2009-2020",
    },
    {
      institution: "TENS, Sharjah",
      degree: "Primary Education",
      duration: "2009-2020",
    },
    {
      institution: "TENS, Sharjah",
      degree: "Primary Education",
      duration: "2009-2020",
    },
    {
      institution: "TENS, Sharjah",
      degree: "Primary Education",
      duration: "2009-2020",
    },
    {
      institution: "TENS, Sharjah",
      degree: "Primary Education",
      duration: "2009-2020",
    },
  ],
};

const skills = {
  title: "My Skills",
  description: "Proficient in the following technologies:",
  items: [
    {
      name: "HTML",
      iconName: "HTML",
    },
    {
      name: "CSS",
      iconName: "CSS",
    },
    {
      name: "JavaScript",
      iconName: "JavaScript",
    },
    {
      name: "React",
      iconName: "React",
    },
    {
      name: "Tailwind CSS",
      iconName: "Tailwind CSS",
    },
    {
      name: "Next.js",
      iconName: "Next.js",
    },
    {
      name: "Node.js",
      iconName: "Node.js",
    },
    {
      name: "Figma",
      iconName: "Figma",
    },
  ],
};

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/ui/tabs";
import { motion } from "framer-motion";
import { ScrollArea } from "@/components/ui/ui/scroll-area";
import {
  Tooltip,
  TooltipProvider,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/ui/tooltip";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="about"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="about">About</TabsTrigger>
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
          </TabsList>
          {/* content */}
          <div>
            {/* ABOUT */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 gap-x-20 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
            {/* experiencE */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* EDUCATION*/}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* SKILLS */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-4 xl:gap-[20px] sm:gap-[20px] sm:px-16">
                  {skills.items.map((item, index) => {
                    const IconComponent = iconMapping[item.iconName]
                    if (!IconComponent) {
                      console.warn(`No icon found for ${item.iconName}`);
                      return null; // Or render a placeholder
                    }

                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-[190px] h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-5xl text-white group-hover:text-accent transition-all duration-300">
                                <IconComponent />
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{item.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
