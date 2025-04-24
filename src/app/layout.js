import "./globals.css";
import { Inter } from "next/font/google";
import ClientLayout from "./ClientLayout"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Project Manager",
  description: "Frontend avec Django backend",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
