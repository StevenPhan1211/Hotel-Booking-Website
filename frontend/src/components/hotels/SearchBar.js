// "use client";

// import { useState } from "react";
// import { DatePicker } from "./DatePicker";
// import { GuestSelector } from "./GuestSelector";
// import { useRouter } from "next/navigation";

// export function SearchBar() {
//   const [location, setLocation] = useState("");
//   const [dates, setDates] = useState({ checkIn: "", checkOut: "" });
//   const [guests, setGuests] = useState({ adults: 2, children: 0, rooms: 1 });
//   const router = useRouter();

//   const handleSearch = () => {
//     router.push(
//       `/${location}?checkIn=${dates.checkIn}&checkOut=${dates.checkOut}&adults=${guests.adults}&children=${guests.children}&rooms=${guests.rooms}`
//     );
//   };

//   return (
//     <div className="search-bar">
//       <div className="location-input">
//         <input
//           type="text"
//           placeholder="Nhập điểm đến"
//           value={location}
//           onChange={(e) => setLocation(e.target.value)}
//         />
//       </div>

//       <DatePicker onChange={setDates} />
//       <GuestSelector onChange={setGuests} />

//       <button onClick={handleSearch} className="search-button">
//         Tìm
//       </button>
//     </div>
//   );
// }
