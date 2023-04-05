import React, { useState } from 'react';
import Navbar from '../Header/Navbar';
import Image from 'next/image';

import { useRouter } from 'next/router';
const MeasurementSection = () => {
    const router = useRouter()

    return (
        <>
            <div className=''>
                <div>

                    <div className='invisible md:visible'>
                        <Navbar />
                    </div>

                    <div className='pb-4 px-4 md:p-0 visible md:invisible border-b-[1px] border-[#000000] border-opacity-20'>
                        <div className="flex w-full flex-wrap items-center justify-between">
                            <div
                                className="flex gap-6 text-[#0A0A0A]">
                                <Image
                                    src='icons/arrowicon.svg'
                                    alt='arrowicon'
                                    width={12}
                                    height={12}
                                />
                            </div>
                        </div>
                    </div>

                    <div className='invisible md:visible'>
                        <div className='px-10 flex gap-1'>
                            <span className='text-[#9D8E73] text-[18px] font-medium font-sans '>Home</span>
                            <span className='text-[#9D8E73] text-[18px] font-medium font-sans'>/</span>
                            <span className='text-[#9D8E73] text-[18px] font-medium font-sans'>Lynks</span>
                            <span className='text-[#9D8E73] text-[18px] font-medium font-sans'>/</span>
                            <span className='text-[#6A5B40] text-[18px] font-medium font-sans'>Measurement</span>

                        </div>
                        <div className='px-10 py- md:pt-10 flex gap- '>
                            <div>
                                <Image
                                    src='icons/Arrow 1.svg'
                                    alt='Arrow'
                                    width={25}
                                    height={17}
                                    className='cursor-pointer'
                                />

                            </div>
                        </div>
                    </div>

                    {/* Image Header */}
                    <div className='mx-auto rounded-lg bg-white shadow-lg md:border-[1px] md:border-[#6A5B40] md:w-[550px] lg:w-[814px]'>


                        <div className="md:flex md:justify-center ">
                            <div className="block rounded-lg bg-white  md:border-[1px] md:border-[#6A5B40] ">
                                <div className='md:w-[550px] lg:w-[814px] md: lg:h-[200px] bg-[#000000] opacity-50 invisible md:visible '>
                                    <div className='md:pt-10 pt-5'>

                                        <Image className="w-[50px] h-[50px] md:w-[60px] md:h-[60px] rounded-full  shadow-lg mx-auto" src="/images/dumy.jpg" alt="Avatar of Jonathan Reinink"
                                            width={50}
                                            height={50}
                                        />
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
                            </div>
                        </div>

                        {/* Image Header */}


                        {/* steper code */}

                        <div className='px-6 pb-6 md:-mt-0 md:pb-0 -mt-28'>
                            <ul
                                data-te-stepper-init
                                className="relative m-0 flex list-none justify-betwee mx-auto overflow-hidden md:p-10 w-[319px] md:w-[600px] lg:w-[814px] md: lg:h-[200px]">
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
                                        Order Summary
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
                                <li data-te-stepper-step-ref className="w-[4.5rem] flex-auto">

                                    <div
                                        data-te-stepper-head-ref
                                        class="flex cursor-pointer items-center pr-2 leading-[1.3rem] no-underline before:mr-2 before:h-px before:w-full before:flex-1 before:bg-[#e0e0e0] before:content-[''] ">
                                        <span
                                            data-te-stepper-head-icon-ref
                                            className="my-2 mr-2 flex h-[1.938rem] w-[1.938rem] items-center justify-center rounded-full bg-[#ebedef] text-sm font-medium text-[#40464f]"
                                        >
                                            3
                                        </span>


                                    </div>
                                    <p
                                        data-te-stepper-head-text-ref
                                        className='text-[#0A0A0A] opacity-60 text-[14px] leading-[22px] font-normal font-sans flex justify-end'
                                    >
                                        Mesurement
                                    </p>


                                </li>
                            </ul>
                        </div>

                        {/* Add Mesurement */}

                        <div className='mt-  md:p-0 md:px-0 pb-6'>
                            <div className='flex justify-center'>
                                <div className="w-full md:w-full lg:w-full px-6">
                                    <h6 className='mb-6 text-[#000000] text-[16px] md:text-[20px] leading-[18px] font-medium font-sans '>Add measurement</h6>
                                    <div className="flex flex-wrap -mx-3 mb-3">
                                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                            <label for="" className="text-[#000000] text-[16px] font-normal font-sans leading-[48px] ">Select gender</label>
                                            <div className="flex">


                                                <select id="gender" className="rounded border border-[#6A5B40] w-full p-2.5">
                                                    <option selected>Choose Gender</option>
                                                    <option value="MALE">

                                                        Male

                                                    </option>
                                                    <option value="FEMALE">Female</option>
                                                    <option value="OTHERS">Others</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                            <label for="" className="text-[#000000] text-[16px] font-normal font-sans leading-[48px] ">Select your standard size</label>
                                            <select id="gender"
                                                className="rounded border border-[#6A5B40] w-full p-2.5 ">
                                                <option selected>Choose Gender</option>
                                                <option value="MALE">Male</option>
                                                <option value="FEMALE">Female</option>
                                                <option value="OTHERS">Others</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="w-full mb-6 md:mb-0">
                                        <label for="" className="text-[#000000] text-[16px] font-normal font-sans leading-[48px] ">Preferred fittings</label>
                                        <select id="gender"
                                            className="rounded border border-[#6A5B40] w-full p-2.5 ">
                                            <option selected>Choose Gender</option>
                                            <option value="MALE">Male</option>
                                            <option value="FEMALE">Female</option>
                                            <option value="OTHERS">Others</option>
                                        </select>
                                    </div>
                                    <div className='md:py-6'>
                                        <button className="flex justify-center mx-auto bg-[#6A5B40]  text-white font-bold py-2 px- rounded-full w-[300px] md:w-[344px]" >
                                            <span className='text-[#FFFFFF] text-[16px] leading-[20px] font-bold font-sans' onClick={() => router.push('/my-measurment')}>Add measurement</span>
                                        </button>
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
export default MeasurementSection;