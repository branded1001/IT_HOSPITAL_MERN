const jwt = require('jsonwebtoken')
require('dotenv').config
const jwt_secret = process.env.SECRET_KEY

module.exports = function (req, res, next) {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
        return res.status(401).json({ message: 'no token' })
    }
    try {
        // const decode = jwt.verify(token,jwt_secret)
        // req.user=decode
        // next()
        const decoded = jwt.verify(token, jwt_secret);
        req.userId = decoded.id;
        next();

    } catch (error) {
        res.status(401).json({ message: "Token invalid" })
    }
}