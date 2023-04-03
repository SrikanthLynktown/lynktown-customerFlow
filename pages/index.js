import Head from "next/head";
import Image from "next/image";
// import { Inter } from "next/font/google";
import Landing from "@/components/Landing";
import LandingTwo from "@/components/Landing2";
import LandingPageThree from "@/components/LandingPageThree";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [LandingPage, setLandingPage] = useState(1)
  return (
    <>
      <div>
        <div className="invisible md:visible md">
          {
            LandingPage === 1 && <Landing setLandingPage={setLandingPage} />

          }

          {
            LandingPage === 2 && <LandingTwo setLandingPage={setLandingPage} />

          }

          {
            LandingPage === 3 && <LandingPageThree setLandingPage={setLandingPage} />

          }
          </div>
          <div className="visible md:invisible -mt-[610px]  md:mt-[]">
            <Swiper className="mySwiper">
              <SwiperSlide>
                <Landing />
              </SwiperSlide>
              <SwiperSlide>
                <LandingTwo />
              </SwiperSlide>
              <SwiperSlide>
                <LandingPageThree />
              </SwiperSlide>
            </Swiper>
          </div>     
      </div>
    </>
  );
}
