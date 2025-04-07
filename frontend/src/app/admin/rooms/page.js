import { getAllRooms } from "@/lib/rooms"; // Import API
import SearchBar from "@/components/admin/SearchBar"; // Import SearchBar

export default async function AdminPage() {
  let rooms = await getAllRooms(); // Gọi API lấy dữ liệu phòng

  // ✅ Đảm bảo rooms luôn là một mảng
  if (!Array.isArray(rooms)) {
    console.error("Invalid rooms data:", rooms);
    rooms = []; // Nếu không phải mảng, gán lại rooms = []
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Admin Dashboard</h1>
      <p>Welcome to the admin panel. Below is the list of rooms:</p>

      {/* Search Bar */}
      <SearchBar rooms={rooms} />

      {/* Display rooms */}
      {rooms.length === 0 ? (
        <p className="text-gray-500">No rooms available.</p>
      ) : (
        <ul className="mt-4 space-y-2">
          {rooms.map((room) => (
            <li key={room.RoomID} className="p-4 bg-white shadow rounded">
              <h2 className="text-lg font-semibold">{room.RoomName}</h2>
              <p>{room.Description}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
