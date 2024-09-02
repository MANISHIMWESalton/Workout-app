const { Router } = require("express");
const router = Router();
const workoutRoute = require("./workoutRouters")
const authRouter = require("./authRouters")
const authMiddleWare = require("../middleWare/authMiddleWare")
router.use("/auth", authRouter)
router.use("/workout", authMiddleWare, workoutRoute);
module.exports = router 