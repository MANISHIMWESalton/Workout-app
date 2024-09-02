const express = require("express");
const app = express();
const dbConnection = require("../backend/src/config/dbConnect")
require("dotenv").config();
const router = require("./src/router/index")
const cookieParser = require("cookie-parser")
const PORT = process.env.PORT || 9000;
app.use(express.json());
app.use(cookieParser())
app.use("/api", router)
app.listen(PORT, async () => {
    await dbConnection()
    console.log(`Server is running on port :${PORT}`);

})
