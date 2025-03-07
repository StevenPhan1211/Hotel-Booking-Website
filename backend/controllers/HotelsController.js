const Hotels = require("../models/hotelsModel");

class HotelsController {
  async getAllHotels(req, res) {
    try {
      const hotels = await Hotels.getAll();
      res.status(200).json(hotels);
    } catch (error) {
      res.status(500).json("Không tìm thấy dữ liệu khách sạn");
    }
  }
}

module.exports = new HotelsController();
