export default function DashboardTable({ data }) {
  return (
    <div className="overflow-x-auto bg-white shadow-md rounded-lg">
      <table className="min-w-full text-left text-sm text-gray-700">
        <thead className="bg-blue-100 text-blue-800 uppercase text-xs">
          <tr>
            <th className="p-3">Name</th>
            <th className="p-3">Category</th>
            <th className="p-3">City</th>
            <th className="p-3">Fee</th>
            <th className="p-3">Action</th>
          </tr>
        </thead>
        <tbody>
          {data.length ? (
            data.map((artist, index) => (
              <tr
                key={`${artist.id}-${index}`}
                className="border-t hover:bg-gray-50 transition"
              >
                <td className="p-3 font-medium">{artist.name}</td>
                <td className="p-3">{artist.category}</td>
                <td className="p-3">{artist.location}</td>
                <td className="p-3">{artist.priceRange}</td>
                <td className="p-3">
                  <button className="text-blue-600 hover:underline">View</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="p-6 text-center text-gray-500">
                No submissions yet
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
