module.exports = (db) => {
  return {

    getAllActivities: () => {
      const qs = `SELECT * FROM activities AS activity;`;
      return db.query(qs)
        .then((res) => res.rows[0])
        .catch(e => console.error(e))
    },
    getActivitiesByCity: (arg) => {
      const qs = `
      SELECT activities.* FROM activities
      JOIN destinations
      ON destination_id = destinations.id
      WHERE lower(city) = $1;`;
      return db.query(qs,[arg])
        .then((res) => res.rows)
        .catch(e => console.error(e))
    },
    test: async () => {
      try {
        const qs = `SELECT * FROM activities AS activity;`;
        const result = await db.query(qs)
        console.log(result.rows[0]);
        return result.rows;
      } catch (error) {
        console.error(error);
      }
    }

  }
}
