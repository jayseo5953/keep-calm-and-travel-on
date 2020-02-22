const express = require('express');
const router = express.Router();

module.exports = (tripService) => {

  router.get("/", (req, res) => {
    console.log('You are in the trips route')
    res.send('hellow')
  })

  router.post("/", async (req, res) => {
    console.log("Post trip route activated")
    const tripSummary = req.body;
    try {
      await tripService.postTrips(tripSummary)
      res.send('success')
    } catch (err) {

      console.error("err from posting columns:", err);
      res.status(400).send('Not Found');
    }


    // res.status(200).send({ test: "yay" });
  })

  return router;
}
