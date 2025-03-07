const pool = require("../config/db");

const getAll = async () => {
  const query = "SELECT * FROM hotels";
  const [rows] = await pool.execute(query);
  return rows;
};

module.exports = {
  getAll,
};
