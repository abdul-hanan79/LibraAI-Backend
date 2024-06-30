const express = require("express");
const app = express();
const PORT = 5000;

app.get("/", (req, res) => {
  res.json({ message: "Welcome to the backend" });
});

app.listen(PORT, () => console.log(`Connected to ${PORT}`));
