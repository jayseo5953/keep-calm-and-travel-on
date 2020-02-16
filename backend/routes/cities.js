const express = require('express');
const router  = express.Router();


module.exports = (citiesService) => {

  router.get("/", async (req, res) => {
    try {
      const [cities] = await Promise.all([
        // await citiesService.getAllCities()
        await citiesService.getCity('spa')
      ]);
      console.log(cities);
      res.send({ cities });
      // res.render("cities")
      // const test = 'Inside cities routes'
    } catch (err) {
      console.error(err);
    }
  });
  return router;
};
