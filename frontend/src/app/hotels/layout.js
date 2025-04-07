import "@/styles/globals.css";
import Header from "@/components/hotels/Header"; // Import Header component
import BreadcrumbNav from "@/components/hotels/BreadcrumbNav";

export const metadata = {
  title: "Booking | HTH Booking",
  description: "HTH Booking Hotel - Tìm khách sạn phù hợp",
  icons: "/logo/logo-icon.png",
};

export default function HotelsLayout({ children }) {
  // Định nghĩa breadcrumb dựa trên đường dẫn
  const breadcrumbRoutes = [
    { label: "Trang chủ", href: "/" },
    { label: "Khách sạn", href: "/hotels" }, // Trang danh sách khách sạn
  ];

  return (
    <html lang="vi">
      <head />
      <body className="bg-white text-gray-800">
        <Header /> {/* Sử dụng Header component */}
        {/* Breadcrumb */}
        <div className="max-w-[1200px] mx-auto px-4 mt-4">
          <BreadcrumbNav routes={breadcrumbRoutes} />
        </div>
        {/* Bố cục chính */}
        <section className="max-w-[1200px] mx-auto mt-6 px-4">
          {/* Sidebar bộ lọc
          <aside className="col-span-1 bg-gray-100 p-4 rounded-lg">
            <h2 className="font-bold text-lg mb-2">Chọn lọc theo:</h2>
            {["Khách sạn", "5 sao"].map((filter, index) => (
              <div key={index}>
                <input type="checkbox" id={filter} className="mr-2" />
                <label htmlFor={filter}>{filter}</label>
              </div>
            ))}
            <h2 className="font-bold text-lg mt-4">Ngân sách</h2>
            <input type="range" className="w-full mt-2" />
          </aside> */}

          {/* Nội dung danh sách khách sạn */}
          <main className="flex flex-wrap gap-6 justify-center">
            {children}
          </main>
        </section>
      </body>
    </html>
  );
}
