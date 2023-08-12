require("dotenv").config();
const app = require("./app.js");
PORT = process.env.PORT || 8087;

app.listen(PORT, (req, res)=>{
    console.log("App listening at PORT =",PORT);
});