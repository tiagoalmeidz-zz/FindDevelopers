const { Router } = require("express");
const axios = require("axios");
const Dev = require("./models/Dev");

const routes = Router();

routes.post("/devs", async (req, res) => {
  // console.log(req.body);
  // retorno
  // github_username: 'tiagoalmeida93',
  // techs: 'ReactJS', 'JavaScript', 'C#', 'CSS3'

  const { github_username, techs } = req.body;

  const apiResponse = await axios.get(
    `https://api.github.com/users/${github_username}`
  );

  const { name = login, avatar_url, bio } = apiResponse.data;

  const techsArray = techs.split(",").map(tech => tech.trim());
  // Separando os elementos do array a cada virgula e retirando os espaços pra cada item.

  const dev = await Dev.create({
    github_username,
    name,
    avatar_url,
    bio,
    techs: techsArray
  });

  return res.json(dev);
});

module.exports = routes;
