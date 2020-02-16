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
      // const [users] = await Promise.all([
      //   await userService.getUser()
      // ]);
      // console.log(users);
      // res.send({ users });
      res.render("users")
    } catch (err) {
      console.error(err);
    }
  });
  return router;
};
