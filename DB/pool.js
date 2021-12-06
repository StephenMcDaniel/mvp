const { Pool } = require('pg');

const pool = new Pool({
  user: 'stephen',
  host: 'localhost',
  database: 'mvp',
  password: null,
  port: 5432
});

module.exports.db = {
  getItems: function (category = '1') {

    return pool.query(`SELECT * FROM phrases WHERE category_id = ${category};`);
  },
}