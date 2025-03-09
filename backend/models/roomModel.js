const pool = require("../config/db");

// Lấy tất cả phòng
const getAll = async () => {
  const query = `
    SELECT r.*, rt.RoomTypeName, h.HotelName
    FROM Rooms r
    JOIN RoomTypes rt ON r.RoomTypeID = rt.RoomTypeID
    JOIN Hotels h ON r.HotelID = h.HotelID
  `;
  const [rows] = await pool.execute(query);
  return rows;
};

// Lấy phòng theo ID
const getById = async (id) => {
  const query = `
    SELECT r.*, rt.RoomTypeName, h.HotelName
    FROM Rooms r
    JOIN RoomTypes rt ON r.RoomTypeID = rt.RoomTypeID
    JOIN Hotels h ON r.HotelID = h.HotelID
    WHERE r.RoomID = ?
  `;
  const [rows] = await pool.execute(query, [id]);
  return rows[0] || null;
};

// Thêm phòng mới
const create = async (room) => {
  console.log("Data received for room creation:", room); // Debug xem dữ liệu đúng chưa

  const query = `
        INSERT INTO Rooms (RoomTypeID, HotelID, RoomName, PricePerNight, Description, Capacity, IsAvailable, CreatedAt)
        VALUES (?, ?, ?, ?, ?, ?, ?, NOW())
    `;
  try {
    const [result] = await pool.execute(query, [
      room.RoomTypeID,
      room.HotelID,
      room.RoomName,
      room.PricePerNight,
      room.Description,
      room.Capacity,
      room.IsAvailable,
    ]);
    return result.insertId;
  } catch (error) {
    console.error("Database error:", error); // Debug lỗi SQL
    throw error;
  }
};


// Cập nhật thông tin phòng
const update = async (RoomID, room) => {
  const query = `
    UPDATE Rooms
    SET RoomTypeID = ?, HotelID = ?, RoomName = ?, PricePerNight = ?, Description = ?, Capacity = ?, IsAvailable = ?
    WHERE RoomID = ?
  `;
  const [result] = await pool.execute(query, [
    room.RoomTypeID,
    room.HotelID,
    room.RoomName,
    room.PricePerNight,
    room.Description,
    room.Capacity,
    room.IsAvailable,
    RoomID,
  ]);
  return result.affectedRows > 0;
};

// Xóa phòng theo ID
const remove = async (id) => {
  const query = "DELETE FROM Rooms WHERE RoomID = ?";
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
