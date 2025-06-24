'use client';

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import ArtistCard from "@/components/ArtistCard";
import FilterBlock from "@/components/FilterBlock";
import { Suspense } from "react";

export default function ArtistsPage() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") || "";

  const [filter, setFilter] = useState({
    category: "",
    location: "",
    price: ""
  });

  const [artists, setArtists] = useState([]);

  // Fetch artists from API on mount
  useEffect(() => {
    fetch("/api/artists")
      .then((res) => res.json())
      .then((data) => setArtists(data))
      .catch((err) => console.error("Error fetching artists:", err));
  }, []);

  // Set category from query param if present
  useEffect(() => {
    if (initialCategory) {
      setFilter((prev) => ({ ...prev, category: initialCategory }));
    }
  }, [initialCategory]);

  const filteredArtists = artists.filter((artist) => {
    const matchCategory =
      !filter.category ||
      artist.category.toLowerCase() === filter.category.toLowerCase();

    const matchLocation =
      !filter.location ||
      artist.location.toLowerCase().includes(filter.location.toLowerCase().trim());

    const matchPrice =
      !filter.price || artist.priceRange === filter.price;

    return matchCategory && matchLocation && matchPrice;
  });

  return (
    <Suspense fallback={<div className="p-6 text-center">Loading artists...</div>}>

      <main className="p-6">
        <h1 className="text-2xl font-bold mb-6">Browse Artists</h1>

        <FilterBlock filter={filter} setFilter={setFilter} />

        {filteredArtists.length === 0 ? (
          <p className="text-gray-500">No artists found matching your filters.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {filteredArtists.map((artist, index) => (
              <ArtistCard key={`${artist.id}-${index}`} artist={artist} />
            ))}
          </div>
        )}
      </main>
    </Suspense>

  );
}
