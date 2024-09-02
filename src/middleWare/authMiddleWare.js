const jwt = require("jsonwebtoken");
const User = require("../model/userModel")

const authMiddleWare = async (req, res, next) => {
    const token = req.cookies.jwt;

    if (!token) {
        return res.status(401).json({ message: "No token provided" })
    }

    try {
        const decodedToken = jwt.verify(token, process.env.SECRET_KEY)
        req.user = decodedToken;
        const user = await User.findById(decodedToken.id)
        if (!user) {
            return res.status(401).json({ message: "User not found" })
        }
        req.user = user;
        next()
    } catch (error) {
        res.status(400).json({ message: "Invalid token." });
    }
}
module.exports = authMiddleWare;
