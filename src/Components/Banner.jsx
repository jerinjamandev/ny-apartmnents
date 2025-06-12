import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Image from '../assets/images/images.jpg';
import Image2 from '../assets/images/images-2.avif';
import Image3 from '../assets/images/images-3.avif';
import { Fade } from "react-awesome-reveal";

const Banner = () => {

  
    return (
        <div className="w-full h-[60vh] lg:h-[80vh] mt-1">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        className="h-full"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="relative w-full h-full">
            <img
              src={Image}
              className="w-full h-full object-cover"
              alt="Slide 1"
            />
            <div className="absolute inset-0  flex items-center justify-center">
              <div className="text-white text-center p-4">
                <Fade direction="up" cascade damping={0.1} triggerOnce>
                  <h2 className="text-3xl md:text-5xl font-bold">Find Your Perfect Roommate </h2>
                <p className="text-lg mt-2">Connect with like-minded people and secure a safe stay.</p>
                </Fade>
                
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="relative w-full h-full">
            <img
              src={Image2}
              className="w-full h-full object-cover"
              alt="Slide 2"
            />
            <div className="absolute inset-0  flex items-center justify-center">
              <div className="text-white text-center p-4">
                  <Fade direction="up" cascade damping={0.1} triggerOnce>

                <h2 className="text-3xl md:text-5xl font-bold">Affordable Living Options</h2>
                <p className="text-lg mt-2">Browse clean and budget-friendly spaces.</p>
                  </Fade>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div className="relative w-full h-full">
            <img
              src={Image3}
              className="w-full h-full object-cover"
              alt="Slide 3"
            />
            <div className="absolute inset-0  flex items-center justify-center">
              <div className="text-white text-center p-4">
                  <Fade direction="up" cascade damping={0.1} triggerOnce>

                <h2 className="text-3xl md:text-5xl font-bold">Trusted Community Platform</h2>
                <p className="text-lg mt-2">All roommates and listings are verified for your safety.</p>
                  </Fade>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
    );
};

export default Banner;