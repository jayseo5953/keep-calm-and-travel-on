const express = require('express');
const router  = express.Router();

module.exports = (activityService) => {

  router.get("/", async (req, res) => {
    try {
      // const [users] = await Promise.all([
      //   await userService.getUser()
      // ]);
      // console.log(users);
      // res.send({ users });
      res.render("cities")
    } catch (err) {
      console.error(err);
    }
  });
  return router;
};
