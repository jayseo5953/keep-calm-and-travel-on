const express = require('express');
const router  = express.Router();
const activitiesRoutes = require("./activities");
const citiesRoutes = require("./cities");
const usersRoutes = require("./users");


module.exports = (activityService, cityService, userService) => {

  // router.get("/activities", (req, res) => {
  //   return activitiesRoutes()
  // });

  // router.get("/cities", (req, res) => {
  //   console.log('in cities')
  //   return citiesRoutes
  // });

  router.use("/activities", activitiesRoutes(activityService));
  router.use("/cities", citiesRoutes(cityService));
  router.use("/users", usersRoutes(userService));

  return router;
};
