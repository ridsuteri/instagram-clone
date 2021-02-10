const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../keys");
const mongoose = require("mongoose");
const User = mongoose.model("User");

module.exports = (req, res, next) => {
  // authorization will look like authorization === Bearer token
  const { authorization } = req.headers;
  if (!authorization) {
    return res
      .status(401)
      .json({ error: "you must be logged in to access it" });
  }
  const token = authorization.replace("Bearer ", "");
  jwt.verify(token, JWT_SECRET, (error, payload) => {
    if (error) {
      return res
        .status(401)
        .json({ error: "you must be logged in to access it" });
    }
    const { _id } = payload;
    User.findById(_id).then((userdata) => {
      req.user = userdata;
      next();
    });
  });
};
