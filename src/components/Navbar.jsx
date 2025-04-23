"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "../../contexts/AuthContext";
import Button from "../components/ui/Button";

const Navbar = () => {
  const { user, logout } = useAuth();
  const router = useRouter();

  // ✅ Fonction de redirection vers /login
  const handleLoginRedirect = () => {
    router.push("/login");
  };

  return (
    <nav className="bg-gray-900 text-white p-4 flex justify-between">
      <div className="space-x-4">
        <Link href="/">Home</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/users">Users</Link>

        {user?.isAdmin && (
          <>
            <a
              href="http://localhost:8000/admin/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Admin Page
            </a>

            <a
              href="http://localhost:8000/swagger/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Docs
            </a>
          </>
        )}
      </div>

      <div>
        {user ? (
          <Button onClick={logout} variant="white">
            Logout
          </Button>
        ) : (
          <Button onClick={handleLoginRedirect} variant="black">
            Login
          </Button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
