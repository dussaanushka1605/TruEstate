import { useState, useEffect } from "react";
import { fetchSales } from "./services/api";
import SearchBar from "./components/SearchBar";
import FilterPanel from "./components/FilterPanel";
import SortDropdown from "./components/SortDropdown";
import SalesTable from "./components/SalesTable";
import Pagination from "./components/Pagination";

function App() {
  const [sales, setSales] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    loadData();
  }, [page, filters, sort, search]);

  const loadData = async () => {
    const params = {
      page,
      search,
      sort,
      ...filters,
    };

    const result = await fetchSales(params);
    setSales(result.data);
    setTotalPages(result.totalPages);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Card */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl shadow-2xl p-6 md:p-8 mb-8 
                        text-white">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <div className="bg-white/20 rounded-full p-3">
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center">
              Retail Sales Management System
            </h1>
          </div>
        </div>

        {/* Main Content Card */}
        <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-6 md:p-10 border border-gray-200">
          {/* Search Bar */}
          <SearchBar search={search} setSearch={setSearch} />

          {/* Sort and Filters Section */}
          <div className="mb-6">
            <SortDropdown setSort={setSort} />
          </div>

          {/* Filters */}
          <FilterPanel setFilters={setFilters} />

          {/* Table */}
          <div className="mt-8">
            <SalesTable data={sales} />
          </div>

          {/* Pagination */}
          <Pagination page={page} totalPages={totalPages} setPage={setPage} />
        </div>
      </div>
    </div>
  );
}

export default App;
