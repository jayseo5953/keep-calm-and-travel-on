module.exports = (db) => {
  return {

    getUser: (userId) => {
      const qs = `SELECT first_name, last_name, email FROM users;`;
      return db.query(qs)
        .then((res) => res.rows)
        .catch(e => console.error(e))
    },

    getUserByEmail: (userInput) => {
      const email = userInput.email;
      const qs = `SELECT * FROM users WHERE email='${email}';`;

      return db.query(qs)
        .then((res) => res.rows)
        .catch(e => console.error(e))
    },
    getFriends: (userId,city) => {
      const qs =`
        SELECT Distinct users.first_name, users.id
        FROM users
        JOIN trips ON user_id = users.id
        JOIN friends ON users.id = friend_id
        JOIN schedules ON trips.id = trip_id
        JOIN itineraries ON schedules.id = schedule_id
        JOIN activities ON activities.id = activity_id
        JOIN destinations ON destinations.id = destination_id
        WHERE friends.user_id = ${userId} AND LOWER(destinations.city) = '${city}';
      `
      return db.query(qs)
    },
    getFriendsActivities: (userId,friendId,city) => {
      const qs =`
        SELECT users.first_name, activities.name, price_cents, time_operation, lat, long, activities.image_url
        FROM users
        JOIN trips ON user_id = users.id
        JOIN friends ON users.id = friend_id
        JOIN schedules ON trips.id = trip_id
        JOIN itineraries ON schedules.id = schedule_id
        JOIN activities ON activities.id = activity_id
        JOIN destinations ON destinations.id = destination_id
        WHERE friends.user_id = ${userId} AND friend_id = ${friendId} AND LOWER(destinations.city) = '${city}';
      `
      return db.query(qs)
    }

  }
}
