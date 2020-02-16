module.exports = (db) => {
  return {

    getAllCities: (arg) => {
      const qs = `SELECT city FROM destinations;`;
      return db.query(qs)
        .then((res) => res.rows)
        .catch(e => console.error(e))
    },
    getCityByCity: (arg) => {
      arg = arg.toLowerCase()
      const qs = `SELECT city FROM destinations WHERE lower(city) LIKE '%'|| $1 || '%';`;
      return db.query(qs, [arg])
        .then((res) => res.rows)
        .catch(e => console.error(e))
    },
    getCityByCountry: (arg) => {
      const qs = `SELECT city FROM destinations WHERE lower(country) LIKE '%'|| $1 || '%';`;
      return db.query(qs,[arg])
        .then((res) => res.rows)
        .catch(e => console.error(e))
    },
    getCityByBudget: (arg) => {
      const qs = `SELECT city FROM destinations WHERE lower(city) = $1;`;
      return db.query(qs,[arg])
        .then((res) => res.rows)
        .catch(e => console.error(e))
    },
    getCityByActivity: (arg) => {
      const qs = `SELECT city FROM destinations WHERE lower(city) = $1;`;
      return db.query(qs,[arg])
        .then((res) => res.rows)
        .catch(e => console.error(e))
    }


  }
}