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

  // Lấy thông tin một RoomType theo ID
  async getRoomTypeById(req, res) {
    try {
      const { id } = req.params;
      const roomType = await RoomTypes.getById(id);

      if (!roomType) {
        return res.status(404).json({ message: "Loại phòng không tồn tại!" });
      }

      res.status(200).json(roomType);
    } catch (error) {
      res.status(500).json({ message: "Lỗi khi lấy thông tin loại phòng!" });
    }
  }

  // Tạo mới một RoomType
  async createRoomType(req, res) {
    try {
      const { RoomTypeName } = req.body;
      if (!RoomTypeName) {
        return res
          .status(400)
          .json({ message: "Tên loại phòng không được để trống!" });
      }

      const newRoomTypeId = await RoomTypes.create(RoomTypeName);
      res.status(201).json({
        message: "Thêm loại phòng thành công!",
        RoomTypeID: newRoomTypeId,
      });
    } catch (error) {
      res.status(500).json({ message: "Lỗi khi tạo loại phòng!" });
    }
  }

  // Cập nhật thông tin RoomType theo ID
  async updateRoomType(req, res) {
    try {
      const { id } = req.params;
      const { RoomTypeName } = req.body;

      if (!RoomTypeName) {
        return res
          .status(400)
          .json({ message: "Tên loại phòng không được để trống!" });
      }

      const existingRoomType = await RoomTypes.getById(id);
      if (!existingRoomType) {
        return res.status(404).json({ message: "Loại phòng không tồn tại!" });
      }

      const success = await RoomTypes.update(id, RoomTypeName);
      if (success) {
        res.status(200).json({ message: "Cập nhật loại phòng thành công!" });
      } else {
        res
          .status(500)
          .json({
            message: "Cập nhật thất bại, không có dòng nào bị ảnh hưởng!",
          });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Lỗi khi cập nhật loại phòng!" });
    }
  }

  // Xóa RoomType theo ID
  async deleteRoomType(req, res) {
    try {
      const { id } = req.params;

      const existingRoomType = await RoomTypes.getById(id);
      if (!existingRoomType) {
        return res.status(404).json({ message: "Loại phòng không tồn tại!" });
      }

      await RoomTypes.remove(id);
      res.status(200).json({ message: "Xóa loại phòng thành công!" });
    } catch (error) {
      res.status(500).json({ message: "Lỗi khi xóa loại phòng!" });
    }
  }
}

module.exports = new RoomTypesController();
