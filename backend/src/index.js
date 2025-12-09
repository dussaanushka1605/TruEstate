import dotenv from "dotenv";
dotenv.config();



import express from "express";
import cors from "cors";
import routes from "./routes/salesRoutes.js";
import { connectMongo } from "./db/mongoose.js";

const app = express();
app.use(cors());
app.use(express.json());

// main route
app.use("/api/sales", routes);

const PORT = process.env.PORT || 5000;

const start = async () => {
  try {
    if (!process.env.MONGO_URI) {
      console.error("MONGO_URI environment variable is required");
      process.exit(1);
    }
    await connectMongo();
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

start();
