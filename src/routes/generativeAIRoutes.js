const express = require("express");
const routes = express.Router();
const { doGetResponse } = require("../controller/generativeAIController");

routes.get("/get-response", doGetResponse);

module.exports = routes;
