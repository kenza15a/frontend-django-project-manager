"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

export default function UserDetailPage() {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log("TOKEN:", token); //  debug
    console.log("Fetching user:", id);

    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/users/${id}/`, {
      headers: {
        Authorization: `Token ${token}`,
      },
    })
      .then((res) => {
        console.log("Status:", res.status);
        return res.json();
      })
      .then((data) => {
        console.log("User data:", data);
        setUser(data);
      });
  }, [id]);

  if (!user) return <p className="p-6">Chargement...</p>;

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-2">{user.username}</h1>
      <p className="text-gray-700">Email : {user.email}</p>
    </div>
  );
}
