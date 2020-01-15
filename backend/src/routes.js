const { Router } = require("express");
const axios = require("axios");

const routes = Router();

routes.post("/devs", async (req, res) => {
  console.log(req.body);
  // retorno
  // github_username: 'tiagoalmeida93',
  // techs: [ 'ReactJS', 'JavaScript', 'C#', 'CSS3' ]

  const { github_username } = req.body;

  const response = await axios.get(
    `https://api.github.com/users/${github_username}`
  );
  console.log(response);

  return res.json({ message: "Hello " + github_username });
});

module.exports = routes;
