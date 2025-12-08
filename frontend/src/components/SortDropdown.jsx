export default function SortDropdown({ setSort }) {
  return (
    <div className="flex justify-end mb-6">
      <div className="relative w-full sm:w-auto">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none z-10">
          <svg
            className="h-5 w-5 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12"
            />
          </svg>
        </div>
        <select
          className="form-select w-full sm:w-64 pl-16 pr-10 py-3 bg-white border-2 border-gray-200 
                     rounded-lg shadow-md hover:bg-gray-50 hover:border-gray-300 
                     focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20
                     transition-all duration-200 font-semibold text-gray-700 cursor-pointer
                     appearance-none"
          onChange={(e) => setSort(e.target.value)}
        >
          <option value="">Sort By</option>
          <option value="date">Date (Newest First)</option>
          <option value="quantity">Quantity (High to Low)</option>
          <option value="name">Customer Name (A-Z)</option>
        </select>
        <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none z-10">
          <svg
            className="h-5 w-5 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
