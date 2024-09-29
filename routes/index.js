const { Routes } = require('./authRoutes');

const { Router } = require("express");

const indexRouter = Router();

indexRouter.use("/", Routes);

module.exports = { indexRouter };
