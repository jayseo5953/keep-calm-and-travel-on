module.exports = (tripsRepository) => {
  return {

    postTrips: (tripSummary) => {
      console.log('Using postTrips from Trips Service')
      console.log(tripSummary)

      return tripsRepository.postTrips(tripSummary)
    },

    getTrips: (arg) => {
      console.log('Using getTrips from Trips Service', arg)

      return tripsRepository.getTrips()
    }

  }
}
