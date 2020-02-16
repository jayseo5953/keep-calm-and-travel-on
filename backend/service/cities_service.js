module.exports = (citiesRepository) => {
  return {

    getAllCities: () => {
      return citiesRepository.getAllCities();
    },
    getCity: (a) => {
      return citiesRepository.getCity(a);
    }
  }
}