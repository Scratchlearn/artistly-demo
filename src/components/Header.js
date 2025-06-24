// 'use client';
// import Link from "next/link";

// export default function Header() {
//   return (
//     <header className="p-4 flex justify-between items-center border-b">
//       <h1 className="text-xl font-bold">Artistly</h1>
//       <nav className="space-x-4">
//         <Link href="/">Home</Link>
//         <Link href="/artists">Artists</Link>
//       </nav>
//     </header>
//   );
// }
'use client';

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

export default function Header() {
  const [isManager, setIsManager] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const role = localStorage.getItem("userRole");
    setIsManager(role === "manager");
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("userRole");
    setIsManager(false);
    router.push("/login");
  };

  const linkClass = (path) =>
    `text-sm font-medium ${pathname === path ? "text-blue-600 font-semibold" : "text-gray-700 hover:text-blue-600"}`;

  return (
    <header className="bg-white shadow p-4 flex justify-between items-center">
      <Link href="/" className="text-xl font-bold text-blue-600">
        Artistly
      </Link>

      <nav className="space-x-4 flex items-center">
        <Link href="/" className={linkClass("/")}>Home</Link>
        <Link href="/artists" className={linkClass("/artists")}>Artists</Link>
        <Link href="/onboard" className={linkClass("/onboard")}>Onboard</Link>

        {isManager && (
          <Link href="/manager" className={linkClass("/manager")}>Manager</Link>
        )}

        {!isManager ? (
          <Link href="/login" className="text-sm text-blue-600 hover:underline">Login</Link>
        ) : (
          <button
            onClick={handleLogout}
            className="text-sm text-red-600 hover:underline"
          >
            Logout
          </button>
        )}
      </nav>
    </header>
  );
}
