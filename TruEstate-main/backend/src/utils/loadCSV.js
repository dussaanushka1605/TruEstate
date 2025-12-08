import fs from "fs";
import path from "path";
import csv from "csv-parser";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export function getCSVPath() {
  // CSV is inside backend/sales.csv (same folder structure as repo)
  const csvPath = path.join(__dirname, "..", "sales.csv");

  console.log("Using CSV path:", csvPath);

  return csvPath;
}

export function loadCSV() {
  return new Promise((resolve, reject) => {
    const results = [];
    const csvPath = getCSVPath();

    fs.createReadStream(csvPath)
      .pipe(csv())
      .on("data", (row) => results.push(row))
      .on("end", () => resolve(results))
      .on("error", reject);
  });
}
