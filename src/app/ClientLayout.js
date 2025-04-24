'use client';

import { AuthProvider } from "../../contexts/AuthContext";
import Navbar from "../components/Navbar";

export default function ClientLayout({ children }) {
    return (
        <AuthProvider>
            <Navbar />
            <main className="p-4">{children}</main>
        </AuthProvider>
    );
}
