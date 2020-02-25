/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();

module.exports = (userService) => {

  router.get("/", async (req, res) => {
    try {

      console.log(req.body.data)
      const [users] = await Promise.all([
        await userService.getUser()
      ]);
      // console.log(users);

      res.send({ users });
      // res.render("users")
    } catch (err) {
      console.error(err);
    }
  });

  router.get("/:userId/friends/:city", async (req, res) => {
    try {
      const userId = req.params.userId
      const city = req.params.city.toLowerCase();
      const friends = await userService.getFriends(userId,city)

      console.log("userid", userId);
      console.log("city ", city)

      console.log("result of friends: ", friends);

      res.send(friends);
    } catch (err) {
      console.error(err);
    }
  });


  router.get("/:userId/friends/:friendId/:city/activities", async (req, res) => {
    try {
      const userId = req.params.userId;
      const friendId = req.params.friendId;
      const city = req.params.city.toLowerCase();
      const activities = await userService.getFriendsActivities(userId,friendId,city)

      console.log("userid", userId);
      console.log("city ", city)

      console.log("result of friends: ", activities);

      res.send(activities);
    } catch (err) {
      console.error(err);
    }
  });


  router.post("/", async (req, res) => {
    const userInput=req.body;
    const password = userInput.password;
    try {
      res.clearCookie()
      const [user] = await Promise.all([
        await userService.getUserByEmail(userInput)
      ]);
      console.log(password)
      if (user) {
        if (user.password === password) {
          // res.cookie('name', `${user.first_name}`)
          res.cookie('user', JSON.stringify({
            name: user.first_name,
            id: user.id
          }))
          res.send({ user })
        } else {
          res.cookie(null)
          res.end()
        }
      } else {
        res.end()
      }
    } catch (error) {
      console.log(error)
    }
  })
  return router;
};
