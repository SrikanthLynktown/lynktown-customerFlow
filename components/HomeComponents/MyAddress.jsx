import React from "react";
import Image from "next/image";
import Navbar from "../Header/Navbar";
const MyAddress = () => {
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
                        <div className='text-[#0A0A0A] text-[18px] leading-[28px] font-normal font-serif '>Add Address</div>
                    </div>

                </div>
            </div>
            <div className='invisible md:visible'>
                <div className='px-10 flex gap-1'>
                    <span className='text-[#9D8E73] text-[18px] font-medium font-sans '>Home</span>
                    <span className='text-[#9D8E73] text-[18px] font-medium font-sans'>/</span>
                    <span className='text-[#9D8E73] text-[18px] font-medium font-sans'>Lynks</span>
                    <span className='text-[#9D8E73] text-[18px] font-medium font-sans'>/</span>
                    <span className='text-[#6A5B40] text-[18px] font-medium font-sans'>My Address</span>


                </div>
                <div className='px-10 py- md:py-10 flex gap-6 '>
                    <Image
                        src='icons/Arrow 1.svg'
                        alt=''
                        width={25}
                        height={17}
                        className='cursor-pointer'
                    />
                    <span className='text-[#6A5B40] text-[30px] leading-[22px] font-normal font-serif '>My Addresses</span>
                    <hr className="md:w-[400px] h-px mt-4 bg-[#9D8E73] border-0 dark:bg-gray-700" />

                </div>
            </div>



            {/*  Address Part*/}

            <div className="md:px-20 px-6">
                <div className="flex flex-wrap  gap-4">



                    <div className="block max-w-sm rounded-lg bg-white  items-center shadow-lg dark:bg-neutral-700 border-dotted border-2 border-[#CEC7B9] ">
                        <div className="flex md:w-[382px]  w-[300px]" >
                            <div className="flex px-4 py-6  md:mx-6 md:p-16 gap-4">
                                <Image
                                    src='icons/locationIcon.svg'
                                    width={28}
                                    height={50}
                                    alt=""
                                    className="mb-6 "
                                />


                                <h5 className="mb-6  text-[20px] text-[#6A5B40] leading-[28px] font-normal font-serif">
                                    Add new address
                                </h5>


                            </div>
                        </div>

                    </div>

                    <div
                        className="block max-w-sm rounded-lg bg-white  shadow-lg  border-[1px] border-[#9D8E73] ">
                        <div className=" md:w-[382px] w-[300px] border-[0.5px] border-[#CECECE] pb-2" >

                            <div className="flex  justify-between md:p-4 p-2">
                                <div className="flex items-center">
                                    <input id="default-radio-1" type="radio" value="" name="default-radio" className="invisible md:visible w-4 h-4 text-blue-600 bg-gray-100" />
                                    <label className="-ml-2 md:ml-2 text-[16px] leading-[20px] md:font-bold font-normal ">John Hamilton</label>
                                </div>

                                <div>
                                    <button className="bg-[#E6E3DC] md:-ml-10 text-[#6A5B40] text-[12px] leading-[17px]  font-serif font-bold py- px-2 rounded-full">
                                        Home
                                    </button>
                                </div>

                                <div>
                                    <button className="bg-[#857250] t py-1 px-4 rounded-full">
                                        <p className="text-[11px]  text-[#FFFFFF] font-bold">  Set Default</p>
                                    </button>
                                </div>

                            </div>
                            <p className="md:px-4 px-2 text-[#6C6C6C] text-[14px] leading-[18px] font-normal ">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. </p>
                            <div className="flex md:px-4 px-2">
                                <h6 className="text-[#0A0A0A] text-[14px] leading-[18px] font-normal font-sans">Mobile:</h6>
                                <span className="text-[#6C6C6C] text-[14px] leading-[18px] font-normal font-sans">+91 9749477620</span>
                            </div>
                        </div>
                        <div className="flex  px-24 ">
                            <div className="border-r-[0.5px] border-[#CECECE]  mx-auto">
                                <p className="-ml-20 text-[#857250] text-[16px] leading-[20px] font-bold py-2">Edit</p>

                            </div>
                            <p className="py-2 text-[#DA1E28] text-[16px] leading-[20px] font-bold">Delete</p>
                        </div>
                    </div>
                </div>


                <div className="py-4">
                <div
                        className="block md:w-[382px] w-[300px] rounded-lg bg-white  shadow-lg  border-[1px] border-[#9D8E73] ">
                        <div className="  border-b-[0.5px] border-[#CECECE] pb-2" >

                            <div className="flex  justify-between md:p-4 p-2">
                                <div className="flex items-center">
                                    <input id="default-radio-1" type="radio" value="" name="default-radio" className="invisible md:visible w-4 h-4 text-blue-600 bg-gray-100" />
                                    <label className="-ml-2 md:ml-2 text-[16px] leading-[20px] md:font-bold font-normal ">John Hamilton</label>
                                </div>

                                <div>
                                    <button className="bg-[#E6E3DC] md:-ml-10 text-[#6A5B40] text-[12px] leading-[17px]  font-serif font-bold py- px-2 rounded-full">
                                        Home
                                    </button>
                                </div>

                                <div>
                                    <button className="bg-[#857250] t py-1 px-4 rounded-full">
                                        <p className="text-[11px]  text-[#FFFFFF] font-bold">  Set Default</p>
                                    </button>
                                </div>

                            </div>
                            <p className="md:px-4 px-2 text-[#6C6C6C] text-[14px] leading-[18px] font-normal ">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. </p>
                            <div className="flex md:px-4 px-2">
                                <h6 className="text-[#0A0A0A] text-[14px] leading-[18px] font-normal font-sans">Mobile:</h6>
                                <span className="text-[#6C6C6C] text-[14px] leading-[18px] font-normal font-sans">+91 9749477620</span>
                            </div>
                        </div>
                        <div className="flex  px-24 ">
                            <div className="border-r-[0.5px] border-[#CECECE]  mx-auto">
                                <p className="-ml-20 text-[#857250] text-[16px] leading-[20px] font-bold py-2">Edit</p>

                            </div>
                            <p className="py-2 text-[#DA1E28] text-[16px] leading-[20px] font-bold">Delete</p>
                        </div>
                    </div>
                </div>
            </div>

            {/*  Address Part*/}

        </div>
    )
}
export default MyAddress;