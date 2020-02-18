module.exports = (citiesRepository) => {
  return {

    getAllCities: () => {
      return citiesRepository.getAllCities();
    },
    getCity: async (userInput) => {
      if (!isNaN(userInput)) {
        return Promise.resolve(citiesRepository.getCityByBudget(Number(userInput)*100))
      } else {
        userInput = userInput.toLowerCase()
        let result = await Promise.resolve (citiesRepository.getCityByCity(userInput))
        if (result && !result.length) {
          let result2 = await Promise.resolve (citiesRepository.getCityByCountry(userInput))
          if (result2 && !result2.length) {
            return Promise.resolve(citiesRepository.getCityByActivity(userInput))
          } else {
            return result2
          }
        } else {
          return result
        }
      }
    }
  }
}
