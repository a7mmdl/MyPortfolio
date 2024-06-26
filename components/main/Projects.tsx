"use client"

import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import ProjectCard from "../sub/ProjectCard";
import { motion, useAnimation } from "framer-motion";
import { slideInFromLeft, slideInFromBottom, slideInFromRight } from '@/utils/motion';

const Projects = () => {
  const { ref, inView } = useInView();
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <div className="flex flex-col items-center justify-center py-20" id="projects" ref={ref}>
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <motion.div
          variants={slideInFromLeft(0.4)}
          initial="hidden"
          animate={controls}
        >
          <ProjectCard
            src="/edutrack7.png"
            title="Attendance Management System"
            description="An Attendance Management System developed using HTML, CSS, JavaScript, PHP, and MySQL. It featured role-based access control."
          />
        </motion.div>
        <motion.div
          variants={slideInFromBottom(0.4)}
          initial="hidden"
          animate={controls}
        >
          <ProjectCard
            src="/chatbot.png"
            title="AI-Chat Application"
            description="developed a virtual real estate agent chatbot using UAE-tiiuae/falcon 7b Large Language Models (LLM), innovated with unique features."
          />
        </motion.div>
        <motion.div
          variants={slideInFromRight(0.4)}
          initial="hidden"
          animate={controls}
        >
          <ProjectCard
            src="/bank.png"
            title="Online Banking Application"
            description="A robust online banking application allowing users to register and carry-out all banking features online with advanced security integrated."
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
