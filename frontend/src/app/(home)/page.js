import { Carousel } from "flowbite-react";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Slider full màn hình */}
      <div className="relative w-full h-screen overflow-hidden">
        <Carousel
          slideInterval={5000}
          className="h-screen w-full [&>div]:h-full [&>div]:w-full"
        >
          <div className="relative h-screen w-full">
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
          DỊCH VỤ ĐẶT PHÒNG KHÁCH SẠN ĐỈNH CAO NHẤT 
        </h2>
        <div className="w-20 h-1 bg-gold mx-auto mb-6"></div>
        <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto mb-6">
          Với đội ngũ nhân viên chuyên nghiệp và tận tâm, chúng tôi cam kết mang đến cho bạn những trải nghiệm tuyệt vời nhất trong suốt thời gian lưu trú tại khách sạn của chúng tôi. 
          Từ dịch vụ phòng 24/7 đến các tiện nghi hiện đại, chúng tôi luôn sẵn sàng đáp ứng mọi nhu cầu của bạn.
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
