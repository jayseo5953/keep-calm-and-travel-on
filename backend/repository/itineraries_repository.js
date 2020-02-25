module.exports = (db) => {
  return {
    getItineraryId: (itineraryId) => {
      console.log('inside intineraries repository', itineraryId)
      const qs = `
      SELECT user_id, trip_id, itineraries.id as itinerary_id, destinations.city, destinations.country, destinations.image_url, schedule_name as day, users.first_name, users.last_name, activities.name, activities.price_cents, activities.time_operation
      FROM trips
      JOIN users ON user_id = users.id
      JOIN schedules ON trips.id = trip_id
      JOIN itineraries ON schedules.id = schedule_id
      JOIN activities ON activities.id = activity_id
      JOIN destinations ON destinations.id = destination_id
      WHERE itineraries.id = '${itineraryId}';
      `
      return db.query(qs,[itineraryId])
    }
  }
}
