"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";

const techImages = [
  "/Images/home/Stacks/TechIcon1.png",
  "/Images/home/Stacks/TechIcon2.png",
  "/Images/home/Stacks/TechIcon3.png",
  "/Images/home/Stacks/TechIcon4.png",
  "/Images/home/Stacks/TechIcon5.png",
  "/Images/home/Stacks/TechIcon6.png",
  "/Images/home/Stacks/TechIcon7.png",
  "/Images/home/Stacks/TechIcon8.png",
  "/Images/home/Stacks/TechIcon9.png",
];

export default function OurStackSection() {
  return (
    <section className="bg-white">
      <div className="flex flex-col md:gap-20 gap-5 2xl:px-80 lg:px-40 px-10">
        <h3 className="text-center">Our Tech Stack</h3>

        <div className="w-full">
          <Swiper
            modules={[Autoplay, FreeMode]}
            loop={true}
            speed={9000}
            slidesPerView={"auto"}
            spaceBetween={24}
            grabCursor={true}
            freeMode={{
              enabled: true,
              momentum: true,
            }}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              pauseOnMouseEnter: false,
            }}
            className="w-full"
          >
            {[...techImages, ...techImages].map((src, idx) => (
              <SwiperSlide
                key={idx}
                className="w-auto! flex justify-center items-center"
              >
                <div className="xl:mx-14 md:mx-10 sm:mx-8 mx-6 flex items-center justify-center">
                  <Image
                    src={src}
                    alt={`tech-${idx}`}
                    width={80}
                    height={80}
                    className="md:w-24 sm:w-16 w-10 object-contain"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="w-full">
          <Swiper
            modules={[Autoplay, FreeMode]}
            loop={true}
            speed={9000}
            slidesPerView={"auto"}
            spaceBetween={24}
            grabCursor={true}
            freeMode={{
              enabled: true,
              momentum: true,
            }}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              pauseOnMouseEnter: false,
              reverseDirection: true,
            }}
            className="w-full"
          >
            {[...techImages, ...techImages].map((src, idx) => (
              <SwiperSlide
                key={idx}
                className="w-auto! flex justify-center items-center"
              >
                <div className="xl:mx-14 md:mx-10 sm:mx-8 mx-6 flex items-center justify-center">
                  <Image
                    src={src}
                    alt={`tech-${idx}`}
                    width={80}
                    height={80}
                    className="md:w-24 sm:w-16 w-10 object-contain"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
