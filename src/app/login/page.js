'use client';

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const router = useRouter();
  const [role, setRole] = useState("");

  const handleLogin = () => {
    if (role) {
      localStorage.setItem("userRole", role);
      router.push("/"); // redirect to homepage
    } else {
      alert("Please select a role.");
    }
  };

  return (
    <main className="p-6 flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Login</h1>
      <select
        onChange={(e) => setRole(e.target.value)}
        className="border p-2 rounded mb-4"
      >
        <option value="">Select Role</option>
        <option value="viewer">Viewer</option>
        <option value="manager">Manager</option>
      </select>
      <button
        onClick={handleLogin}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Login
      </button>
    </main>
  );
}
