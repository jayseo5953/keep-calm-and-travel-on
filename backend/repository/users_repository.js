module.exports = (db) => {
  return {

    getUser: (userId) => {
      const qs = `SELECT first_name, last_name, email FROM users;`;
      return db.query(qs)
        .then((res) => res.rows)
        .catch(e => console.error(e))
    }

  }
}