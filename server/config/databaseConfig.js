const mongoose = require("mongoose");
const MONGODB_URL = process.env.MONGODB_URL || "mongodb://127.0.0.1:27017/user";
const databaseConnect = async()=>{
    try{const conn = await mongoose.connect(MONGODB_URL);
    console.log("MongoDB connected with server:",conn.connection.host);
    } catch(err) {
        console.log("Error while connecting to DB", err.message);
    }
    
}

module.exports = databaseConnect;