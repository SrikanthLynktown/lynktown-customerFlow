import React from 'react';
import Image from 'next/image';
const OrderHeader = () => {
    return (
        <>
            <div className=''>
                <div className='md:w-[814px] md:h-[200px] bg-[#000000] opacity-50 invisible md:visible '>
                    {/* <Image
                        src='images/image.svg'
                        width={814}
                        height={10}
                        className=''
                    /> */}

                    <div className='md:pt-10 pt-5'>
                        <img
                            src="https://mdbcdn.b-cdn.net/img/new/avatars/1.webp"
                            className="w-10 md:w-20 rounded-full shadow-lg mx-auto"
                            alt="Avatar" />
                        <div className="flex justify-center  gap-3">
                            <p className='text-white text-[24px] font-normal  font-serif ml-6'>Business Name</p>

                            <p className='pt-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 text-white bg-[#25D366] rounded-full">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                </svg>

                            </p>
                        </div>
                    </div>
                </div>


                {/* steper code */}

                <div className='px-6 pb-6 md:-mt-0 md:pb-0 -mt-28'>
                    <ul
                        data-te-stepper-init
                        className="relative m-0 flex list-none justify-betwee mx-auto overflow-hidden md:p-10 w-[319px] md:w-full">
                        <li
                            data-te-stepper-step-ref
                            data-te-stepper-step-active
                            className="w-[4.5rem] flex-auto">
                            <div
                                data-te-stepper-head-ref
                                className="flex cursor-pointer items-center pl-2 after:h-px after:w-full after:flex-1 after:bg-[#e0e0e0]">
                                <span
                                    data-te-stepper-head-icon-ref
                                    className="my-2 mr-2 flex h-[1.938rem] w-[1.938rem] items-center justify-center rounded-full bg-[#ebedef] text-sm font-medium text-[#40464f]">
                                    1
                                </span>

                            </div>

                            <p
                                data-te-stepper-head-text-ref
                                className="text-[14px] leading-[22px] text-[#0A0A0A] font-normal font-sans md:-ml-6">
                                Order Summery
                            </p>

                        </li>
                        <li data-te-stepper-step-ref className="">
                            <div
                                data-te-stepper-head-ref
                                className="flex cursor-pointer items-center leading-[1.3rem] no-underline before:mr-2 before:h-px before:w-full before:flex-1 before:bg-[#e0e0e0] before:content-[''] after:ml-2 after:h-px after:w-full after:flex-1 after:bg-[#e0e0e0] after:content-['']">
                                <span
                                    data-te-stepper-head-icon-ref
                                    className="my-2 mr-2 flex h-[1.938rem] w-[1.938rem] items-center justify-center rounded-full bg-[#ebedef] text-sm font-medium text-[#40464f]"
                                >
                                    2
                                </span>

                            </div>
                            <p
                                data-te-stepper-head-text-ref
                                className='text-[#0A0A0A] opacity-60 text-[14px] leading-[22px] font-normal font-sans'
                            >
                                Payment
                            </p>
                        </li>
                    </ul>
                </div>
                {/* steper code */}



                {/* blue card */}

                <div className='bg-[#EEECE7] flex flex-wrap gap-2 p-4 mx-auto justify-center'>


                    <div className="p-6 md:w-[319px] w-full">

                        <div className=" mx-auto flex items-center bg-white border border-[#6A5B40] rounded-lg shadow md:flex-row ">
                            <Image
                                className="p-2 object-cover rounded-lg w-[74px] h-[86px] md:h-[94px] md:w-[79px]  md:rounded-lg" src="images/wishlistimg.svg" alt=""
                                width={10}
                                height={40}
                            />
                            <div className="flex flex-col text-left  p-2">
                                <h5 className="text-[14px] text-[#0A0A0A]   font-medium font-sans leading-[18px] mb">Blue men kurta</h5>
                                <p className="text-[14px] text-[#0A0A0A]  font-bold font-sans leading-[18px] mb-">₹1000</p>
                                <a href="" className='text-[#1A5E9D] underline text-[12px] font-normal font-sans leading-[20px] mb-'>Product lynk</a>
                                <p className='text-[14px] text-[#3B3B3B]   font-medium font-sans leading-[18px]'>Size:  M</p>
                            </div>
                        </div>

                        <div >
                            <p className='py-4 text-[#3B3B3B] text-[12px] font-medium font-sans leading-[18px] ' >Select your prefered size</p>

                            <label className="relative inline-flex items-center cursor-pointer">
                               
                                <input type="checkbox" value="1" className="sr-only peer" placeholder='saeeef' />
                                <div className="px-2 flex gap-2 w-11 h-6 bg-gray-200 text-white rounded-full peer peer-focus:ring-4 peer-focus:ring-[#6A5B40] dark:peer-focus:ring-bl dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#6A5B40]">
                                    <span className='text-white'>L</span>
                                    <span className='text-black text-end'>M</span>
                                </div>
                            </label>
                        </div>
                    </div>
                    <div className="p-6 md:w-[319px] w-full">
                        <div className=" mx-auto flex flex-co items-center bg-white border border-[#6A5B40] rounded-lg shadow md:flex-row ">
                            <Image
                                className="p-2 object-cover w-[74px] h-[86px] rounded-lg  md:h-[94px] md:w-[79px]  md:rounded-lg" src="images/wishlistimg.svg" alt=""
                                width={10}
                                height={40}
                            />
                            <div className="flex flex-col text-left  p-2">
                                <h5 className="text-[14px] text-[#0A0A0A]   font-medium font-sans leading-[18px] mb">Blue men kurta</h5>
                                <p className="text-[14px] text-[#0A0A0A]  font-bold font-sans leading-[18px] mb-">₹1000</p>
                                <a href="" className='text-[#1A5E9D] underline text-[12px] font-normal font-sans leading-[20px] mb-'>Product lynk</a>
                                <p className='text-[14px] text-[#3B3B3B]   font-medium font-sans leading-[18px]'>Size:  M</p>
                            </div>
                        </div>

                        <div >
                            <p className='py-4 text-[#3B3B3B] text-[12px] font-medium font-sans leading-[18px] ' >Select your prefered size</p>

                            <label className="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" value="1" className="sr-only peer" placeholder='saeeef' />
                                <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-[#6A5B40] dark:peer-focus:ring-bl dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#6A5B40]"></div>
                            </label>
                        </div>
                    </div>

                </div>

                {/* blue card */}

            </div>
        </>
    )
}

export default OrderHeader;