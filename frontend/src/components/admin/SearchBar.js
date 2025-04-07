"use client";
import { useState } from "react";

export default function SearchBar({ rooms }) {
  const [query, setQuery] = useState("");
  const filteredRooms = rooms.filter((room) =>
    room.RoomName.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search rooms..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="p-2 border border-gray-300 rounded w-full"
      />

      {/* Display search results */}
      <ul className="mt-2 space-y-2">
        {filteredRooms.length > 0 ? (
          filteredRooms.map((room) => (
            <li key={room.RoomID} className="p-4 bg-white shadow rounded">
              <h2 className="text-lg font-semibold">{room.RoomName}</h2>
              <p>{room.Description}</p>
            </li>
          ))
        ) : (
          <p className="text-gray-500">No matching rooms.</p>
        )}
      </ul>
    </div>
  );
}
