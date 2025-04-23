"use client";

import { useEffect, useState } from "react";
import UserCard from "@/components/userCard";

export default function UsersPage() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const token = localStorage.getItem("token");
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/users/`, {
        headers: token ? { Authorization: `Token ${token}` } : {},
      });

      const data = await res.json();
      console.log("users", data);

      // gestion pagination
      const userList = data.results ? data.results : data;
      setUsers(userList);
    };

    fetchUsers();
  }, []);

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold">Liste des utilisateurs</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}
