module.exports = (itinerariesRepository) => {
  console.log("inside intineraries_services")
  return {
    getItineraryId: (itineraryId) => {
      return itinerariesRepository.getItineraryId(itineraryId)
    }

  }
}
