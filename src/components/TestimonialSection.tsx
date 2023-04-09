import React from "react";
import girl from "../../public/girly.jpg";
// Import Swiper React components
import { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css"; // core Swiper
import Image from "next/image";
// import 'swiper/modules/autoplay/autoplay.min.css'; // core Swiper
const TestimonialSection = () => {
  return (
    <section className="testimony-section py-10 bg-[#f37a233e]">
      <div className="w-11/12 mx-auto">
        <div className="flex flex-col md:flex-row gap-5">
          <div className="md:w-1/5 w-full flex items-center">
            <div className="mt-5">
              <p className="md:text-5xl text-3xl mb-3 font-semibold">Testmonials</p>
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
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                // when window width is <= 999px
                769: {
                  slidesPerView: 1,
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
              <SwiperSlide>
                <div className=" p-5 bg-white shadow-md rounded-xl">
                  <div className="mb-5">
                    <p>
                      We were looking for a logo with a touch of modernism. Arlo
                      grasped our needs and produced a stunning design. Awesome
                      to work with Arlo. Incredibly organized, easy to
                      communicate with, responsive with next iterations.
                    </p>
                  </div>
                  <div>
                    <div className="flex items-center">
                      <Image
                        src={girl}
                        alt=""
                        className="rounded-full h-14 w-14 mr-3"
                      />
                      <div>
                        <h5 className="mb-0">John Doe</h5>
                        <p className="mb-0">Freelancer</p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="p-5 bg-white shadow-md rounded-xl">
                  <div className="mb-5">
                    <p>
                      We were looking for a logo with a touch of modernism. Arlo
                      grasped our needs and produced a stunning design. Awesome
                      to work with Arlo. Incredibly organized, easy to
                      communicate with, responsive with next iterations.
                    </p>
                  </div>
                  <div>
                    <div className="flex items-center">
                      <Image
                        src={girl}
                        alt=""
                        className="rounded-full h-14 w-14 mr-3"
                      />
                      <div>
                        <h5 className="mb-0">John Doe</h5>
                        <p className="mb-0">Freelancer</p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className=" p-5 bg-white shadow-md rounded-xl">
                  <div className="mb-5">
                    <p>
                      We were looking for a logo with a touch of modernism. Arlo
                      grasped our needs and produced a stunning design. Awesome
                      to work with Arlo. Incredibly organized, easy to
                      communicate with, responsive with next iterations.
                    </p>
                  </div>
                  <div>
                    <div className="flex items-center">
                      <Image
                        src={girl}
                        alt=""
                        className="rounded-full h-14 w-14 mr-3"
                      />
                      <div>
                        <h5 className="mb-0">John Doe</h5>
                        <p className="mb-0">Freelancer</p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="p-5 bg-white shadow-md rounded-xl">
                  <div className="mb-5">
                    <p>
                      We were looking for a logo with a touch of modernism. Arlo
                      grasped our needs and produced a stunning design. Awesome
                      to work with Arlo. Incredibly organized, easy to
                      communicate with, responsive with next iterations.
                    </p>
                  </div>
                  <div>
                    <div className="flex items-center">
                      <Image
                        src={girl}
                        alt=""
                        className="rounded-full h-14 w-14 mr-3"
                      />
                      <div>
                        <h5 className="mb-0">John Doe</h5>
                        <p className="mb-0">Freelancer</p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="p-5 bg-white shadow-md rounded-xl">
                  <div className="mb-5">
                    <p>
                      We were looking for a logo with a touch of modernism. Arlo
                      grasped our needs and produced a stunning design. Awesome
                      to work with Arlo. Incredibly organized, easy to
                      communicate with, responsive with next iterations.
                    </p>
                  </div>
                  <div>
                    <div className="flex items-center">
                      <Image
                        src={girl}
                        alt=""
                        className="rounded-full h-14 w-14 mr-3"
                      />
                      <div>
                        <h5 className="mb-0">John Doe</h5>
                        <p className="mb-0">Freelancer</p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className=" p-5 bg-white shadow-md rounded-xl">
                  <div className="mb-5">
                    <p>
                      We were looking for a logo with a touch of modernism. Arlo
                      grasped our needs and produced a stunning design. Awesome
                      to work with Arlo. Incredibly organized, easy to
                      communicate with, responsive with next iterations.
                    </p>
                  </div>
                  <div>
                    <div className="flex items-center">
                      <Image
                        src={girl}
                        alt=""
                        className="rounded-full h-14 w-14 mr-3"
                      />
                      <div>
                        <h5 className="mb-0">John Doe</h5>
                        <p className="mb-0">Freelancer</p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="p-5 bg-white shadow-md rounded-xl">
                  <div className="mb-5">
                    <p>
                      We were looking for a logo with a touch of modernism. Arlo
                      grasped our needs and produced a stunning design. Awesome
                      to work with Arlo. Incredibly organized, easy to
                      communicate with, responsive with next iterations.
                    </p>
                  </div>
                  <div>
                    <div className="flex items-center">
                      <Image
                        src={girl}
                        alt=""
                        className="rounded-full h-14 w-14 mr-3"
                      />
                      <div>
                        <h5 className="mb-0">John Doe</h5>
                        <p className="mb-0">Freelancer</p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
