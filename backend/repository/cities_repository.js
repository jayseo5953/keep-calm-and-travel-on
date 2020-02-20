module.exports = (db) => {
  return {

    getAllCities: (arg) => {
      const qs = `SELECT id, city FROM destinations;`;
      return db.query(qs)
        .then((res) => res.rows)
        .catch(e => console.error(e))
    },
    getCityByCity: (arg) => {
      const qs = `SELECT id, city FROM destinations WHERE lower(city) LIKE '%'|| $1 || '%';`;
      return db.query(qs, [arg])
        .then((res) => res.rows)
        .catch(e => console.error(e))
    },
    getCityByCountry: (arg) => {
      const qs = `SELECT id, city FROM destinations WHERE lower(country) LIKE '%'|| $1 || '%';`;
      return db.query(qs,[arg])
        .then((res) => res.rows)
        .catch(e => console.error(e))
    },
    // Uncomment hsi if you want to get cities and number of days

    // getCityByBudget: (arg) => {
    //   const qs = `
    //   SELECT id, city, $1 /avg_per_day AS number_of_days
    //   FROM(select destinations.id, city, sum(price_cents)/(count(*))*3 AS AVG_PER_DAY from activities
    //   JOIN destinations ON (destination_id = destinations.id) GROUP BY destinations.city, destinations.id) AS x
    //   WHERE $1 /avg_per_day >= 1`;
    //   return db.query(qs,[arg])
    //     .then((res) => res.rows)
    //     .catch(e => console.error(e))
    // },
    getCityByBudget: (arg) => {

      const qs =
      `SELECT id, city, $1 /avg_per_act AS number_of_activities
      FROM(select destinations.id, city, sum(price_cents)/(count(*)) AS AVG_PER_ACT from activities
      JOIN destinations ON (destination_id = destinations.id) GROUP BY destinations.city, destinations.id)
      AS x WHERE $1 /avg_per_act >= 1;`
      return db.query(qs,[arg])
        .then((res) => res.rows)
        .catch(e => console.error(e))
    },
    getCityByActivity: (arg) => {
      const qs = `SELECT destinations.id, city FROM activities JOIN destinations ON (destination_id = destinations.id)
      WHERE lower (activities.name) LIKE '%'|| $1 ||'%';`;
      return db.query(qs,[arg])
        .then((res) => res.rows)
        .catch(e => console.error(e))
    }
  }
}



