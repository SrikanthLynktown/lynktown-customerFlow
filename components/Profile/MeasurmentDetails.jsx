import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Navbar from "../Header/Navbar";
import Image from "next/image";

const MeasurmentDetails = () => {
    return (
        <>
            <div>
                <div className='invisible md:visible'>
                    <Navbar />
                </div>


                <div className='p-4 md:p-0 visible md:invisible border-b-[1px] border-[#000000] border-opacity-20 -mt-20 md:-mt-0'>
                    <div className="flex w-full flex-wrap items-center justify-between">
                        <div
                            className="flex gap-6 text-[#0A0A0A]">
                            <Image
                                src='icons/arrowicon.svg'
                                alt=''
                                width={12}
                                height={12}
                            />
                            <div className='text-[#0A0A0A] text-[18px] leading-[28px] font-normal font-serif '>Measurements</div>
                        </div>

                    </div>
                </div>


                <div className='invisible md:visible md:-mt-8 -mt-0 '>
                    <div className='md:px-64  flex gap-1 '>
                        <span className='text-[#9D8E73] text-[18px] font-medium font-sans '>Home</span>
                        <span className='text-[#9D8E73] text-[18px] font-medium font-sans'>/</span>
                        <span className='text-[#9D8E73] text-[18px] font-medium font-sans'>Men</span>
                        <span className='text-[#9D8E73] text-[18px] font-medium font-sans'>/</span>
                        <span className='text-[#6A5B40] text-[18px] font-medium font-sans'>Measurements</span>


                    </div>

                </div>

                <section className="text-gray-600 body-font overflow-hidden">
                    <div className="container px-5 md:py-4 mx-auto">
                        <div className="lg:w-4/5 mx-auto flex flex-wrap gap-6">

                            <div className="bg-[#E6E3DC] h-[710px] md:h-[840px]  md:mt-7 lg:w-[264px] w-full">
                                <div className=" lg:h-[400px ">

                                    <Swiper className="mySwiper">
                                        <SwiperSlide>
                                            <Image width={264} height={776} alt="ecommerce" className=" md:h-[776px] h-[700px]  mx-aut justify-cente p-4 w-[264px] lg:py- mb- lg:mb-0  object-cover object-center rounded" src="/images/man.svg" />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                        <Image width={264} height={100} alt="ecommerce" className="md:h-[776px] mx-aut justify-cente p-4 w-[264px] h-full  lg:py- mb- lg:mb-0  object-cover object-center rounded" src="/images/man.svg" />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                        <Image width={264} height={100} alt="ecommerce" className="md:h-[776px] mx-aut justify-cente p-4 w-[264px] h-full  lg:py- mb- lg:mb-0  object-cover object-center rounded" src="/images/man.svg" />
                                        </SwiperSlide>
                                    </Swiper>
                                </div>
                            </div>
                            <div className="lg:w-[569px] w-full pt-7">

                                <div className="md:w-[425px] px-4 md:h-[223px] border-[1px] border-[#857250] bg-[#E6E3DC] rounded-lg ">
                                    <div className="flex gap-1">
                                        <h6 className="text-[#000000] text-[30px] leading-[48px] font-normal font-sans">Name: </h6>
                                        <p className="pt-1 text-[#000000] text-[20px] leading-[48px] font-normal font-sans">Mallikarjun</p>
                                    </div>
                                    <div className="flex gap-1">
                                        <h6 className="text-[#000000] text-[30px] leading-[48px] font-normal font-sans">Gender: </h6>
                                        <p className="pt-1 text-[#000000] text-[20px] leading-[48px] font-normal font-sans">Male</p>
                                    </div>
                                    <div className="flex gap-1">
                                        <h6 className="text-[#000000] text-[30px] leading-[48px] font-normal font-sans">Standard size: </h6>
                                        <p className="pt-1 text-[#000000] text-[20px] leading-[48px] font-normal font-sans">S</p>
                                    </div>
                                    <div className="flex gap-1">
                                        <h6 className="text-[#000000] text-[30px] leading-[48px] font-normal font-sans">Fitting: </h6>
                                        <p className="pt-1 text-[#000000] text-[20px] leading-[48px] font-normal font-sans">Regular</p>
                                    </div>

                                </div>


                                {/* upper body */}
                                <div className="py-10 md:w-[569px]">
                                    <h6 className="text-[#000000] text-[30px] leading-[25px] font-bold font-sans">Upper Body</h6>
                                    <div className="flex flex-wrap justify-betwee pt-6 md:w-[569px] bg-red-3 w-[257px] md:gap-12">
                                        <div className="flex  w-[257px] justify-between pb-4 ">
                                            <p className="text-[#494848] text-[17px] leading-[18px] font-medium font-sans mt-[4px] ">1. Length</p>
                                            {/* <p className="text-[#000000] text-[14px] leading-[16px] font-normal font-sans  border-[1px] pt-[6px] border-[#857250]  w-[74px] h-[30px] text-center">40</p> */}
                                            <input type="text" className="text-[#000000] text-[14px] leading-[16px] font-normal font-sans  border-[1px]  border-[#857250]  w-[74px] h-[30px] text-center" placeholder="40" />

                                        </div>
                                        <div className="flex w-[257px] justify-between">
                                            <p className="text-[#494848] text-[17px] md:w-[117px] leading-[18px] font-medium font-sans mt-[4px]">2. Neck round</p>
                                            <input type="text" className="text-[#000000] text-[14px] leading-[16px] font-normal font-sans  border-[1px]  border-[#857250]  w-[74px] h-[30px] text-center" placeholder="25.50" />
                                        </div>
                                    </div>



                                    <div className="flex flex-wrap justify-betwee pt-2 md:w-[569px] bg-red-3 w-[257px] md:gap-12">
                                        <div className="flex  w-[257px] justify-between pb-4 ">
                                            <p className="text-[#494848] text-[17px] leading-[18px] font-medium font-sans mt-[4px] ">3. Back neck</p>
                                            <input type="text" className="text-[#000000] text-[14px] leading-[16px] font-normal font-sans  border-[1px]  border-[#857250]  w-[74px] h-[30px] text-center" placeholder="15.25" />

                                        </div>
                                        <div className="flex w-[257px] justify-between">
                                            <p className="text-[#494848] text-[17px] md:w-[117px] leading-[18px] font-medium font-sans mt-[4px]">4. Font neck</p>
                                            <input type="text" className="text-[#000000] text-[14px] leading-[16px] font-normal font-sans  border-[1px]  border-[#857250]  w-[74px] h-[30px] text-center" placeholder="10.25" />
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap justify-betwee pt-2 md:w-[569px] bg-red-3 w-[257px] md:gap-12">
                                        <div className="flex  w-[257px] justify-between pb-4 ">
                                            <p className="text-[#494848] text-[17px] leading-[18px] font-medium font-sans mt-[4px] ">5. Chest</p>
                                            {/* <p className="text-[#000000] text-[14px] leading-[16px] font-normal font-sans  border-[1px] pt-[6px] border-[#857250]  w-[74px] h-[30px] text-center">40</p> */}
                                            <input type="text" className="text-[#000000] text-[14px] leading-[16px] font-normal font-sans  border-[1px]  border-[#857250]  w-[74px] h-[30px] text-center" placeholder="18" />

                                        </div>
                                        <div className="flex w-[257px] justify-between">
                                            <p className="text-[#494848] text-[17px] md:w-[117px] leading-[18px] font-medium font-sans mt-[4px]">6. Shoulder</p>
                                            <input type="text" className="text-[#000000] text-[14px] leading-[16px] font-normal font-sans  border-[1px]  border-[#857250]  w-[74px] h-[30px] text-center" placeholder="38" />
                                        </div>
                                    </div>

                                    <div className="flex flex-wrap justify-betwee pt-2 md:w-[569px] bg-red-3 w-[257px] md:gap-12">
                                        <div className="flex  w-[257px] justify-between pb-4 ">
                                            <p className="text-[#494848] text-[17px] leading-[18px] font-medium font-sans mt-[4px] ">7. Arm</p>
                                            {/* <p className="text-[#000000] text-[14px] leading-[16px] font-normal font-sans  border-[1px] pt-[6px] border-[#857250]  w-[74px] h-[30px] text-center">40</p> */}
                                            <input type="text" className="text-[#000000] text-[14px] leading-[16px] font-normal font-sans  border-[1px]  border-[#857250]  w-[74px] h-[30px] text-center" placeholder="12" />

                                        </div>
                                        <div className="flex w-[257px] justify-between">
                                            <p className="text-[#494848] text-[17px] md:w-[117px] leading-[18px] font-medium font-sans mt-[4px]">8. Waist</p>
                                            <input type="text" className="text-[#000000] text-[14px] leading-[16px] font-normal font-sans  border-[1px]  border-[#857250]  w-[74px] h-[30px] text-center" placeholder="40" />
                                        </div>
                                    </div>

                                </div>
                                {/* upper body */}



                                {/* Lower body */}
                                <div className=" md:w-[450px]">
                                    <h6 className="text-[#000000] text-[30px] leading-[25px] font-bold font-sans">Lower Body</h6>
                                    <div className="flex flex-wrap  justify-betwee md:gap-10 pt-6  w-[px] md:gap-">
                                        <div className="flex  w-[220px] md:w-[190px] md:gap-6 justify-between pb-4 ">
                                            <p className="text-[#494848] text-[17px] leading-[18px] font-medium font-sans mt-[4px] ">1. Length</p>
                                            <input type="text" className="text-[#000000] text-[14px] leading-[16px] font-normal font-sans  border-[1px]  border-[#857250]  w-[74px] h-[30px] text-center" placeholder="40" />

                                        </div>

                                        <div className="flex  w-[220px] md:w-[190px] md:gap-6 justify-between md:ml-6">
                                            <p className=" text-[#494848] md:-ml-6 text-[17px] md:w-[117px] leading-[18px] font-medium font-sans mt-[4px]">2. Ankle</p>
                                            <input type="text" className="text-[#000000] gap-40 text-[14px] leading-[16px] font-normal font-sans  border-[1px]  border-[#857250]  w-[74px] h-[30px] text-center" placeholder="15" />
                                        </div>
                                    </div>

                                    <div className="flex flex-wrap justify-betwee md:gap-10 pt-2  w-[px] md:gap-">
                                        <div className="flex  w-[220px] md:w-[190px] md:gap-6 justify-between pb-4 ">
                                            <p className="text-[#494848] text-[17px] leading-[18px] font-medium font-sans mt-[4px] ">3. Hip</p>
                                            <input type="text" className="text-[#000000] text-[14px] leading-[16px] font-normal font-sans  border-[1px]  border-[#857250]  w-[74px] h-[30px] text-center" placeholder="35" />

                                        </div>

                                        <div className="flex w-[220px] md:w-[190px] md:gap-6 justify-between md:ml-6">
                                            <p className="text-[#494848] md:-ml-6 text-[17px] md:w-[117px] leading-[18px] font-medium font-sans mt-[4px]">4. Waist</p>
                                            <input type="text" className="text-[#000000] gap-40 text-[14px] leading-[16px] font-normal font-sans  border-[1px]  border-[#857250]  w-[74px] h-[30px] text-center" placeholder="25" />
                                        </div>
                                    </div>


                                    <div className="flex flex-wrap justify-betwee md:gap-10 pt-2  w-[px] md:gap-">
                                        <div className="flex  w-[220px] md:w-[190px] md:gap-6 justify-between pb-4 ">
                                            <p className="text-[#494848] text-[17px] leading-[18px] font-medium font-sans mt-[4px] ">5. Thigh</p>
                                            <input type="text" className="text-[#000000] text-[14px] leading-[16px] font-normal font-sans  border-[1px]  border-[#857250]  w-[74px] h-[30px] text-center" placeholder="25" />

                                        </div>

                                        <div className="flex w-[220px] md:w-[190px] md:gap-6 justify-between md:ml-6">
                                            <p className="text-[#494848] md:-ml-6 text-[17px] md:w-[117px] leading-[18px] font-medium font-sans mt-[4px]">6. Knee</p>
                                            <input type="text" className="text-[#000000] gap-40 text-[14px] leading-[16px] font-normal font-sans  border-[1px]  border-[#857250]  w-[74px] h-[30px] text-center" placeholder="15" />
                                        </div>
                                    </div>


                                </div>
                                {/* Lower body */}


                                <div className="md:py-6">
                                    <button className="invisible md:visible w-[190px] h-[45px] bg-[#6A5B40]  text-[#FFFFFF] text-[16px] leading-[20px] font-bold font-sans rounded">
                                        Edit
                                    </button>

                                    <button className="visible md:invisible w-full h-[45px] border-[1px] border-[#000000] text-[#6A5B40] text-[16px] leading-[20px] font-bold font-sans rounded">
                                        Edit
                                    </button>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}
export default MeasurmentDetails;