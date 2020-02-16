const express = require('express');
const router  = express.Router();
const activitiesRoutes = require("./activities");
const citiesRoutes = require("./cities");


module.exports = (apiService) => {

  router.get("/activities", (req, res) => {
    return activitiesRoutes
  });

  router.get("/cities", (req, res) => {
    return citiesRoutes
  });

  return router;
};
