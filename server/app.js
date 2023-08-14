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
    origin: "http://127.0.0.1:5501",
    credentials: true
}))

app.use("/", userRoute);

module.exports = app;
