import "@/styles/globals.css";
import { Endpage } from "@/components/home/footer";
import Header from "@/components/home/header";
import { ThemeModeScript } from "flowbite-react"; // Đảm bảo đường dẫn đúng

export const metadata = {
  title: "Booking Hotel",
  description: "HTH Booking Hotel - where you can book your hotel",
  icons: "/logo/logo-icon.png",
};

export default function RootLayout({ children }) {
  return (
    <html suppressHydrationWarning lang="vi">
      <head>
        <ThemeModeScript />
      </head>
      <body className="bg-white text-gray-800 overflow-x-hidden overflow-y-auto">
        <Header />
        <main>{children}</main>
        <Endpage />
      </body>
    </html>
  );
}
