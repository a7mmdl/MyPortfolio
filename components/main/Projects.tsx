import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/edutrack7.png"
          title="Attendance Management System"
          description="An Attendance Management System developed using HTML, CSS, JavaScript, PHP, and MySQL. It featured role-based access control."
        />
        <ProjectCard
          src="/chatbot.png"
          title="AI-Chat Application"
          description="developed a virtual real estate agent chatbot using UAE-tiiuae/falcon 7b Large Language Models (LLM), innovated with unique features."
        />
        <ProjectCard
          src="/bank.png"
          title="Online Banking Application"
          description="A robust online banking application allowing users to register and carry-out all banking features online with advanced security integrated."
        />
      </div>
    </div>
  );
};

export default Projects;