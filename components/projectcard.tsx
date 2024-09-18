import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, X } from "lucide-react";
import { MagicCard } from "./magicui/magic-card";
import { cn } from "@/lib/utils";
import { CardContent } from "./ui/card";
import { Project } from "@/lib";
import { projects } from "@/lib/data";
import SectionHeader from "./section-header";





function ProjectCard({
  project,
  onClick,
  className,
}: {
  project: Project;
  onClick: () => void;
  className?: string;
}) {
  return (
    <div className="flex flex-col justify-center items-center h-[300px]" key={project.title}>
      <div className=" bg-gray-500/20 w-[1px] h-full"></div>
      <div className="flex flex-row  relative w-full items-center">
        <div className=" bg-gray-500/20 h-[1px] w-14"></div>
        <div
          className={cn(
            `flex  w-full flex-col h-[250px] lg:flex-row relative`,
            className
          )}
          onClick={onClick}
        >
          <MagicCard
            className="cursor-pointer flex-col items-center justify-center shadow-2xl bg-transparent whitespace-nowrap text-4xl text-white rounded-none border-gray-500/20 "
            gradientColor={"#262626"}
          >
            <img
              src={`/images/${project.image}`}
              alt={project.title}
              className="w-full h-auto object-scale-fit text-sm relative"
            />
             <div className="absolute bottom-0 z-1 backdrop-blur supports-[backdrop-filter]:bg-transparent/80">
           <CardContent className="p-4">
              <h3 className="text-sm  mb-1 text-white font-popping-font">
                {project.title}
              </h3>
              <p className="text-gray-500 text-sm line-clamp-2">
                {project.description}
              </p>
            </CardContent>
           </div> 
          </MagicCard>
        </div>
        <div className=" bg-gray-500/20 h-[1px] w-14"></div>
      </div>
      <div className=" bg-gray-500/20 w-[1px] h-full"></div>
    </div>
  );
}

function ProjectModal({
  project,
  isOpen,
  onClose,
}: {
  project: Project;
  isOpen: boolean;
  onClose: () => void;
}) {

  return (
    <Dialog open={isOpen} onOpenChange={onClose} key={project.title}>
      <DialogContent className="sm:max-w-[425px] bg-transparent backdrop-blur custom-border rounded-none">
        <DialogHeader>
          <DialogTitle>{project.title}</DialogTitle>
        </DialogHeader>
        <img
          src={`/images/${project.image}`}
          alt={project.title}
          className="w-full h-48 object-cover custom-border mb-4"
        />
        <DialogDescription>
          <p className="text-gray-300 mb-4">{project.description}</p>
          <div className="mb-4">
            <h4 className="text-lg font-semibold mb-2 text-gray-500">
              Tech Stack:
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <Badge
                  key={tech}
                  variant="outline"
                  className="rounded-none custom-border text-gray-500 "
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
          <div className="flex space-x-4">
            { project.sourceUrl.length > 0 && <Button
              variant="outline"
              asChild
              className="border-gray-500/20 rounded-none"

            >
              <a
                href={project.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500"
              >
                <Github className="mr-2 h-4 w-4" /> Source Code
              </a>
            </Button> }
            <Button
              asChild
              className="rounded-none bg-transparent custom-border hover:bg-gray-500/20"
            >
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="mr-2 h-4 w-4" /> Website
              </a>
            </Button>
          </div>
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
}

export default function ProductComponent() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section className="relative  w-full  overflow-hidden  bg-background">
      <div className="">
        <SectionHeader title="Project" />
        <h1 className="custom-header ml-4">Latest Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              onClick={() => setSelectedProject(project)}
              className={`md:&[nth-child(even)]:border`}
            />
          ))}
        </div>
      </div>
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
