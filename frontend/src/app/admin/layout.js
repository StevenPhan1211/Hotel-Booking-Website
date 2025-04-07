import Link from "next/link";
import SearchBar from "@/components/admin/SearchBar"; // Import SearchBar
import "@/styles/globals.css";

export default function AdminLayout({ children, rooms }) {
  return (
    <html lang="en">
      <head>
        <title>Admin Panel</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="min-h-screen">
        <div className="flex h-screen">
          {/* Sidebar (cố định khi cuộn) */}
          <aside className="w-64 bg-gray-800 text-white p-4 fixed top-0 left-0 bottom-0 overflow-y-auto">
            <h2 className="text-xl font-bold mb-4">Admin Panel</h2>
            <nav>
              <ul>
                <li className="mb-2">
                  <Link href="/admin/rooms" className="hover:underline">
                    Rooms
                  </Link>
                </li>
                <li className="mb-2">
                  <Link href="/admin/users" className="hover:underline">
                    Users
                  </Link>
                </li>
                <li className="mb-2">
                  <Link href="/admin/booking" className="hover:underline">
                    Booking
                  </Link>
                </li>
                <li className="mb-2">
                  <Link href="/admin/settings" className="hover:underline">
                    Settings
                  </Link>
                </li>
              </ul>
            </nav>
          </aside>

          {/* Main Content */}
          <main className="flex-1 p-6 bg-gray-100 ml-64">
            {/* Search Bar */}
            <div className="mb-4">
              <SearchBar rooms={rooms} />
            </div>

            {/* Render children từ page.js */}
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
