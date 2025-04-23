"use client";

import Link from "next/link";
import { useAuth } from "../../contexts/AuthContext";

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <nav className="bg-gray-900 text-white p-4 flex justify-between">
      <div className="space-x-4">
        <Link href="/projects">Projects</Link>
        <Link href="/users">Users</Link>
        {user?.isAdmin && (
          <>
            <Link href="/admin">Admin Page</Link>
            <Link href="/docs">Docs</Link>
          </>
        )}
      </div>
      <div>
        {user ? (
          <button onClick={logout} className="hover:underline">
            Logout
          </button>
        ) : (
          <Link href="/login" className="hover:underline">
            Login
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
