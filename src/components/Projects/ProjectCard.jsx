"use client";

import { useAuth } from "../../../contexts/AuthContext";
import Link from "next/link";

export default function ProjectCard({ project }) {
  const { user } = useAuth();

  return (
    <div className="border p-4 rounded shadow hover:shadow-md transition-all">
      <h2 className="text-xl font-bold">{project.title}</h2>
      {user && <p className="text-gray-600 mb-2">{project.description}</p>}
      <p className="text-sm italic">Propriétaire : {project.owner.username}</p>
      <Link
        href={`/projects/${project.id}`}
        className="text-blue-600 hover:underline"
      >
        Voir les détails →
      </Link>
    </div>
  );
}
