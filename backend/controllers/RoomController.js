const Room = require("../models/roomModel");

class RoomController {
  // Lấy danh sách tất cả phòng
  async getAllRooms(req, res) {
    try {
      const rooms = await Room.getAll();
      res.status(200).json(rooms);
    } catch (error) {
      res.status(500).json({ message: "Lỗi khi lấy danh sách phòng!" });
    }
  }

  // Lấy thông tin phòng theo ID
  async getRoomById(req, res) {
    try {
      const { id } = req.params;
      const room = await Room.getById(id);
      if (!room) {
        return res.status(404).json({ message: "Phòng không tồn tại!" });
      }
      res.status(200).json(room);
    } catch (error) {
      res.status(500).json({ message: "Lỗi khi lấy thông tin phòng!" });
    }
  }

  // Thêm phòng mới
  async createRoom(req, res) {
    try {
      const {
        RoomTypeID,
        HotelID,
        RoomName,
        PricePerNight,
        Description,
        Capacity,
        IsAvailable,
      } = req.body;

      // Chuyển đổi về số nguyên hoặc số thực
      const price = parseFloat(PricePerNight);
      if (isNaN(price) || price <= 0 || price > 99999999.99) {
        return res.status(400).json({ message: "Giá phòng không hợp lệ!" });
      }

      const newRoomId = await Room.create({
        RoomTypeID: parseInt(RoomTypeID),
        HotelID: parseInt(HotelID),
        RoomName,
        PricePerNight: price,
        Description,
        Capacity: parseInt(Capacity),
        IsAvailable: parseInt(IsAvailable),
      });

      res
        .status(201)
        .json({ message: "Thêm phòng thành công!", RoomID: newRoomId });
    } catch (error) {
      console.error("Lỗi khi thêm phòng:", error);
      res
        .status(500)
        .json({ message: "Lỗi khi thêm phòng!", error: error.message });
    }
  }

  // Cập nhật phòng
  async updateRoom(req, res) {
    try {
      const {
        id,
        RoomTypeID,
        HotelID,
        RoomName,
        PricePerNight,
        Description,
        Capacity,
        IsAvailable,
      } = req.body;

      if (!id) {
        return res.status(400).json({ message: "Thiếu ID phòng để cập nhật!" });
      }

      const existingRoom = await Room.getById(id);
      if (!existingRoom) {
        return res.status(404).json({ message: "Phòng không tồn tại!" });
      }

      // Chuyển đổi kiểu dữ liệu cho đúng
      const price = parseFloat(PricePerNight);
      if (isNaN(price) || price <= 0 || price > 99999999.99) {
        return res.status(400).json({ message: "Giá phòng không hợp lệ!" });
      }

      await Room.update(id, {
        RoomTypeID: parseInt(RoomTypeID),
        HotelID: parseInt(HotelID),
        RoomName,
        PricePerNight: price,
        Description,
        Capacity: parseInt(Capacity),
        IsAvailable: parseInt(IsAvailable),
      });

      res.status(200).json({ message: "Cập nhật phòng thành công!" });
    } catch (error) {
      res
        .status(500)
        .json({ message: "Lỗi khi cập nhật phòng!", error: error.message });
    }
  }

  // Xóa phòng
  async deleteRoom(req, res) {
    try {
      const { id } = req.params;

      const existingRoom = await Room.getById(id);
      if (!existingRoom) {
        return res.status(404).json({ message: "Phòng không tồn tại!" });
      }

      await Room.remove(id);
      res.status(200).json({ message: "Xóa phòng thành công!" });
    } catch (error) {
      res.status(500).json({ message: "Lỗi khi xóa phòng!" });
    }
  }
}

module.exports = new RoomController();
