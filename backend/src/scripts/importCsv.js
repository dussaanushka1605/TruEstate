import dotenv from "dotenv";
dotenv.config();

import fs from "fs";
import path from "path";
import csv from "csv-parser";
import mongoose from "mongoose";

const uri = process.env.MONGO_URI;

const run = async () => {
  try {
    if (!uri) {
      console.error("MONGO_URI environment variable is required");
      process.exit(1);
    }
    await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    const results = [];
    const filePath = path.resolve("src", "sales.csv");
    await new Promise((resolve, reject) => {
      fs.createReadStream(filePath)
        .pipe(csv())
        .on("data", (data) => results.push(data))
        .on("end", resolve)
        .on("error", reject);
    });
    const collection = mongoose.connection.db.collection("sales");
    await collection.deleteMany({});
    if (results.length > 0) {
      await collection.insertMany(results);
    }
    await mongoose.connection.close();
    console.log(`Imported ${results.length} records`);
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

run();
