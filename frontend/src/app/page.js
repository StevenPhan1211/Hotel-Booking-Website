import { Carousel } from "flowbite-react";

export default function Home() {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel>
        <img src="/slider/slider01.jpg" alt="..." />
        <img src="/slider/slider02.jpg" alt="..." />
        <img src="/slider/slider03.jpg" alt="..." />
        <img src="/slider/slider04.jpg" alt="..." />
        <img src="/slider/slider05.jpg" alt="..." />
      </Carousel>
    </div>
  );
}
