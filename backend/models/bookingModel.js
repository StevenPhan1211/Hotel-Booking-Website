const pool = require("../config/db");

const getAll = async () => {
  const query = "SELECT * FROM Bookings";
  const [rows] = await pool.execute(query);
  return rows;
};

const getById = async (id) => {
  const query = "SELECT * FROM Bookings WHERE BookingID = ?";
  const [rows] = await pool.execute(query, [id]);
  return rows[0] || null;
};

const create = async ({
  CustomerID,
  RoomID,
  CheckInDate,
  CheckOutDate,
  TotalPrice,
  Status,
  NumberOfGuests,
  EstimatedArrivalTime,
  BookingCode,
}) => {
  const query = `
    INSERT INTO Bookings (CustomerID, RoomID, CheckInDate, CheckOutDate, TotalPrice, Status, NumberOfGuests, EstimatedArrivalTime, BookingCode) 
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`;
  const [result] = await pool.execute(query, [
    CustomerID,
    RoomID,
    CheckInDate,
    CheckOutDate,
    TotalPrice,
    Status,
    NumberOfGuests,
    EstimatedArrivalTime || null,
    BookingCode,
  ]);
  return result.insertId;
};

const update = async (BookingID, updateData) => {
  if (Object.keys(updateData).length === 0) {
    throw new Error("No fields to update");
  }

  // Xử lý EstimatedArrivalTime: Nếu rỗng thì chuyển thành NULL
  if (updateData.EstimatedArrivalTime === "") {
    updateData.EstimatedArrivalTime = null;
  }

  const fields = Object.keys(updateData)
    .map((field) => `${field} = ?`)
    .join(", ");
  const values = Object.values(updateData);

  const query = `UPDATE Bookings SET ${fields} WHERE BookingID = ?`;

  try {
    const [result] = await pool.execute(query, [...values, BookingID]);
    return result.affectedRows > 0;
  } catch (error) {
    console.error("SQL Update Error:", error);
    throw new Error("Database error during update");
  }
};


const remove = async (id) => {
  const query = "DELETE FROM Bookings WHERE BookingID = ?";
  const [result] = await pool.execute(query, [id]);
  return result.affectedRows > 0;
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
};
