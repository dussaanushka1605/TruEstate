import { useState } from "react";

export default function FilterPanel({ setFilters }) {
  const [region, setRegion] = useState("");
  const [gender, setGender] = useState("");
  const [ageMin, setAgeMin] = useState("");
  const [ageMax, setAgeMax] = useState("");
  const [category, setCategory] = useState("");
  const [payment, setPayment] = useState("");
  const [tags, setTags] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const applyFilters = () => {
    setFilters({
      region,
      gender,
      ageMin,
      ageMax,
      category,
      payment,
      tags,
      startDate,
      endDate,
    });
  };

  return (
    <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-gray-200 mb-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
        <div className="bg-blue-100 rounded-lg p-2">
          <svg
            className="w-6 h-6 text-blue-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
            />
          </svg>
        </div>
        Filters
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-6">
        <select
          className="form-select bg-white hover:bg-gray-50 transition-all duration-200 
                     border-gray-300 focus:border-blue-500"
          onChange={(e) => setRegion(e.target.value)}
        >
          <option value="">Region</option>
          <option>North</option>
          <option>South</option>
          <option>East</option>
          <option>West</option>
          <option>Central</option>
        </select>

        <select
          className="form-select bg-white hover:bg-gray-50 transition-all duration-200 
                     border-gray-300 focus:border-blue-500"
          onChange={(e) => setGender(e.target.value)}
        >
          <option value="">Gender</option>
          <option>Male</option>
          <option>Female</option>
        </select>

        <input
          type="number"
          placeholder="Min Age"
          className="form-input bg-white hover:bg-gray-50 transition-all duration-200 
                     border-gray-300 focus:border-blue-500"
          onChange={(e) => setAgeMin(e.target.value)}
        />

        <input
          type="number"
          placeholder="Max Age"
          className="form-input bg-white hover:bg-gray-50 transition-all duration-200 
                     border-gray-300 focus:border-blue-500"
          onChange={(e) => setAgeMax(e.target.value)}
        />

        <select
          className="form-select bg-white hover:bg-gray-50 transition-all duration-200 
                     border-gray-300 focus:border-blue-500"
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">Category</option>
          <option>Beauty</option>
          <option>Electronics</option>
          <option>Clothing</option>
          <option>Home</option>
        </select>

        <select
          className="form-select bg-white hover:bg-gray-50 transition-all duration-200 
                     border-gray-300 focus:border-blue-500"
          onChange={(e) => setPayment(e.target.value)}
        >
          <option value="">Payment Method</option>
          <option>Cash</option>
          <option>UPI</option>
          <option>Credit Card</option>
        </select>

        <input
          type="text"
          placeholder="Tags (comma separated)"
          className="form-input bg-white hover:bg-gray-50 transition-all duration-200 
                     border-gray-300 focus:border-blue-500"
          onChange={(e) => setTags(e.target.value)}
        />

        <input
          type="date"
          placeholder="Start Date"
          className="form-input bg-white hover:bg-gray-50 transition-all duration-200 
                     border-gray-300 focus:border-blue-500"
          onChange={(e) => setStartDate(e.target.value)}
        />

        <input
          type="date"
          placeholder="End Date"
          className="form-input bg-white hover:bg-gray-50 transition-all duration-200 
                     border-gray-300 focus:border-blue-500"
          onChange={(e) => setEndDate(e.target.value)}
        />
      </div>

      <button
        onClick={applyFilters}
        className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 rounded-xl 
                   shadow-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200 
                   font-bold text-lg transform hover:scale-[1.01] active:scale-[0.99] 
                   flex items-center justify-center gap-2 hover:shadow-xl"
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
            d="M5 13l4 4L19 7"
          />
        </svg>
        Apply Filters
      </button>
    </div>
  );
}
