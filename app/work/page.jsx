"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import { Description } from "@radix-ui/react-dialog";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "Modern DevFolio",
    title: "project 1",
    description: "The portfolio, developed using Next.js, TypeScript, and Tailwind CSS, effectively showcases projects and skills with a sleek and responsive design. It adapts seamlessly to various devices, ensuring an optimal viewing experience. By incorporating TypeScript, the code's reliability and maintainability are enhanced, while Next.js facilitates smooth navigation through dynamically routed project pages.",
    stack: [{ name: "Next.Js" }, { name: "TypeScript" }, { name: "Tailwind CSS" }],
    image: "/assets/work/devfolio.png",
    live: "https://best-dev-portfolio.vercel.app",
    github: "https://github.com/VirgoTheLord/Best-Dev-Portfolio",
  },
  {
    num: "02",
    category: "Gen-AI",
    title: "project 2",
    description:
      "The generative AI resume processor app, built with Python and Tkinter, provides a streamlined solution for analyzing and enhancing resumes. The user-friendly graphical interface allows individuals to easily upload and manage their resumes, ensuring accessibility for users of all technical backgrounds.",
    stack: [{ name: "Tkinter" }, { name: "Python" }, { name: "Tensorflow" }],
    image: "/assets/work/res.jpg",
    live: "",
    github: "https://github.com/VirgoTheLord/Gen-AI-Resume-Processor",
  },
  {
    num: "03",
    category: "Will be Updated soon...",
    title: "project 3",
    description:
      "Currenty working on a project that will be updated soon...",
    stack: [{ name: "Next.JS" }, { name: "Tailwind CSS" }, { name: "Node.js" }],
    image: "/assets/work/thumb2.png",
    live: "",
    github: "",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);
  const handleSlideChange = (swiper) => {
    //get current slide index
    const currentindex = swiper.activeIndex;
    //update porject state based on index
    setProject(projects[currentindex]);
  };
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* outline num */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              {/* category */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} project
              </h2>
              {/* description */}
              <p className="text-white/60">{project.description}</p>
              {/* stack */}
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {/* add comma if not last item */}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              {/* border */}
              <div className="border border-white/20"></div>
              {/* buttons */}
              <div className="flex items-center gap-4">
                {/* Live proj Button */}
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent " />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/* Github proj Button */}
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent " />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github Repo</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] w-[550px] relative group flex justify-center items-center bg-pink-50/20">
                      {/* overlay*/}
                      <div className="absolute top-0 bottom-0 w-[550px] h-full bg-black/10 z-10"></div>
                      {/* image */}
                      <div className="relative w-[550px] h-full">
                        <Image
                          src={project.image}
                          fill
                          className="object-cover"
                          alt=""
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/* buttons */}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all "
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;