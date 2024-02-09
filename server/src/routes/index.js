const express = require("express");
const api = express.Router();
const authRouter = require("./auth.router");

api.use("/auth", authRouter);

module.exports = api;
