// src/components/Navbar.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function Navbar() {
  return (
    <nav className="bg-black bg-opacity-60 text-white p-4 rounded-b-xl">
      <div className="container mx-auto flex justify-between">
        <h1 className="text-xl font-bold">SocialApp</h1>
      </div>
    </nav>
  );
}
