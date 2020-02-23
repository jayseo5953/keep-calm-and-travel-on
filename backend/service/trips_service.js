module.exports = (tripsRepository) => {
  return {

    getTrips: (userId) => {

      return tripsRepository.getTrips(userId)
    },

    postTrips: (tripSummary) => {
      console.log('Using postTrips from Trips Service')
      console.log(tripSummary)

      return tripsRepository.postTrips(tripSummary)
    },

    deleteTrip: (tripId) => {

      return tripsRepository.deleteTrip(tripId)
    }

  }
}
