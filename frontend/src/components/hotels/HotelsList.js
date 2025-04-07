import Link from "next/link";

const hotelImages = {
  1: "/hotels/hotel_01.jpg",
  2: "/hotels/hotel_02.jpg",
  3: "/hotels/hotel_03.jpg",
};

export default function HotelsList({ hotels }) {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Danh sách khách sạn</h1>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {hotels.map((hotel) => (
          <li key={hotel.HotelID} className="border p-4 rounded-lg shadow">
            {/* Hiển thị ảnh khách sạn */}
            <img
              src={hotelImages[hotel.HotelID] || "/hotels/cat.png"}
              alt={hotel.HotelName}
              className="w-full h-48 object-cover rounded-md"
            />
            <h2 className="text-xl font-semibold mt-2">{hotel.HotelName}</h2>
            <p>
              <strong>Số điện thoại:</strong> {hotel.PhoneNumber}
            </p>
            <p>
              <strong>Email:</strong> {hotel.Email}
            </p>
            <p>
              <strong>Mô tả:</strong> {hotel.Description}
            </p>
            <Link
              href={`/hotels/${hotel.HotelID}`}
              className="text-blue-500 hover:underline mt-2 block"
            >
              Xem chi tiết
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
