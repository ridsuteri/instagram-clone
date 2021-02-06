const express = require("express");
const app = express();
const mongoose = require("mongoose");
const { MONGOURI } = require("./keys");

const PORT = 5000;

mongoose.connect(MONGOURI,{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on("connected", () => {
  console.log("yay! connected to mongo");
});

mongoose.connection.on("error", (err) => {
  console.log("error connecting to mongo",err);
});
// const customMiddleware = (req, res, next) => {
//   console.log("middleware executed");
//   next();
// };

// app.get("/", (req, res) => {
//   console.log("home");
//   res.send("Hello world");
// });

// app.get("/about", customMiddleware, (req, res) => {
//   console.log("about page");
//   res.send("about page");
// });

app.listen(PORT, () => {
  console.log(`Server is up and running on port : ${PORT}`);
});
