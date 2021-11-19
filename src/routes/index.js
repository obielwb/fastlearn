const express = require("express");
const routes = express.Router();

const home = require("./home");
const community = require("./community");
const post = require("./post");

routes.use("/", home);
routes.use("/community", community);
routes.use("/post", post);

module.exports = routes;
