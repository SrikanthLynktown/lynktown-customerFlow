

import React from 'react'
import Image from 'next/image';
const LandingTwo = ({ setLandingPage }) => {
    return (
        <>
            <div className="flex justify-center bg-[#6A5B40] lg:min-h-screen md:py-6 " >
                <div className="">
                    <div className="container h-full">
                        <div
                            className="g- flex flex-wrap items-center justify-center md:w-[706px]">
                            <div className="">
                                <div
                                    className="block rounded-lg bg-white">
                                    <div className="g-0 md:flex lg:flex-wrap">
                                        <div className="w-full md:w-[326px] lg:w-[326px]">
                                            <div className="p-0 rounded">

                                                <Image src="/images/3.svg" alt=""
                                                    width={326}
                                                    height={601}
                                                    className='h-[610px] object-cover w-full  md:h-[601px] '
                                                />
                                            </div>
                                        </div>



                                        <div className="relative flex items-center rounded-b-lg md:w-[326px] lg:w-[326px] lg:rounded-r-lg lg:rounded-bl-none bg-white">
                                            <div className='flex gap-4 absolute top-6 left-52 invisible md:visible'>
                                                <Image src="icons/arrowleft.svg" alt=""
                                                    onClick={() => setLandingPage(1)}
                                                    width={40} height={10}
                                                />
                                                <Image src="icons/arrowright.svg" alt="" onClick={() => setLandingPage(3)}
                                                    width={40}
                                                    height={10}
                                                />

                                            </div>

                                            <div className="px-14 md:p-6 -mt-80 md:-mt-0">
                                                <h4 className="mb-2 text-cente text-[#FFFFFF] md:text-[#000000] text-[19px]  leading-[36px] font-normal font-serif">
                                                    Readymade and Customized
                                                </h4>
                                                <p className="px- text-[#FFFFFF] md:text-[#000000] flext justify-center  opacity-70  md:text-[16px] font-normal font-sans leading-[22px] ">
                                                    Buy the way you want it. Customized or ready-made products, it’s your choice
                                                </p>
                                                <div className="flex mt-20 gap-2 mx-auto justify-center">
                                                    <div className='h-1 text-[#FFFFFF] md:text-[#000000] text-[20px] leading-[28px] font-normal font-serif'>02</div>
                                                    <div class="w-[132px]  bg-gray-200 rounded-full h-1 mt-4">
                                                        <div class="bg-[#000000] h-1 rounded-full  w-[44px] ml-5" ></div>
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
export default LandingTwo;