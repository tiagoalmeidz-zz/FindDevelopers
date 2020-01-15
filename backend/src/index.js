const express = require("express");
const mongoose = require("mongoose");

const app = express();

mongoose.connect(
  "mongodb+srv://tiagoalmeida:gostack@cluster0-opgae.mongodb.net/week10?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

app.use(express.json());

app.get("/", (req, res) => {
  return res.json({ message: "Hello Dev!" });
});

app.listen(3333);
