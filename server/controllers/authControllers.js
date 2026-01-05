const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('../models/user')

require('dotenv').config
const jwt_secret = process.env.SECRET_KEY

// ---------------- SIGNUP ----------------
exports.signup = async (req, res) => {
  try {
    const { name, email, password } = req.body

    const alreadyEmail = await User.findOne({ email })
    if (alreadyEmail) {
      return res.status(400).json({ message: "Email already exists" })
    }

    const hashPassword = await bcrypt.hash(password, 10)

    const user = new User({
      name,
      email,
      password: hashPassword
    })

    await user.save()

    return res.status(201).json({ message: "User created successfully" })

  } catch (error) {
    console.error(error)
    return res.status(500).json({ message: "Server error" })
  }
}


// ---------------- LOGIN ----------------
exports.signin = async (req, res) => {
  try {
    const { email, password } = req.body

    const user = await User.findOne({ email })

    if (!email) {
      return res.status(400).json({ message: "Username incorrect" })
    }

    const match = await bcrypt.compare(password, user.password)

    if (!match) {
      return res.status(400).json({ message: "Password incorrect" })
    }

    const token = jwt.sign(
      { id: user._id },
      jwt_secret,
      { expiresIn: "4h" }
    )

    return res.json({ token, user })

  } catch (error) {
    console.error(error)
    return res.status(500).json({ message: "Server error" })
  }
}


exports.dashboard = async (req, res) => {
  try {
    const user = await User.findById(req.userId).select("-password");

    res.json({
      message: "Dashboard data",
      user
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Something went wrong" });
  }
};