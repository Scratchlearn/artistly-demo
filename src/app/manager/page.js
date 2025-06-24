// 'use client';
// import Header from "@/components/Header";
// import DashboardTable from "@/components/DashboardTable";
// import artists from "@/data/artists.json"; // or use `submissions.json` if created

// export default function ManagerPage() {
//   return (
//     <main className="p-6">
//       <Header />
//       <h1 className="text-2xl font-bold mb-4">Manager Dashboard</h1>
//       <DashboardTable data={artists} />
//     </main>
//   );
// }
'use client';
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import DashboardTable from "@/components/DashboardTable";
import artists from "@/data/artists.json";

export default function ManagerPage() {
  const router = useRouter();
  const [isAuthorized, setIsAuthorized] = useState(false);

  useEffect(() => {
    const role = localStorage.getItem("userRole");
    if (role === "manager") {
      setIsAuthorized(true);
    } else {
      // Redirect unauthorized users
      router.push("/");
    }
  }, [router]);

  if (!isAuthorized) return null;

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Manager Dashboard</h1>
      <DashboardTable data={artists} />
    </main>
  );
}
