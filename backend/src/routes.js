const { Router } = require("express");
const DevController = require("./controllers/DevController");

const routes = Router();

routes.get("/devs", DevController.list);
routes.post("/devs", DevController.insert);

module.exports = routes;
