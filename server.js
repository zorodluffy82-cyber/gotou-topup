require("dotenv").config();

const express = require("express");
const helmet = require("helmet");

const app = express();

app.use(helmet());
app.use(express.json({ limit: "10kb" }));

app.get("/", (req, res) => {
  res.json({
    status: "success",
    message: "GOTOU TOP UP Backend is running!"
  });
});

app.get("/health", (req, res) => {
  res.json({ status: "OK" });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`GOTOU Server running on port ${PORT}`);
});
