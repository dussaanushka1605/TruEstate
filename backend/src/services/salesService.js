import mongoose from "../db/mongoose.js";


let salesData = [];

const loadSalesFromDb = async () => {
  const db = mongoose.connection.db;
  const collection = db.collection("sales");
  const docs = await collection.find({}).toArray();
  salesData = docs;
};


export const filterAndSearchSales = async (query) => {
  if (salesData.length === 0 && mongoose.connection.readyState === 1) {
    await loadSalesFromDb();
  }
  let data = [...salesData];

  /* ----------------------------------
     1. SEARCH (Customer Name / Phone)
     ---------------------------------- */
  if (query.search) {
    const s = query.search.toLowerCase();
    data = data.filter(
      (item) =>
        (item["Customer Name"] &&
          item["Customer Name"].toLowerCase().includes(s)) ||
        (item["Phone Number"] &&
          item["Phone Number"].toLowerCase().includes(s))
    );
  }

  /* ----------------------------------
     2. FILTERS
     ---------------------------------- */

  // Customer Region (multi-select)
  if (query.region) {
    const regions = query.region.split(",");
    data = data.filter((item) => regions.includes(item["Customer Region"]));
  }

  // Gender (multi-select)
  if (query.gender) {
    const genders = query.gender.split(",");
    data = data.filter((item) => genders.includes(item["Gender"]));
  }

  // Age Range
  if (query.ageMin || query.ageMax) {
    const min = Number(query.ageMin) || 0;
    const max = Number(query.ageMax) || 200;

    data = data.filter((item) => {
      const age = Number(item["Age"]);
      return age >= min && age <= max;
    });
  }

  // Product Category
  if (query.category) {
    const categories = query.category.split(",");
    data = data.filter((item) =>
      categories.includes(item["Product Category"])
    );
  }

  // Tags (multi-select)
  if (query.tags) {
    const tags = query.tags.split(",");
    data = data.filter((item) => {
      if (!item["Tags"]) return false;
      const rowTags = item["Tags"].split(",").map((t) => t.trim());
      return tags.some((tag) => rowTags.includes(tag));
    });
  }

  // Payment Method
  if (query.payment) {
    const payments = query.payment.split(",");
    data = data.filter((item) =>
      payments.includes(item["Payment Method"])
    );
  }

  // Date Range Filter
  if (query.startDate || query.endDate) {
    const start = new Date(query.startDate || "2000-01-01");
    const end = new Date(query.endDate || "2100-01-01");

    data = data.filter((item) => {
      const date = new Date(item["Date"]);
      return date >= start && date <= end;
    });
  }

  /* ----------------------------------
     3. SORTING
     ---------------------------------- */

  if (query.sort) {
    // Sort by latest date first
    if (query.sort === "date") {
      data.sort(
        (a, b) => new Date(b["Date"]) - new Date(a["Date"])
      );
    }

    // Sort by quantity (high → low)
    if (query.sort === "quantity") {
      data.sort(
        (a, b) => Number(b["Quantity"]) - Number(a["Quantity"])
      );
    }

    // Sort by Customer Name (A → Z)
    if (query.sort === "name") {
      data.sort((a, b) =>
        (a["Customer Name"] || "").localeCompare(
          b["Customer Name"] || ""
        )
      );
    }
  }

  /* ----------------------------------
     4. PAGINATION
     ---------------------------------- */

  const page = Number(query.page) || 1;
  const limit = 10;
  const startIndex = (page - 1) * limit;
  const paginatedData = data.slice(startIndex, startIndex + limit);

  return {
    page,
    totalPages: Math.ceil(data.length / limit),
    totalItems: data.length,
    data: paginatedData,
  };
};
