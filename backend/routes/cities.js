const express = require('express');
const router  = express.Router();


module.exports = (citiesService) => {

  router.get("/:input", async (req, res) => {
    let userInput = req.params.input
    console.log("userinput: ", userInput)
    try {
      const [cities, image_url] = await Promise.all([
        // await citiesService.getAllCities()
        await citiesService.getCity(userInput)
      ]);
      // console.log("res: ",cities, image_url);
      if(!cities) throw "Cities Not Found"
      res.send({ cities, image_url });
      // res.render("cities")
      // const test = 'Inside cities routes'
    } catch (err) {
      console.error("err from cities search API:", err);
    }
  });


  // router.get("/:input", async (req, res) => {
  //   let userInput = req.params.input
  //   console.log(`The userinput is: ${userInput}`);
  //   try {
  //     const [cities] = await Promise.all([
  //       await citiesService.getCity(userInput)
  //     ]);
  //     res.send({ cities });
  //   } catch (err) {
  //     console.error(err);
  //   }
  // })
  return router;
};
