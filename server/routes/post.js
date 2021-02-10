const express = require("express");
const mongoose = require("mongoose");
const requireLogin = require("../middleware/requireLogin");
const Post = mongoose.model("Post");
const router = express.Router();

router.post("/createpost", requireLogin, (req, res) => {
  const { title, body } = req.body;

  if (!title || !body) {
    return res.status(422).json({ error: "Please add all fields" });
  }
  //   console.log(req.user);
  //   res.sendStatus("ok");
  req.user.password = undefined;
  const post = new Post({
    title,
    body,
    postedBy: req.user,
  });

  post
    .save()
    .then((result) => {
      res.json({ post: result });
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
