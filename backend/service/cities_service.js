module.exports = (citiesRepository) => {
  return {

    getAllCities: () => {
      return citiesRepository.getAllCities();
    },
    getCity: async (a) => {
     let result = await Promise.resolve (citiesRepository.getCityByCity(a))
     console.log("result"+result)
     if (!result.length) {
      return Promise.resolve (citiesRepository.getCityByCountry(a))
     } else {
       return result
     }
    
    }
  }
}