'use client';
import Header from "@/components/Header";
import DashboardTable from "@/components/DashboardTable";
import artists from "@/data/artists.json"; // or use `submissions.json` if created

export default function ManagerPage() {
  return (
    <main className="p-6">
      <Header />
      <h1 className="text-2xl font-bold mb-4">Manager Dashboard</h1>
      <DashboardTable data={artists} />
    </main>
  );
}
