const express = require('express');
const router = express.Router();

module.exports = () => {

  router.get("/", (req, res) => {
    console.log('You are in the trips route')
    const tripSummary = req.body;
    res.send('HELLO FROM THE TRIPS ROUTE', tripSummary)
  })

  return router;
}