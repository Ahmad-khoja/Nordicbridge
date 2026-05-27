require("dotenv").config();

const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();

app.use(cors());

const CMS_URL = process.env.CMS_URL;
const PORT = process.env.PORT || 5000;

app.get("/api/articles", async (req, res) => {
  try {
    const response = await axios.get(`${CMS_URL}/api/articles?populate=*`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({
      error: "Failed to fetch articles",
    });
  }
});

app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});