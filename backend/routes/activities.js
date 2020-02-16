const express = require('express');
const router  = express.Router();

module.exports = (activityService) => {

  // router.get("/", (req, res) => {
  //   res.render("index");
  // });

  router.get("/", async (req, res) => {
    try {
      const [activities] = await Promise.all([
        await activityService.getActivitiesByCity('bali')
        // await activityService.test()
      ]);
      console.log(activities);
      res.send({ activities });
      // res.render("activities")
    } catch (err) {
      console.error(err);
    }
  });
  return router;
};
