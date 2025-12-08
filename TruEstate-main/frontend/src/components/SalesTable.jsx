export default function SalesTable({ data }) {
  return (
    <div className="overflow-x-auto rounded-xl shadow-lg border border-gray-200 bg-white">
      <table className="min-w-full bg-white border-collapse">

        {/* Table Header */}
        <thead className="bg-gray-100">
          <tr>
            {[
              "Date",
              "Customer",
              "Region",
              "Product",
              "Category",
              "Qty",
              "Final Amount",
            ].map((heading) => (
              <th
                key={heading}
                className="px-6 py-4 text-left font-bold text-sm uppercase tracking-wider 
                           text-gray-700 border-b-2 border-gray-200"
              >
                {heading}
              </th>
            ))}
          </tr>
        </thead>

        {/* Table Body */}
        <tbody>
          {data.length === 0 ? (
            <tr>
              <td
                colSpan={7}
                className="px-6 py-16 text-center text-gray-500 text-lg font-medium"
              >
                No sales data available
              </td>
            </tr>
          ) : (
            data.map((row, index) => (
              <tr
                key={index}
                className={`border-b border-gray-100 transition-all duration-200 ${
                  index % 2 === 0
                    ? "bg-white hover:bg-blue-50"
                    : "bg-gray-50 hover:bg-blue-50"
                }`}
              >
                <td className="px-6 py-4 text-gray-700 font-medium">
                  {row["Date"]}
                </td>
                <td className="px-6 py-4 text-gray-800 font-semibold">
                  {row["Customer Name"]}
                </td>
                <td className="px-6 py-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs 
                                   font-semibold bg-blue-100 text-blue-800">
                    {row["Customer Region"]}
                  </span>
                </td>
                <td className="px-6 py-4 text-gray-700 font-medium">
                  {row["Product Name"]}
                </td>
                <td className="px-6 py-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs 
                                   font-semibold bg-purple-100 text-purple-800">
                    {row["Product Category"]}
                  </span>
                </td>
                <td className="px-6 py-4 text-gray-700 font-semibold text-center">
                  {row["Quantity"]}
                </td>
                <td className="px-6 py-4 font-bold text-green-700 text-lg">
                  ₹ {parseFloat(row["Final Amount"]).toLocaleString("en-IN")}
                </td>
              </tr>
            ))
          )}
        </tbody>

      </table>
    </div>
  );
}
