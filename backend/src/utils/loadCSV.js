import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// CSV parser
function parseCSV(text) {
  const lines = text.split("\n").filter((l) => l.trim() !== "");
  const headers = lines.shift().split(",");

  return lines.map((line) => {
    const cols = line.split(",");
    const obj = {};
    headers.forEach((h, i) => (obj[h.trim()] = (cols[i] || "").trim()));
    return obj;
  });
}

export async function loadCSV() {
  // 1️⃣ FIRST — Try CSV_URL from .env
  if (process.env.CSV_URL) {
    console.log("📡 Loading CSV from CSV_URL:", process.env.CSV_URL);

    try {
      const res = await fetch(process.env.CSV_URL);
      const text = await res.text();
      return parseCSV(text);
    } catch (err) {
      console.log("❌ CSV_URL failed:", err.message);
    }
  }

  // 2️⃣ SECOND — Try local fallback
  const csvPath = path.join(__dirname, "..", "sales.csv");
  console.log("📂 Fallback local CSV:", csvPath);

  try {
    const text = fs.readFileSync(csvPath, "utf8");  // ✔ FIXED
    return parseCSV(text);
  } catch (err) {
    console.error("❌ No CSV found:", err.message);
    throw err;
  }
}
