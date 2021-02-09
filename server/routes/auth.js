const express = require("express");
const mongoose = require("mongoose");
const User = mongoose.model("User");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("hello");
});

router.post("/signup", (req, res) => {
  // console.log(req.body);

  const { name, email, password } = req.body;

  if (!email || !name || !password) {
    return res.status(422).json({ error: "Please fill all details" });
  }
  User.findOne({ email })
    .then((savedUser) => {
      if (savedUser) {
        return res.status(422).json({ error: "Email already in use" });
      }

      const user = new User({
        email,
        name,
        password,
      });

      user
        .save()
        .then((user) => {
          res.json({ message: "Signup successfull" });
        })
        .catch((err) => {
          console.log(err);
        });
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
