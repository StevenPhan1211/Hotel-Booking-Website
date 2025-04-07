export async function getAllRooms() {
  try {
    const res = await fetch("http://localhost:5000/rooms", {
      cache: "no-store", // Không sử dụng cache để lấy dữ liệu mới
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch rooms: ${res.status}`);
    }

    const data = await res.json();
    console.log("API Response:", data); // Debug: kiểm tra dữ liệu API trả về

    return Array.isArray(data) ? data : []; // Đảm bảo trả về mảng
  } catch (error) {
    console.error("Fetch rooms error:", error);
    return []; // Trả về mảng rỗng nếu có lỗi
  }
}
