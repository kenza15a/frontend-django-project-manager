"use client";

export default function UserCard({ user }) {
  return (
    <div className="border p-4 rounded shadow hover:shadow-md transition-all">
      <h2 className="text-xl font-bold">{user.username}</h2>
      <p className="text-gray-600">{user.email}</p>
     
    </div>
  );
}
