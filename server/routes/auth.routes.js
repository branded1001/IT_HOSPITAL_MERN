const express = require('express')
const {signin,signup,dashboard} = require('../controllers/auth.Controller')
const auth = require('../middleware/auth.middleware')


const router = express.Router()

router.post('/signup',signup)
router.post('/signin',signin)
router.get("/dashboard", auth, dashboard);

module.exports = router