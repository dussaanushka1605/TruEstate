import { filterAndSearchSales } from "../services/salesService.js";

export const getSalesData = async (req, res) => {
  try {
    const result = await filterAndSearchSales(req.query);
    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server Error" });
  }
};
