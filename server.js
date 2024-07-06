const express = require("express");
const app = express();
const PORT = 8000;
const generativeAIRoutes = require("./src/routes/generativeAIRoutes");
var bodyParser = require("body-parser");
var cors = require("cors");
require("dotenv").config();
// console.log(process.env.GEMINI_API_KEY); // remove this after you've confirmed it is working

app.use(cors());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.json({ message: "Welcome to the backend" });
});
app.use("/api", generativeAIRoutes);
app.listen(PORT, () => console.log(`Connected to ${PORT}`));
