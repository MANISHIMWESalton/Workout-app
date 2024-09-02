const User = require("../../model/userModel");
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")


const register = async (req, res) => {
    const { userName, email, password } = req.body;
    try {
        if (!userName || !email || !password) {
            throw new Error("Please fill all input")
        }
        const userExists = await User.findOne({ email })
        if (userExists) res.json({ message: "User arleady exists" })
        const newUser = await User.create({ userName, email, password });
        if (!newUser) {
            return res.json({ message: "User not found" })
        }
        res.status(201).json({ message: "New user created successfully!", data: { newUser } })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}
const maxAge = 2 * 24 * 60 * 60;
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.SECRET_KEY, { expiresIn: maxAge })
}
const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email })
        if (!user) {
            return res.status(401).json({ message: "User not found" });
        }
        const checkedPassword = await bcrypt.compare(password, user.password)
        if (!checkedPassword) {
            return res.json({ message: "Please provide a valid credentials" })
        }
        const token = generateToken(user._id);
        res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge * 1000 }
        )
        res.status(200).json({ message: "token genereted successfully", data: { user: user._id, token } })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

module.exports = {
    register,
    login
}