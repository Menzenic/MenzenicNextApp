"use client";

// import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import './home.css'


export default function home() {
  return (
    <div className="home-section">
      <Swiper
        slidesPerView={1}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        speed={2000}
      >
        <SwiperSlide className="">
          <>
            <div className="h-[400px] sm:h-[682px] header-image"></div>
            <div className="absolute w-screen top-[12.688rem] sm:top-[17.688rem] left-[3.188rem]">
              <div className="text-[24px] sm:text-5xl text-white text-left font-['Arial'] leading-[35px] sm:leading-[55px] font-normal">
                <p>When it comes to your body,</p>
                <p className="mt-3 text-center sm:text-left">
                  {" "}
                  cleanliness is key
                </p>
              </div>

              <div className=" mt-5 flex items-center w-full justify-center sm:justify-start">
                {/* <Button
                  title={"Shop Now"}
                  onClick={() => router.push("/products")}
                /> */}
              </div>
            </div>
          </>
        </SwiperSlide>

        <SwiperSlide>
          <>
            <div className="h-[680px] w-screen bg-[#080808] text-white relative flex justify- items-center">
              <img
								// src={HairRemovalSprayBgRemPng}
                src="Images\png\HairRemovalSprayBgRem.08913c67c6d9439a37b1.png"
								alt="Hair Removal Spray"
							/>
              {/* <img src="Public/Images\Pngs\HairRemovalSprayBgRem.08913c67c6d9439a37b1.png" alt="" /> */}
              <div className="flex flex-col h-[474px] ml-40">
                <p className="text-4xl ml-20">WHY BUY FROM US?</p>
                <p className="italic mt-10 text-2xl max-w-[80%]">
                  The best product in the hair removal space - if you don't
                  believe us, try it out for yourself.
                </p>
                <div className="mt-7 flex items-center relative text-2xl h-[203px]">
                  {/* <HomeDoubleDotBar className="absolute top-0" /> */}
                  <p className="absolute top-9 left-10">
                    Saves you time, removes hair in just 5 mins.
                  </p>
                  <p className="absolute top-[120px] left-10">
                    No side effects, applicable on all skin types.
                  </p>
                  <div className="ml-4 h-[86px] flex flex-col justify-between"></div>
                </div>
                {/* <Button
                  title={"Shop "}
                  onClick={() => router.push("/products")}
                /> */}
              </div>
              {/* <HomeDesign className="absolute bottom-0" /> */}
            </div>
          </>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
