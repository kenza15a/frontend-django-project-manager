"use client";

import Link from "next/link";
import { useAuth } from "contexts/AuthContext";
import Button from "../../components/ui/Button";

const HomePage = () => {
  const { user } = useAuth();

  return (
    <div className="max-w-4xl mx-auto text-center py-16 px-4">
      <h1 className="text-4xl font-bold mb-4">
        Bienvenue dans Project Manager
      </h1>

      <p className="text-lg text-gray-600 mb-8">
        {user
          ? `Bonjour ${user.username}, explorez vos projets ou découvrez les utilisateurs.`
          : "Connectez-vous pour accéder à plus de details sur les  projets et aux utilisateurs."}
      </p>

      <div className="flex justify-center flex-wrap gap-4">
        <Link href="/projects">
          <Button variant="black">Voir les Projets</Button>
        </Link>
        <Link href="/users">
          <Button variant="white">Voir les Utilisateurs</Button>
        </Link>
        {user?.isAdmin && (
          <>
            <a
              href="http://localhost:8000/admin/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="black">Django Admin</Button>
            </a>
            <a
              href="http://localhost:8000/swagger/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="white">Docs API</Button>
            </a>
          </>
        )}
        {!user && (
          <Link href="/login">
            <Button variant="black">Connexion</Button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default HomePage;
