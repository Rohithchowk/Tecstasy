import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        Our Events !!!...
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10 mt-8 mb-8">
        <ProjectCard
          src="/NextWebsite.png"
          title="Technical Paper Presentation"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <ProjectCard
          src="/CardImage.png"
          title="Technical Debate"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <ProjectCard
          src="/SpaceWebsite.png"
          title="Technical Quiz"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        </div>
        <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10 mt-8 mb-8">
        <ProjectCard
          src="/NextWebsite.png"
          title="Tech Virus"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <ProjectCard
          src="/CardImage.png"
          title="Blind Coding"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <ProjectCard
          src="/SpaceWebsite.png"
          title="Code Hunt"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        </div>
        <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10 mt-8 mb-8">
        <ProjectCard
          src="/NextWebsite.png"
          title="Capture the Flag"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <ProjectCard
          src="/CardImage.png"
          title="Treasure Hunt"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <ProjectCard
          src="/SpaceWebsite.png"
          title="Snake and Ladder"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        </div>
        <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10 mt-8 mb-8">
        <ProjectCard
          src="/NextWebsite.png"
          title="Tech Tamasha"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        
        <ProjectCard
          src="/CardImage.png"
          title="Code Splash"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <ProjectCard
          src="/SpaceWebsite.png"
          title="Meme Tech"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
      </div>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10 mt-8 mb-8">
        <ProjectCard
          src="/NextWebsite.png"
          title="Scribble It"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        
        <ProjectCard
          src="/CardImage.png"
          title="Workshop on Drones"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <ProjectCard
          src="/SpaceWebsite.png"
          title="Idea Presentation "
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
      </div>
      
    </div>
  );
};

export default Projects;
