const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const routes = require("./routes");

const app = express();

mongoose.connect(
  "mongodb+srv://tiagoalmeida:gostack@cluster0-opgae.mongodb.net/week10?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

app.use(cors()); //{ origin: "http://localhost:3000/" } ou vazio para ter acesso a qualquer URL externa
app.use(express.json());
app.use(routes);

app.listen(3333);
