
const User = require('../models/contact')

exports.contact( async (req, res) => {
  try {
    const user = new User({
      
      name: req.body.name,
      email: req.body.email,
      message: req.body.message,
      image: req.file.filename
    });

    await user.save();
    res.send("User + Image Saved Successfully");
  } catch (err) {
    res.status(500).send("Error saving data");
  }
});