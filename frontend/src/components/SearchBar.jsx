export default function SearchBar({ search, setSearch }) {
  return (
    <div className="flex justify-center mb-8">
      <div className="relative w-full max-w-3xl">
        <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none z-10">
          <svg
            className="h-6 w-6 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        <input
          type="text"
          placeholder="Search by customer name or phone..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-14 pr-6 py-5 text-lg border-2 border-gray-200 rounded-xl 
                     shadow-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
                     outline-none bg-white text-gray-800 placeholder-gray-400 
                     transition-all duration-200 hover:border-gray-300 hover:shadow-xl
                     font-medium"
        />
      </div>
    </div>
  );
}
