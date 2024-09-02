const {Router} = require("express");
const authController = require("../module/controller/authControlleries");
const authRoute = Router();
authRoute.post("/register",authController.register)
authRoute.post("/login",authController.login)

module.exports = authRoute