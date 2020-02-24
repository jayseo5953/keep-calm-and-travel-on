const express = require('express');
const router = express.Router();

module.exports = (itineraryService) => {

  router.get('/', (req, res) => {
    console.log('Inside the routes')
  })

  return router;
}
