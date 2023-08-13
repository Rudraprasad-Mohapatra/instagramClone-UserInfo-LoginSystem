const express = require("express");
const connectDatabase = require("./config/databaseConfig.js");
const userRoute = require("./routes/user.route.js");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const app = express();

connectDatabase();
app.use(express.json());
app.use(cookieParser());

app.use(cors({
    origin:"http://localhost:5500",
    credentials:true
}))

app.use("/", userRoute);

module.exports = app;
