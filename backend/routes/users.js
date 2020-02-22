/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();
/*
module.exports = (db) => {
  router.get("/", (req, res) => {
    db.query(`SELECT * FROM users`)
      .then(data => {
        const users = data.rows;
        console.log(users)
        res.json({ users });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });
  return router;
};
*/
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
