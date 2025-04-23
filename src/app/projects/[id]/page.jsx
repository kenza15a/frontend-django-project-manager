import { notFound } from "next/navigation";

async function getProject(id) {
  const token =
    typeof window !== "undefined" ? localStorage.getItem("token") : null;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/projects/${id}`,
    {
      headers: token ? { Authorization: `Token ${token}` } : {},
    }
  );
  if (!res.ok) return null;
  return res.json();
}

export default async function ProjectDetail({ params }) {
  const project = await getProject(params.id);
  if (!project) return notFound();

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">{project.title}</h1>
      <p className=" text-2xl text-gray-700 mt-2">{project.description}</p>
      <p className="text-lg italic mt-4 ">Propriétaire : {project.owner.username}</p>
      <p className="text-lg italic mt-4">Email : {project.owner.email}</p>
    </div>
  );
}
