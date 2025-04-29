"use client";

import TechstackIcon from "@/components/icons/techstacks/TechstackIcon";
import { projectData, ProjectData } from "@/data/project";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";

type Props = {
  projectId: string;
};

export default function ProjectDetail({ projectId }: Props) {
  const [project, setProject] = useState<ProjectData | null>(null);

  useEffect(() => {
    if (projectId) {
      const selectedProject =
        projectData.filter((x) => x.slug === projectId)[0] ?? null;

      if (selectedProject) {
        setProject(selectedProject);
      } else {
        redirect("/projects");
      }
    }
  }, [projectId]);

  return (
    <>
      {project && (
        <div className="flex flex-col gap-8 grow">
          {/* project top side */}
          <div className="flex flex-col md:flex-row gap-8">
            {/* project image */}
            <div className="h-[200px] md:h-[250px] aspect-3/2 bg-gray-500" />
            <div className="flex flex-col space-y-2 md:space-y-4">
              <div className="text-2xl md:text-5xl font-semibold">
                {project.name}
              </div>
              <div className="text-[var(--gray-accent)]">
                {project.introduction}
              </div>
              <div className="flex flex-wrap gap-1 md:gap-2">
                {project.tags.map((tag, index) => (
                  <div
                    className="border border-[var(--gray-accent)] text-[var(--gray-accent)] rounded-xl text-xs md:text-sm px-2 py-1"
                    key={index}
                  >
                    {tag}
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* project technologies */}
          <div className="flex flex-col gap-2 md:gap-4 items-start md:items-center">
            <div className="text-xl md:text-3xl font-semibold text-center">
              Technology and Tools
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-[100%] md:w-[80%]">
              <div className="flex flex-col gap-2">
                <div className="text-lg md:text-xl font-semibold text-left md:text-center">
                  Language
                </div>
                <div className="flex flex-wrap gap-8 justify-left md:justify-center">
                  {project.languages.length > 0 ? (
                    project.languages.map((lg, index) => (
                      <div key={index}>
                        <TechstackIcon
                          tech={lg}
                          className="h-[24px] md:h-[36px]"
                          label
                        />
                      </div>
                    ))
                  ) : (
                    <div className="text-[var(--gray-accent)] text-left md:text-center col-span-5">
                      None
                    </div>
                  )}
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="text-lg md:text-xl font-semibold text-left md:text-center">
                  Frameworks
                </div>
                <div className="flex flex-wrap gap-8 justify-left md:justify-center">
                  {project.frameworks.length > 0 ? (
                    project.frameworks.map((lg, index) => (
                      <div key={index}>
                        <TechstackIcon
                          tech={lg}
                          className="h-[24px] md:h-[36px]"
                          label
                        />
                      </div>
                    ))
                  ) : (
                    <div className="text-[var(--gray-accent)] text-left md:text-center col-span-5">
                      None
                    </div>
                  )}
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="text-lg md:text-xl font-semibold text-left md:text-center">
                  Tools
                </div>
                <div className="flex flex-wrap gap-8 justify-left md:justify-center">
                  {project.tools.length > 0 ? (
                    project.tools.map((lg, index) => (
                      <div key={index}>
                        <TechstackIcon
                          tech={lg}
                          className="h-[24px] md:h-[36px]"
                          label
                        />
                      </div>
                    ))
                  ) : (
                    <div className="text-[var(--gray-accent)] text-left md:text-center col-span-5">
                      None
                    </div>
                  )}
                </div>
              </div>
            </div>
            {/* Project Description */}
            <div className="flex flex-col space-y-2">
              <div className="text-xl md:text-3xl font-semibold">
                Description
              </div>
              <div className="text-[var(--gray-accent)] text-xs md:text-base">
                {project.description}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
