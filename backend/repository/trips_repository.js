module.exports = (db) => {
  return {

    getTrips: (userId) => {
      console.log('Inside the trips repository')
      const qs = `
      SELECT DISTINCT (trips.id), users.first_name, trips.trip_name, destinations.city, destinations.country, country, trips.total_cost, trips.trip_budget
      FROM trips
      JOIN users ON user_id = users.id
      JOIN schedules ON trips.id = trip_id
      JOIN itineraries ON schedules.id = schedule_id
      JOIN activities ON activities.id = activity_id
      JOIN destinations ON destinations.id = destination_id
      WHERE user_id = $1
      `
      return db.query(qs,[userId])
    },

    getTripById: (tripId) => {
      const qs = `
      SELECT trip_id, schedule_id, schedule_name, activity_id, name, price_cents, time_operation, lat, long, activities.image_url, itineraries.id as itinerary_id
      FROM trips
      JOIN users ON user_id = users.id
      JOIN schedules ON trips.id = trip_id
      JOIN itineraries ON schedules.id = schedule_id
      JOIN activities ON activities.id = activity_id
      JOIN destinations ON destinations.id = destination_id
      WHERE trip_id = '${tripId}';
      `;

      return db.query(qs)
    },

    postTrips: (tripSummary) => {

      console.log('Inside the trips repository')

      const trip_id = Object.keys(tripSummary)[0];
      const frontEndInput = tripSummary[trip_id];
      const user_id = frontEndInput.userId
      const trip_name = frontEndInput.trip;
      const trip_total = frontEndInput.total;
      const trip_columns = frontEndInput.columns;
      const trip_budget = frontEndInput.budget;

      console.log("userid: ", user_id)
      console.log("trip_id: ", trip_id);
      console.log("trip_name: ", trip_name);
      console.log("trip_total: ", trip_total);
      console.log("schedule_id: ", trip_columns);
      console.log("trip_budget: ", trip_budget);


      let query_for_editing = `
      DELETE FROM trips WHERE trips.id = '${trip_id}';
      `

      let query_for_trips =`INSERT INTO trips (id, user_id, trip_name, total_cost, trip_budget) VALUES ('${trip_id}', ${user_id}, '${trip_name}', ${trip_total}, ${trip_budget});
      `;

      let query_for_schedules ='';
      let query_for_itineraries = '';

      for (let column_id in trip_columns) {
        query_for_schedules +=`INSERT INTO schedules (id, schedule_name, trip_id) VALUES ('${column_id}', '${trip_columns[column_id].name}' ,'${trip_id}');
        `
        for (let activity of trip_columns[column_id].items) {
          query_for_itineraries += `INSERT INTO itineraries (id, schedule_id, activity_id) VALUES (
            '${activity.id}','${column_id}',${activity.activity_id});
          `
        }
      }

      // console.log("trips: ",query_for_trips);
      // console.log("scheduels: ", query_for_schdules);
      // console.log("itineraries: ", query_for_itineraries)

      let qs = query_for_editing+ query_for_trips + query_for_schedules + query_for_itineraries;
      console.log(qs)

      return db.query(qs)
    },

    deleteTrip: (tripId) => {

      const qs = "DELETE FROM trips WHERE trips.id = $1"
      return db.query(qs,[tripId])
    }



  }
}

// SELECT * FROM trips
// JOIN users ON user_id = users.id
// JOIN schedules ON trips.id = trip_id
// JOIN itineraries ON schedules.id = schedule_id
// JOIN activities ON activities.id = activity_id
// JOIN destinations ON destinations.id = destination_id

// SELECT users.id, friend_id, destinations.id from users
// JOIN friends ON users.id = friend_id
// JOIN users ON user_id = users.id
// JOIN schedules ON trips.id = trip_id
// JOIN itineraries ON schedules.id = schedule_id
// JOIN activities ON activities.id = activity_id
// JOIN destinations ON destinations.id = destination_id
// WHERE user_id = 3 && destinations.city = 'Bali'

