'use client';

export default function FilterBlock({ filter, setFilter }) {
  return (
    <div className="mb-6 space-y-4 md:flex md:space-y-0 md:space-x-4 items-center">
      <select
        value={filter.category}
        onChange={(e) =>
          setFilter((prev) => ({ ...prev, category: e.target.value }))
        }
        className="p-2 border rounded w-full md:w-1/3"
      >
        <option value="">All Categories</option>
        <option value="Singer">Singer</option>
        <option value="Dancer">Dancer</option>
        <option value="DJ">DJ</option>
        <option value="Speaker">Speaker</option>
      </select>

      <input
        type="text"
        placeholder="Location"
        value={filter.location}
        onChange={(e) =>
          setFilter((prev) => ({ ...prev, location: e.target.value }))
        }
        className="p-2 border rounded w-full md:w-1/3"
      />

      <select
        value={filter.price}
        onChange={(e) =>
          setFilter((prev) => ({ ...prev, price: e.target.value }))
        }
        className="p-2 border rounded w-full md:w-1/3"
      >
        <option value="">All Prices</option>
        <option value="₹10k–20k">₹10k–20k</option>
        <option value="₹20k–30k">₹20k–30k</option>
        <option value="₹30k–50k">₹30k–50k</option>
        <option value="₹50k–1L">₹50k–1L</option>
      </select>
    </div>
  );
}
