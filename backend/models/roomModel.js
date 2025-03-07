const pool = require("../config/db");

const getAll = async () => {
  const query = `
    SELECT r.RoomID, r.RoomName, r.PricePerNight, r.Description, r.Capacity, r.IsAvailable, r.CreatedAt,
           h.HotelID, h.HotelName,
           t.RoomTypeID, t.RoomTypeName
    FROM rooms r
    JOIN hotels h ON r.HotelID = h.HotelID
    JOIN roomtypes t ON r.RoomTypeID = t.RoomTypeID
  `;

  const [rows] = await pool.execute(query);
  return rows;
};

module.exports = {
  getAll,
};
