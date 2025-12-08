export default function Pagination({ page, totalPages, setPage }) {
  return (
    <div className="flex items-center justify-center gap-4 mt-8 flex-wrap">
      <button
        disabled={page === 1}
        onClick={() => setPage(page - 1)}
        className="px-6 py-3 rounded-lg bg-white border-2 border-gray-300 text-gray-700 
                   font-semibold hover:bg-gray-50 hover:border-blue-500 hover:text-blue-600
                   disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-white 
                   disabled:hover:border-gray-300 disabled:hover:text-gray-700
                   transition-all duration-200 shadow-md hover:shadow-lg 
                   flex items-center gap-2"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
        Previous
      </button>

      <div className="px-6 py-3 rounded-lg bg-blue-600 text-white font-bold text-base 
                      shadow-md min-w-[140px] text-center">
        Page {page} of {totalPages}
      </div>

      <button
        disabled={page === totalPages}
        onClick={() => setPage(page + 1)}
        className="px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold 
                   hover:bg-blue-700 disabled:opacity-40 disabled:cursor-not-allowed 
                   disabled:hover:bg-blue-600
                   transition-all duration-200 shadow-md hover:shadow-lg 
                   flex items-center gap-2"
      >
        Next
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>
  );
}
