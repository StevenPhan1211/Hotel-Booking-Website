import { Carousel } from "flowbite-react";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Slider full màn hình */}
      <div className="relative w-screen h-screen overflow-hidden">
        <Carousel
          slideInterval={5000}
          className="h-screen w-screen [&>div]:h-full [&>div]:w-full"
        >
          <div className="relative h-screen w-screen">
            <Image
              src="/slider/slider01.jpg"
              alt="Slide 1"
              layout="fill"
              objectFit="cover"
              priority
            />
          </div>

          <div className="relative h-screen w-screen">
            <Image
              src="/slider/slider02.jpg"
              alt="Slide 2"
              layout="fill"
              objectFit="cover"
              priority
            />
          </div>

          <div className="relative h-screen w-screen">
            <Image
              src="/slider/slider03.jpg"
              alt="Slide 3"
              layout="fill"
              objectFit="cover"
              priority
            />
          </div>

          <div className="relative h-screen w-screen">
            <Image
              src="/slider/slider04.jpg"
              alt="Slide 4"
              layout="fill"
              objectFit="cover"
              priority
            />
          </div>

          <div className="relative h-screen w-screen">
            <Image
              src="/slider/slider05.jpg"
              alt="Slide 5"
              layout="fill"
              objectFit="cover"
              priority
            />
          </div>
        </Carousel>
      </div>

      {/* Nội dung bên dưới slider */}
      <section className="text-center px-6 py-16 bg-white">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-800 mb-4 uppercase tracking-wide">
          NGHỈ DƯỠNG NĂM SAO TẠI THÀNH PHỐ HỒ CHÍ MINH
        </h2>
        <div className="w-20 h-1 bg-gold mx-auto mb-6"></div>
        <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto mb-6">
          Đại diện cho sự thanh lịch và lòng hiếu khách tinh tế của người Nhật,
          Khách Sạn Nikko Saigon là không gian nghỉ ngơi rộng rãi và sang trọng
          dành cho khách du lịch và doanh nhân, dịch vụ ẩm thực tinh tế sẽ làm
          hài lòng ngay cả những thực khách sành điệu khó tính nhất. Với đội ngũ
          nhân viên nhiệt tình luôn cung cấp các dịch vụ tốt nhất để đảm bảo sự
          hài lòng cho khách trong mỗi lần lưu trú.
        </p>
        <ul className="text-gray-600 space-y-2">
          <li>Không gian yên bình giữa trung tâm thành phố</li>
          <li>Buffet tối hải sản được ưa chuộng</li>
          <li>Buffet sáng phong phú</li>
          <li>Sân vườn rộng rãi dành cho tiệc cưới và sự kiện đặc biệt</li>
        </ul>
      </section>
    </>
  );
}
