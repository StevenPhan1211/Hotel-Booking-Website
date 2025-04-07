import "@/styles/globals.css"

// src/app/admin/page.js
export default function AdminPage() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Admin Dashboard</h1>
      <p className="mt-4 text-lg text-gray-700">
        Welcome to the Admin Dashboard. Here you can manage all aspects of the
        application including:
      </p>
      <ul className="mt-4 space-y-2">
        <li>🏠 View and manage rooms</li>
        <li>👥 Manage users and their roles</li>
        <li>📅 View and manage bookings</li>
        <li>⚙️ Update application settings</li>
      </ul>
      <p className="mt-4 text-sm text-gray-500">
        Please use the sidebar to navigate to the relevant sections.
      </p>
    </div>
  );
}
