const express = require('express');
const router = express.Router();

module.exports = (tripService) => {

  router.get("/:userId", async (req, res) => {
    console.log('You are in the trips route')
    let userId = req.params.userId
    console.log("user id: ", userId)
    try {
      const trips = await tripService.getTrips(userId);
      console.log(trips.rows)
      if(!trips) throw "Trips Not Found"
      res.send(trips.rows);

    } catch (err) {
      console.error("err from cities search API:", err);
    }

  })

  router.get("/edit/:tripId", async (req, res) => {
    console.log('You are in the trips route')
    let tripId = req.params.tripId
    console.log("user id: ", tripId)
    try {
      const trips = await tripService.getTripById(tripId);
      console.log(trips.rows)
      if(!trips) throw "Trips Not Found"
      res.send(trips.rows);

    } catch (err) {
      console.error("err from cities search API:", err);
    }

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
  })


    router.post("/delete", async (req, res) => {
      console.log("Post trip route activated")

      const tripId = req.body.tripId
      console.log(tripId);

      try {
        await tripService.deleteTrip(tripId)
        res.send('success')
      } catch (err) {

        console.error("err from deleting a trip:", err);
        res.status(400).send('deleting Failed');
      }



    // res.status(200).send({ test: "yay" });
  })

  return router;
}
