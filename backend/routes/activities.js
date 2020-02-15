const express = require('express');
const router  = express.Router();

module.exports = (activityService) => {
  
  // router.get("/", (req, res) => {
  //   res.render("index");
  // });

  router.get("/api/activities", async (req, res) => {
    try {
      const [activities] = await Promise.all([
        // await activityService.getAllActivities()
        await activityService.test()
      ]);
      // console.log(activities);
      res.send({ activities });
    } catch (err) {
      console.error(err);
    }
  });
  return router;
};