import react from 'react';
import Navbar from '../Header/Navbar';
import Image from 'next/image';
const RequestOrder = () => {
    return (
        <>
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
                            <div className='text-[#0A0A0A] text-[18px] leading-[28px] font-normal font-serif '>Requested orders</div>
                        </div>
                        <div className="relative flex items-center">
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
                        </div>
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
                        <span className='text-[#6A5B40] text-[42px] leading-[22px] font-normal font-serif '>Requested orders</span>
                    </div>
                </div>
                <div className='p-4 md:p-0'>

                    <div className="flex justify-center p-2 md:p-0">
                        <div className="flex rounded-lg bg-white p-6 gap-6 shadow-lg border-[1px] border-[#CECECE] w-full md:w-[460px]">
                            <div>
                                <Image className="w-[50px] h-[50px] md:w-[60px] md:h-[60px] rounded-full mr-4" src="/images/dumy.jpg" alt="Avatar of Jonathan Reinink"
                                    width={50}
                                    height={50}
                                />
                            </div>
                            <div className='w-full py-1'>
                                <div className="mb-2 w-[119px] h-[16px] md:w-[185px] bg-[#CEC7B9] rounded-full">
                                    <div className=" bg-primary w-[25px] ">

                                    </div>
                                </div>
                                <div className="w-[195px] h-[16px] md:w-[292px] bg-[#F0EEEA] rounded-full">
                                    <div className=" bg-primary w-[25px] ">

                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>

                    <div className="flex justify-center md:mt-5 p-2 md:p-0">
                        <div className="flex rounded-lg bg-white p-6 gap-6 shadow-lg border-[1px] border-[#CECECE] w-full md:w-[460px]">
                            <div>
                                <Image className="w-[50px] h-[50px] md:w-[60px] md:h-[60px] rounded-full mr-4" src="/images/dumy.jpg" alt="Avatar of Jonathan Reinink"
                                    width={50}
                                    height={50}
                                />
                            </div>
                            <div className='w-full py-1'>
                                <div className="mb-2 w-[119px] h-[16px] md:w-[185px] bg-[#CEC7B9] rounded-full">
                                    <div className=" bg-primary w-[25px] ">

                                    </div>
                                </div>
                                <div className="w-[195px] h-[16px] md:w-[292px] bg-[#F0EEEA] rounded-full">
                                    <div className=" bg-primary w-[25px] ">

                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>

                <div className='py-5'>
                    <h6 className='text-center text-[#0A0A0A] text-[20px] md:text-[24px] leading-[28px] font-normal font-serif'>
                    No requested orders available! 
                    </h6>
                </div>
            </div>
        </>
    )
}
export default RequestOrder;