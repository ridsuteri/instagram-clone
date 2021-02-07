const express = require("express");

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

  res.json({ message: "successfully posted" });
});

module.exports = router;
