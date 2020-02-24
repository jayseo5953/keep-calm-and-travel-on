const express = require('express');
const router = express.Router();

module.exports = (itineraryService) => {

  router.get('/:tripId', (req, res) => {
    console.log('IM INSIDE THE ROUTES WOOOO!')
    const tripId = req.params.tripId
    itineraryService.getItineraryId(tripId)
    .then(resolve => {
      res.send(resolve.rows)
    })
    .catch(err => console.error('err', err))
  })

  return router;
}
