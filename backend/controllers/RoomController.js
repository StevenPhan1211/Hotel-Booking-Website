const Room = require("../models/roomModel");

class RoomController {
  async getAllRooms(req, res) {
    try {
      const rooms = await Room.getAll();
      res.status(200).json(rooms);
    } catch (error) {
      res.status(500).json("Không tìm thấy dữ liệu phòng");
    }
  }
}

module.exports = new RoomController();
