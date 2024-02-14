import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        Some of my Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          
          src="/webexp.png"
          title="WebExp"
          
          description="It's a freenlancing portfolio website, created during 1st year of my college along with my teammates by using HTML, CSS and Javascript. "
          
        />
        <ProjectCard
          
          src="/info.png"
          title="Infonation"
          description="An android app resposnible for showing news, realtime weather update, corona status by fetching data at the backend using APIs."
        />
        <ProjectCard
          src="/hand.png"
          title="DotConnect"
          description="A Machine Learning algorithm for Hand sign detection, it converts sign from realtime video into text using python and its libraries like tensorflow, cv2 etc. "
        />
      </div>
    </div>
  );
};

export default Projects;
