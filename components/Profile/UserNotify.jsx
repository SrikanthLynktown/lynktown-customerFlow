import React from "react";
import Image from "next/image";
import Navbar from "../Header/Navbar";
const UserNotify = () => {
    return (
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
                        <div className='text-[#0A0A0A] text-[18px] leading-[28px] font-normal font-serif '>Notification</div>
                    </div>

                </div>
            </div>
            <div className='invisible md:visible'>
                <div className='px-10 flex gap-1'>
                    <span className='text-[#9D8E73] text-[18px] font-medium font-sans '>Home</span>
                    <span className='text-[#9D8E73] text-[18px] font-medium font-sans'>/</span>
                    <span className='text-[#9D8E73] text-[18px] font-medium font-sans'>Orders</span>


                </div>
                <div className='px-10 md:py-10 flex gap-6 '>
                    <Image
                        src='icons/Arrow 1.svg'
                        alt=''
                        width={25}
                        height={17}
                        className='cursor-pointer'
                    />
                    <span className='text-[#6A5B40] text-[30px] leading-[22px] font-normal font-serif '>Notification</span>
                    <hr className="md:w-[400px] h-px mt-4 bg-[#9D8E73] border-0 dark:bg-gray-700" />

                </div>
            </div>


            {/* card part */}
            <div className="pb-4 -mt-7 md:-mt-0 ">


                <div class="flex md:px-10 px-6">
                    <div class="block w-[343px] h-[66px] md:w-[814px] md:h-[76px] rounded-[6px] bg-[#E9E9E9] p-4 border-l-[4px] border-[#6C6C6C]">
                        <div className="flex">
                            <h6 className="text-[#3B3B3B] text-[16px] leading-[20px] font-bold font-sans ">Robert: </h6>
                            <p className="text-[#3B3B3B] text-[14px] leading-[20px] font-normal font-sans ">Your order has arrived at 15 Feb</p>
                        </div>
                        <p className="text-[#6C6C6C] text-[12px] leading-[16px] font-normal font-sans py-2 ">15 Feb 2020</p>

                    </div>
                </div>

                <div class="flex md:px-10 px-6 pt-4 md:pt-6">
                    <div class="block w-[343px] h-[66px] md:w-[814px] md:h-[76px] rounded-[6px] bg-[#E9E9E9] p-4 border-l-[4px] border-[#6C6C6C]">
                        <div className="flex">
                            <h6 className="text-[#3B3B3B] text-[16px] leading-[20px] font-bold font-sans ">Robert: </h6>
                            <p className="text-[#3B3B3B] text-[14px] leading-[20px] font-normal font-sans ">Your order has arrived at 15 Feb</p>
                        </div>
                        <p className="text-[#6C6C6C] text-[12px] leading-[16px] font-normal font-sans py-2 ">15 Feb 2020</p>

                    </div>
                </div>


                <div class="flex md:px-10 px-6 pt-4 md:pt-6">
                    <div class="block w-[343px] h-[66px] md:w-[814px] md:h-[76px] rounded-[6px] bg-[#E9E9E9] p-4 border-l-[4px] border-[#6C6C6C]">
                        <div className="flex">
                            <h6 className="text-[#3B3B3B] text-[16px] leading-[20px] font-bold font-sans ">Robert: </h6>
                            <p className="text-[#3B3B3B] text-[14px] leading-[20px] font-normal font-sans ">Your order has arrived at 15 Feb</p>
                        </div>
                        <p className="text-[#6C6C6C] text-[12px] leading-[16px] font-normal font-sans py-2 ">15 Feb 2020</p>

                    </div>
                </div>



                <div class="flex md:px-10 px-6 pt-4 md:pt-6">
                    <div class="block w-[343px] h-[66px] md:w-[814px] md:h-[76px] rounded-[6px] bg-[#E9E9E9] p-4 border-l-[4px] border-[#6C6C6C]">
                        <div className="flex">
                            <h6 className="text-[#3B3B3B] text-[16px] leading-[20px] font-bold font-sans ">Robert: </h6>
                            <p className="text-[#3B3B3B] text-[14px] leading-[20px] font-normal font-sans ">Your order has arrived at 15 Feb</p>
                        </div>
                        <p className="text-[#6C6C6C] text-[12px] leading-[16px] font-normal font-sans py-2 ">15 Feb 2020</p>

                    </div>
                </div>


                <div class="flex md:px-10 px-6 pt-4 md:pt-6">
                    <div class="block w-[343px] h-[66px] md:w-[814px] md:h-[76px] rounded-[6px] bg-[#E9E9E9] p-4 border-l-[4px] border-[#6C6C6C]">
                        <div className="flex">
                            <h6 className="text-[#3B3B3B] text-[16px] leading-[20px] font-bold font-sans ">Robert: </h6>
                            <p className="text-[#3B3B3B] text-[14px] leading-[20px] font-normal font-sans ">Your order has arrived at 15 Feb</p>
                        </div>
                        <p className="text-[#6C6C6C] text-[12px] leading-[16px] font-normal font-sans py-2 ">15 Feb 2020</p>

                    </div>
                </div>

                <div class="flex md:px-10 px-6 pt-4 md:pt-6">
                    <div class="block w-[343px] h-[66px] md:w-[814px] md:h-[76px] rounded-[6px] bg-[#E9E9E9] p-4 border-l-[4px] border-[#6C6C6C]">
                        <div className="flex">
                            <h6 className="text-[#3B3B3B] text-[16px] leading-[20px] font-bold font-sans ">Robert: </h6>
                            <p className="text-[#3B3B3B] text-[14px] leading-[20px] font-normal font-sans ">Your order has arrived at 15 Feb</p>
                        </div>
                        <p className="text-[#6C6C6C] text-[12px] leading-[16px] font-normal font-sans py-2 ">15 Feb 2020</p>

                    </div>
                </div>


                <div class="flex md:px-10 px-6 pt-4 md:pt-6">
                    <div class="block w-[343px] h-[66px] md:w-[814px] md:h-[76px] rounded-[6px] bg-[#E9E9E9] p-4 border-l-[4px] border-[#6C6C6C]">
                        <div className="flex">
                            <h6 className="text-[#3B3B3B] text-[16px] leading-[20px] font-bold font-sans ">Robert: </h6>
                            <p className="text-[#3B3B3B] text-[14px] leading-[20px] font-normal font-sans ">Your order has arrived at 15 Feb</p>
                        </div>
                        <p className="text-[#6C6C6C] text-[12px] leading-[16px] font-normal font-sans py-2 ">15 Feb 2020</p>

                    </div>
                </div>
            </div>


        </div>
    )
}
export default UserNotify;