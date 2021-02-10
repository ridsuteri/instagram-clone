const express = require("express");
const app = express();
const mongoose = require("mongoose");
const { MONGOURI } = require("./keys");

const PORT = 5000;

mongoose.connect(MONGOURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("connected", () => {
  console.log("yay! connected to mongo");
});

mongoose.connection.on("error", (err) => {
  console.log("error connecting to mongo", err);
});

require("./models/user");
require("./models/post");

app.use(express.json());
app.use(require("./routes/auth"));
app.use(require("./routes/post"));

app.listen(PORT, () => {
  console.log(`Server is up and running on port : ${PORT}`);
});
