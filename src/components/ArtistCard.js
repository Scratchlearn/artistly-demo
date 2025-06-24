export default function ArtistCard({ artist }) {
  return (
    <div className="border p-4 rounded shadow hover:shadow-md bg-white">
      <h3 className="text-xl font-bold">{artist.name}</h3>
      <p className="text-gray-600">Category: {artist.category}</p>
      <p className="text-gray-600">Location: {artist.location}</p>
      <p className="text-gray-600">Price: {artist.priceRange}</p>
      <button className="mt-2 px-4 py-2 bg-blue-600 text-white rounded">Ask for Quote</button>
    </div>
  );
}
