const express = require('express');
const router = express.Router();

module.export = (itineraryService) => {
  router.get('/', (req, res) => {
    console.log("yo")
  })

  return router;
}
