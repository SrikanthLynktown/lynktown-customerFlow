import React from 'react';
import Navbar from '../Header/Navbar';
import Image from 'next/image';
const UserCard = () => {
    return (
        <>

            {/* lynks card */}


            <div className=''>
                <div className='invisible md:visible'>
                    <Navbar />
                </div>

                <div className='p-4 md:p-0 visible md:invisible border-b-[1px] border-[#000000] border-opacity-20 -mt-20 md:-mt-0'>
                    <div className="flex w-full flex-wrap items-center justify-between">
                        <div
                            className="flex gap-6 text-[#0A0A0A]">
                            <Image
                                src='icons/arrowicon.svg'
                                width={12}
                                height={12}
                            />
                            <div className='text-[#0A0A0A] text-[18px] leading-[28px] font-normal font-serif '>Lynks</div>
                        </div>
                        {/* <div className="relative flex items-center">
                            <div className="relative ">
                                <a className="hidden-arrow  flex" href="#">
                                    <span>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            className="w-[24px] h-[24px]">
                                            <path
                                                fill-rule="evenodd"
                                                d="M5.25 9a6.75 6.75 0 0113.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 01-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 11-7.48 0 24.585 24.585 0 01-4.831-1.244.75.75 0 01-.298-1.205A8.217 8.217 0 005.25 9.75V9zm4.502 8.9a2.25 2.25 0 104.496 0 25.057 25.057 0 01-4.496 0z"
                                                clip-rule="evenodd" />
                                        </svg>
                                    </span>

                                </a>
                            </div>
                        </div> */}
                    </div>
                </div>

                <div className='invisible md:visible'>
                    <div className='px-10 flex gap-1'>
                        <span className='text-[#9D8E73] text-[18px] font-medium font-sans '>Home</span>
                        <span className='text-[#9D8E73] text-[18px] font-medium font-sans'>/</span>
                        <span className='text-[#6A5B40] text-[18px] font-medium font-sans'>Lynks</span>
                    </div>
                    <div className='px-10 py- md:py-10 flex gap-6 '>
                        <Image
                            src='icons/Arrow 1.svg'
                            width={25}
                            height={17}
                            className='cursor-pointer'
                        />
                        <span className='text-[#6A5B40] text-[42px] leading-[22px] font-normal font-serif '>Lynks</span>
                        <hr class="w-[549px] h-px mt-4 bg-[#9D8E73] border-0 dark:bg-gray-700" />
                    </div>
                </div>
            </div>

            {/* lynks Card */}

            <section class="text-gray-600 body-font">
                <div class="container px-4 py-1 mx-auto">
                    <div class="flex flex-wrap gap-6 w-full">
                        <div class="lg:w-[289px] md:w-1/2  w-full p-4 bg-[#6A5B40] rounded-lg gap-4">
                            <div class="fle justify-cente">
                                <div
                                    class="block max-w-sm rounded-lg bg-white shadow-lg dark:bg-neutral-700">
                                    <a href="#!" data-te-ripple-init data-te-ripple-color="light">
                                        <img
                                            class="rounded-lg w-full"
                                            src="images/Rectangle 4530.svg"
                                            alt="" />
                                    </a>
                                </div>
                            </div>
                            <div class="py-4">
                                <button class="bg-[#3AC267]  text-white text-[10px] md:text-[12px] leading-[13px] md:leading-[16px] font-sans font-medium py-1 px-4 rounded-full">
                                    New
                                </button>

                                <div className='flex text-[#FFFFFF] justify-between pt-2'>
                                    <a href="" className='underline text-[14px] leading-[18px] font-normal font-sans '>u2lynk.com/id=5234</a>
                                    <p className='text-[18px] leading-[28px] font-bold font-sans'>$8000</p>
                                </div>
                                <h6 className='text-white text-[22px] md:text-[20px] leading-[21px] font-normal font-serif '>By Designer name</h6>
                                <p className='text-white text-[12px] leading-[16px] font-medium font-sans pt-2'>Total no of products (1)</p>

                                <div className='flex text-[#FFFFFF] justify-between mt-2'>
                                    <p className='text-[12px] leading-[16px] font-medium font-sans pt-1'>Date : 02 / 12 / 2022 </p>
                                    <a href="" className='underline text-[12px] md:text-[14px] leading-[28px] font-bold font-sans '>View details</a>
                                </div>
                            </div>
                        </div>

                        <div class="lg:w-[289px] md:w-1/2  w-full p-4 bg-[#6A5B40] rounded-lg gap-4">
                            <div class="fle justify-cente">
                                <div
                                    class="block max-w-sm rounded-lg bg-white shadow-lg dark:bg-neutral-700">
                                    <a href="#!" data-te-ripple-init data-te-ripple-color="light">
                                        <img
                                            class="rounded-lg w-full"
                                            src="images/Rectangle 4530.svg"
                                            alt="" />
                                    </a>
                                </div>
                            </div>
                            <div class="py-4">
                                <button class="bg-[#3AC267]  text-white text-[10px] md:text-[12px] leading-[13px] md:leading-[16px] font-sans font-medium py-1 px-4 rounded-full">
                                    New
                                </button>

                                <div className='flex text-[#FFFFFF] justify-between pt-2'>
                                    <a href="" className='underline text-[14px] leading-[18px] font-normal font-sans '>u2lynk.com/id=5234</a>
                                    <p className='text-[18px] leading-[28px] font-bold font-sans'>$8000</p>
                                </div>
                                <h6 className='text-white text-[22px] md:text-[20px] leading-[21px] font-normal font-serif '>By Designer name</h6>
                                <p className='text-white text-[12px] leading-[16px] font-medium font-sans pt-2'>Total no of products (1)</p>

                                <div className='flex text-[#FFFFFF] justify-between mt-2'>
                                    <p className='text-[12px] leading-[16px] font-medium font-sans pt-1'>Date : 02 / 12 / 2022 </p>
                                    <a href="" className='underline text-[12px] md:text-[14px] leading-[28px] font-bold font-sans '>View details</a>
                                </div>
                            </div>
                        </div>
                        <div class="lg:w-[289px] md:w-1/2  w-full p-4 bg-[#6A5B40] rounded-lg gap-4">
                            <div class="fle justify-cente">
                                <div
                                    class="block max-w-sm rounded-lg bg-white shadow-lg dark:bg-neutral-700">
                                    <a href="#!" data-te-ripple-init data-te-ripple-color="light">
                                        <img
                                            class="rounded-lg w-full"
                                            src="images/Rectangle 4530.svg"
                                            alt="" />
                                    </a>
                                </div>
                            </div>
                            <div class="py-4">
                                <button class="bg-[#3AC267]  text-white text-[10px] md:text-[12px] leading-[13px] md:leading-[16px] font-sans font-medium py-1 px-4 rounded-full">
                                    New
                                </button>

                                <div className='flex text-[#FFFFFF] justify-between pt-2'>
                                    <a href="" className='underline text-[14px] leading-[18px] font-normal font-sans '>u2lynk.com/id=5234</a>
                                    <p className='text-[18px] leading-[28px] font-bold font-sans'>$8000</p>
                                </div>
                                <h6 className='text-white text-[22px] md:text-[20px] leading-[21px] font-normal font-serif '>By Designer name</h6>
                                <p className='text-white text-[12px] leading-[16px] font-medium font-sans pt-2'>Total no of products (1)</p>

                                <div className='flex text-[#FFFFFF] justify-between mt-2'>
                                    <p className='text-[12px] leading-[16px] font-medium font-sans pt-1'>Date : 02 / 12 / 2022 </p>
                                    <a href="" className='underline text-[12px] md:text-[14px] leading-[28px] font-bold font-sans '>View details</a>
                                </div>
                            </div>
                        </div>

                        <div class="lg:w-[289px] md:w-1/2  w-full p-4 bg-[#6A5B40] rounded-lg gap-4">
                            <div class="fle justify-cente">
                                <div
                                    class="block max-w-sm rounded-lg bg-white shadow-lg dark:bg-neutral-700">
                                    <a href="#!" data-te-ripple-init data-te-ripple-color="light">
                                        <img
                                            class="rounded-lg w-full"
                                            src="images/Rectangle 4530.svg"
                                            alt="" />
                                    </a>
                                </div>
                            </div>
                            <div class="py-4">
                                <button class="bg-[#3AC267]  text-white text-[10px] md:text-[12px] leading-[13px] md:leading-[16px] font-sans font-medium py-1 px-4 rounded-full">
                                    New
                                </button>

                                <div className='flex text-[#FFFFFF] justify-between pt-2'>
                                    <a href="" className='underline text-[14px] leading-[18px] font-normal font-sans '>u2lynk.com/id=5234</a>
                                    <p className='text-[18px] leading-[28px] font-bold font-sans'>$8000</p>
                                </div>
                                <h6 className='text-white text-[22px] md:text-[20px] leading-[21px] font-normal font-serif '>By Designer name</h6>
                                <p className='text-white text-[12px] leading-[16px] font-medium font-sans pt-2'>Total no of products (1)</p>

                                <div className='flex text-[#FFFFFF] justify-between mt-2'>
                                    <p className='text-[12px] leading-[16px] font-medium font-sans pt-1'>Date : 02 / 12 / 2022 </p>
                                    <a href="" className='underline text-[12px] md:text-[14px] leading-[28px] font-bold font-sans '>View details</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default UserCard;