const RoomTypes = require("../models/roomTypesModel");

class RoomTypesController {
  async getAllTypes(req, res) {
    try {
      const roomTypes = await RoomTypes.getAll();
      res.status(200).json(roomTypes);
    } catch (error) {
      res.status(500).json("Không tìm thấy bảng roomtypes");
    }
  }
}

module.exports = new RoomTypesController();
