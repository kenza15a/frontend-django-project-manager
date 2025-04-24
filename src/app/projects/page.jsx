"use client";

import { useEffect, useState } from "react";
import ProjectCard from "../../components/Projects/ProjectCard";

export default function ProjectsPage() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const token = localStorage.getItem("token");
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/projects/`,
        {
          headers: token ? { Authorization: `Token ${token}` } : {},
        }
      );
      const data = await res.json();
      console.log("projects", data);
      setProjects(data.results); // ✅ CORRECTION ICI
    };

    fetchProjects();
  }, []);

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold">Liste des projets</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
