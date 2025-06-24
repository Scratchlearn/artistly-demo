'use client';
import Link from "next/link";

export default function Header() {
  return (
    <header className="p-4 flex justify-between items-center border-b">
      <h1 className="text-xl font-bold">Artistly</h1>
      <nav className="space-x-4">
        <Link href="/">Home</Link>
        <Link href="/artists">Artists</Link>
      </nav>
    </header>
  );
}
