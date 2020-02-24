module.exports = (db) => {
  return {

    getAllCities: (arg) => {
      const qs = `SELECT id, city FROM destinations;`;
      return db.query(qs)
        .then((res) => res.rows)
        .catch(e => console.error(e))
    },
    getCityByCity: (arg) => {
      const qs = `SELECT id, city, image_url FROM destinations WHERE lower(city) LIKE '%'|| $1 || '%';`;
      return db.query(qs, [arg])
        .then((res) => res.rows)
        .catch(e => console.error(e))
    },
    getCityByCountry: (arg) => {
      const qs = `SELECT id, city, image_url FROM destinations WHERE lower(country) LIKE '%'|| $1 || '%';`;
      return db.query(qs,[arg])
        .then((res) => res.rows)
        .catch(e => console.error(e))
    },
    
    getCityByBudget: (arg) => {

      const qs =
      `SELECT id, city, image_url, $1 /avg_per_act AS number_of_activities
      FROM(select destinations.id, city, destinations.image_url, sum(price_cents)/(count(*)) AS AVG_PER_ACT from activities
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



