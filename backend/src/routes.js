const { Router } = require("express");

const routes = Router();

routes.post("/", (req, res) => {
  console.log(req.body);
  return res.json({ message: "Hello Dev!" });
});

module.exports = routes;
