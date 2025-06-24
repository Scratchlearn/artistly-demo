
'use client';

import { useRouter } from 'next/navigation';

export default function CategoryCard({ name, image }) {
  const router = useRouter();

  const handleClick = () => {
     name = name.endsWith("s") ? name.slice(0, -1) : name;
    router.push(`/artists?category=${encodeURIComponent(name)}`);
  };

  return (
    <div
      onClick={handleClick}
      className="cursor-pointer rounded shadow hover:shadow-lg transition bg-white p-4"
    >
      <img src={image} alt={name} className="h-40 w-full object-cover rounded mb-2" />
      <h3 className="text-lg font-semibold text-center">{name}</h3>
    </div>
  );
}
