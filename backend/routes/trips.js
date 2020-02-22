const express = require('express');
const router = express.Router();

module.exports = (tripService) => {

  router.get("/", (req, res) => {
    console.log('You are in the trips route')
    res.send('hellow')
  })

  router.post("/", (req, res) => {
    console.log("Post trip route activated")
    const tripSummary = req.body;
    tripService.postTrips(tripSummary)
    res.send('success')
    // res.status(200).send({ test: "yay" });
  })

  return router;
}