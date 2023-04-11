import React from "react";
import avatar from "../../public/avatar.jpg";
// Import Swiper React components
import { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css"; // core Swiper
import Image from "next/image";
import { testimonials } from "@/utils/data";
// import 'swiper/modules/autoplay/autoplay.min.css'; // core Swiper
const TestimonialSection = () => {
  return (
    <section className="testimony-section py-10 bg-[#f37a233e]">
      <div className="w-11/12 mx-auto">
        <div className="flex flex-col lg:flex-row gap-5">
          <div className="md:w-1/5 w-full flex items-center">
            <div className="mt-5">
              <p className="md:text-5xl text-3xl mb-3 font-semibold">
                Testmonials
              </p>
              <p className="text-base">What my clients say</p>
            </div>
          </div>
          <div className="md:w-4/5 w-full">
            <Swiper
              modules={[Autoplay, Navigation]}
              spaceBetween={15}
              slidesPerView={2}
              navigation
              autoplay
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 50,
                },
                427: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                // when window width is <= 999px
                769: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                999: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
              }}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
            >
              {testimonials.map((testimonial) => (
                <SwiperSlide key={testimonial.id} className="">
                  <div className="p-5 bg-white shadow-md rounded-xl lg:min-h-[220px] md:min-h-[350px] min-h-[220px] flex flex-col justify-between">
                    <div className="mb-5">
                      <p>{testimonial.message}</p>
                    </div>
                    <div>
                      <div className="flex items-center">
                        <Image
                          src={avatar}
                          alt=""
                          className="rounded-full h-14 w-14 mr-3"
                        />
                        <div>
                          <h5 className="mb-0 font-semibold text-lg">{testimonial.name}</h5>
                          <p className="mb-0">{testimonial.role}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
