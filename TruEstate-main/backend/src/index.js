import express from "express";
import cors from "cors";
import routes from "./routes/salesRoutes.js";

const app = express();
app.use(cors());
app.use(express.json());

// main route
app.use("/api/sales", routes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
