import "../styles/globals.css";
import Footer, { Component, Endpage } from "./components/footer";
import Header from "./components/header";
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
      <body className="bg-white text-gray-800">
        <Header />
        <main>{children}</main>
        <Endpage />
      </body>
    </html>
  );
}


// Footer Component
// function Footer() {
//   return (
//     <footer className="bg-gray-900 text-white py-6 mt-10">
//       <div className="container mx-auto text-center">
//         <p>
//           &copy; {new Date().getFullYear()} Hotel Nikko Saigon. All rights
//           reserved.
//         </p>
//       </div>
//     </footer>
//   );
// }
