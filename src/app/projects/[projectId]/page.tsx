import { getDefaultPageStyle } from "@/config/stylingConfig";
import { projectData } from "@/data/project";
import Link from "next/link";
import { redirect } from "next/navigation";
import { use } from "react";
import ProjectDetail from "./components/ProjectDetail";

type Props = {
  params: Promise<{ projectId: string }>;
};

export default function ProjectDetailPage({ params }: Props) {
  const { projectId } = use(params);

  return (
    <div className={`${getDefaultPageStyle()} flex flex-col min-h-[88vh]`}>
      <Link
        className="text-xl font-semibold hover:text-[var(--gray-accent)] transition-colors duration-200"
        href={"/projects"}
      >
        &lt; Back
      </Link>
      {/* page container */}
      {projectId && <ProjectDetail projectId={projectId} />}
    </div>
  );
}

export const generateStaticParams = () => {
  // Generate static paths from the project slugs
  return projectData.map((project) => ({
    projectId: project.slug, // This corresponds to the [projectId] dynamic segment
  }));
};
