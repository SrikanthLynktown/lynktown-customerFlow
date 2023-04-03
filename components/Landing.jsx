import React from 'react'
import Image from 'next/image';
const Landing = ({ setLandingPage }) => {
    return (
        <>
            <div className="flex justify-center md:bg-[#6A5B40] lg:min-h-scree md:py-6  ">
                <div className="">
                    <div className="container h-ful">
                        <div
                            className="flex flex-wrap items-center justify-center w-[375px] lg:w-[706px]">
                            <div className="">
                                <div
                                    className="block rounded-lg bg-white">
                                    <div className="g-0 md:flex lg:flex-wrap">
                                        <div className=" md:w-[326px] lg:w-[326px]">
                                            <div className="p- rounded">
                                                <Image src="images/img1.svg" alt=""
                                                    width={40}
                                                    height={60}
                                                    className='h-[610px] object-cover w-full  md:h-[601px] '
                                                />
                                            </div>
                                        </div>



                                        <div className="relative flex items-center rounded-b-lg md:w-[326px] lg:w-[326px] lg:rounded-r-lg lg:rounded-bl-none bg-white">
                                            <div className='absolute top-6 md:left-60 lg:left-64' onClick={() => setLandingPage(2)}>
                                                <Image src="icons/arrowright.svg" alt=""
                                                    width={40}
                                                    height={10}
                                                />

                                            </div>

                                            <div className="px-12  md:p-4 -mt-80 md:-mt-0">
                                                <h4 className="mb-2 text-white md:text-[#000000] text-[20px] md:text-[24px] leading-[36px] font-normal font-serif">
                                                    Buy Products You Love 💕
                                                </h4>
                                                <p className="text-[#FFFFFF] md:text-[#000000] opacity-70 text-[16px] font-normal font-sans leading-[22px] ">
                                                    Purchase anything you like online through LynkTown Lynks.
                                                </p>




                                                <div className="flex mt-20 gap-2 mx-auto justify-center">
                                                    <div className='h-1 text-[#FFFFFF] md:text-[#000000] text-[20px] leading-[28px] font-normal font-serif'>01</div>
                                                    <div class="w-[132px]  bg-gray-200 rounded-full h-1 mt-4">
                                                        <div class="bg-[#000000] h-1 rounded-full w-[44px]" ></div>
                                                    </div>
                                                    <div className='h-1 text-[#FFFFFF] md:text-[#000000] text-[20px] leading-[28px] font-normal font-serif'>03</div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
export default Landing;