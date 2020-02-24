module.exports = (itinerariesRepository) => {
  console.log("inside intineraries_service.js")
  return {
    getItineraryId: (tripId) => {
      return itinerariesRepository.getItineraryId(tripId)
    }

  }
}
