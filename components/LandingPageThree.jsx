

import React from 'react'
import Image from 'next/image';
import { useRouter } from 'next/router';
const LandingPageThree = ({ setLandingPage }) => {
    const router = useRouter()
    return (
        <>
            <div className="flex justify-center bg-[#6A5B40] lg:min-h-screen md:py-4">
                <div className="">
                    <div className="container h-full">
                        <div
                            className="g- flex flex-wrap items-center justify-center lg:w-[706px]">
                            <div className="">
                                <div
                                    className="block rounded-lg bg-white">
                                    <div className="g-0 md:flex lg:flex-wrap">
                                        <div className="w-full md:[326px] lg:w-[326px]">
                                            <div className="p-0 rounded ">

                                                <Image src="/images/landingimg3.svg" alt=""
                                                    width={326}
                                                    height={601}
                                                    className='h-[610px] object-cover w-full  md:h-[601px] '
                                                />
                                            </div>
                                        </div>



                                        <div className="relative flex items-center rounded-b-lg md:[326px] lg:w-[326px] lg:rounded-r-lg lg:rounded-bl-none bg-white">
                                            <div className='absolute top-6 md:left-80 lg:left-64 invisible md:visible' onClick={() => setLandingPage(2)}>
                                                <Image src="icons/arrowright.svg" alt=""
                                                    width={40}
                                                    height={10}
                                                />

                                            </div>

                                            <div className="px-14 md:p-6 -mt-80 md:-mt-0">
                                                <h4 className="mb-2 text-[#FFFFFF] md:text-[#000000] text-[22px] md:text-[24px] leading-[36px] font-normal font-serif">
                                                    ESCROW Payments
                                                </h4>
                                                <p className="text-[#FFFFFF] md:text-[#000000] opacity-70 text-[16px] font-normal font-sans leading-[22px] ">
                                                    Be worry free on receiving wrong products, we will pay to sellers only if the right products are delivered to you.
                                                </p>

                                                <div className='mt-20'>
                                                    <button className="flex gap-4  justify-center mx-auto bg-[#6A5B40]  text-white font-bold py-2 px-4 rounded-full w-[280px]" onClick={() => router.push('/login')}>
                                                        <span className='text-[#FFFFFF] text-[16px] leading-[20px] font-bold font-sans'>Get Started</span>
                                                    </button>
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
export default LandingPageThree;