const express = require('express');
const router = express.Router();

module.exports = (itineraryService) => {

  router.get('/:itineraryId', (req, res) => {
    console.log('inside route', req)
    const itineraryId = req.params.tripId

    itineraryService.getItineraryId(itineraryId)
    .then(resolve => {
      res.send(resolve.rows)
    })
    .catch(err => console.error('err', err))
  })

  return router;
}

