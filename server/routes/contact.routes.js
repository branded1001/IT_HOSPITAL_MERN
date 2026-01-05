const { contact } = require('../controllers/contactControllers')
const express = require('express');
const app = express();
app.use("/uploads", express.static("uploads"));
const multer = require('multer');



const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, "uploads/"),
    filename: (req, file, cb) =>

        cb(null, Date.now() + "-" + file.originalname),
});

const upload = multer({ storage });

const router = express.Router()

router.post("/register", upload.single("image"), contact)


module.exports = router