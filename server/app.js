const express = require("express");
const connectDatabase = require("./config/databaseConfig.js");
const userRoute = require("./routes/user.route.js");
const app = express();

connectDatabase();
app.use(express.json());

app.use("/", userRoute);

module.exports = app;
