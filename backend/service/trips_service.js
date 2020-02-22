module.exports = () => {
  return {

    postTrips: () => {
      console.log('Using postTrips from Trips Service')
      return tripsRepository.postTripss()
    },

    getTrips: () => {
      console.log('Using getTrips from Trips Service')
      return tripsRepository.getTrips()
    }

  }
}