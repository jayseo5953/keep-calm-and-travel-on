module.exports = (db) => {
  return {

    getAllCities: (arg) => {
      const qs = `SELECT city FROM destinations;`;
      return db.query(qs)
        .then((res) => res.rows)
        .catch(e => console.error(e))
    },
    getCity: (arg) => {
      arg = arg.toLowerCase()
      const qs = `SELECT city FROM destinations WHERE lower(city) like $1;`;
      return db.query(qs,[arg])
        .then((res) => res.rows)
        .catch(e => console.error(e))
    },
    getCityWithCountry: (arg) => {
      const qs = `SELECT city FROM destinations WHERE lower(city) = $1;`;
      return db.query(qs,[arg])
        .then((res) => res.rows)
        .catch(e => console.error(e))
    },
    getCityWithBudget: (arg) => {
      const qs = `SELECT city FROM destinations WHERE lower(city) = $1;`;
      return db.query(qs,[arg])
        .then((res) => res.rows)
        .catch(e => console.error(e))
    },
    getCityWithActivity: (arg) => {
      const qs = `SELECT city FROM destinations WHERE lower(city) = $1;`;
      return db.query(qs,[arg])
        .then((res) => res.rows)
        .catch(e => console.error(e))
    }


  }
}