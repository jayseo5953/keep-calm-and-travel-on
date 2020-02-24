module.exports = (db) => {
  return {
    getItinerary: (itineraryId) => {
      console.log('inside the trips repository')
      const qs = `
      SELECT *
      FROM trips
      JOIN users ON user_id = users.id
      JOIN schedules ON trips.id = trip_id
      JOIN itineraries ON schedules.id = schedule_id
      JOIN activities ON activities.id = activity_id
      JOIN destinations ON destinations.id = destination_id
      `
      return db.query(qs,[itineraryId])
    }

  }
}
