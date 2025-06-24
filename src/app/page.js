'use client';

import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CategoryCard from "@/components/CategoryCard";
import categories from "@/data/categories.json";

export default function HomePage() {
  return (
    <>
      {/* Global Site Header */}
      <Header />

      {/* Hero Section */}
      <HeroSection
        title="Find the Perfect Artist for Your Event"
        subtitle="Connect with singers, DJs, dancers, speakers, and more."
      />

      {/* Category Section */}
      <main className="px-6 py-10">
        <h2 className="text-2xl font-bold mb-6 text-center">Explore Categories</h2>
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <CategoryCard
              key={cat.name}
              name={cat.name}
              image={cat.image || "/images/placeholder.jpg"}
            />
          ))}
        </section>
      </main>
    </>
  );
}

