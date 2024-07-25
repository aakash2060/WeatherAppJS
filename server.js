require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname, "public")));

app.get("/api/config", (req, res) => {
  res.json({
    apiKey: process.env.API_KEY,
    apiUrl: process.env.API_URL,
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running on PORT: ${PORT}`));
