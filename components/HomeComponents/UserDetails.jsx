import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Link from 'next/link';
const UserDetails = () => {
    const router = useRouter()
    return (
        <>
            <div className='mt-6 p-5 md:p-0 md:px-0 pb-6'>
                <div className='flex justify-center'>
                    <form className="w-full md:max-w-lg">
                        <h6 className='mb-6 text-[#000000] text-[16px] md:text-[18px] leading-[18px] font-medium font-sans '>Add below details for shipping purpose</h6>
                        <div className="flex flex-wrap -mx-3 mb-3">
                            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                <input className="appearance-none block w-full  border border-[#6A5B40] rounded py-3 px-4 mb-3 text-[#0A0A0A] opacity-60 text-[14px] leading-[18px] font-medium font-sans  " id="grid-first-name" type="text" placeholder="Enter Full Name" />
                                {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
                            </div>
                            <div className="w-full md:w-1/2 px-3">
                                <input className="appearance-none block w-full  border border-[#6A5B40] rounded py-3 px-4 mb-3 text-[#0A0A0A] opacity-60 text-[14px] leading-[18px] font-medium font-sans  " id="grid-first-name" type="text" placeholder="Enter Email Id" />
                            </div>
                        </div>
                        <h6 className='text-cente mb-6 text-[#0A0A0A] text-[16px] md:text-[18px] leading-[18px] font-medium font-sans'>Shipping Address</h6>
                        <button className="flex gap-4  justify-center bg-[#6A5B40]  text-white font-bold py-2 px-4 rounded w-full">

                            <span className='pt-[4px] text-[#FFFFFF] bg-red-30'>
                                <Image
                                    src='icons/location.svg'
                                    alt=''
                                    width={16}
                                    height={16}
                                    className='text-[#FFFFFF] '
                                />
                            </span>
                            <span className='text-[ #FFFFFF] text-[16px] leading-[24px] font-bold'>Use current location</span>
                        </button>

                        <div className='mt-6'>
                            <div className="flex flex-wrap -mx-3 mb-3">
                                <div className="w-full md:w-1/2 px-3 mb-3 md:mb-0">
                                    <input
                                        className="appearance-none block w-full  border border-[#6A5B40] rounded py-3 px-4 mb-3 text-[#0A0A0A] opacity-60 text-[14px] leading-[18px] font-medium font-sans  " id="grid-first-name" type="text" placeholder=" Door/House number" />
                                </div>
                                <div className="w-full md:w-1/2 px-3">
                                    <input
                                        className="appearance-none block w-full  border border-[#6A5B40] rounded py-3 px-4 mb-3 text-[#0A0A0A] opacity-60 text-[14px] leading-[18px] font-medium font-sans  "
                                        id="grid-last-name" type="text" placeholder="Address" />
                                </div>
                            </div>

                            <div className="flex flex-wrap -mx-3 mb-3">
                                <div className="w-full md:w-1/2 px-3 mb-3 mt-3 md:mt-0 md:mb-0">
                                    <input
                                        className="appearance-none block w-full  border border-[#6A5B40] rounded py-3 px-4 mb-3 text-[#0A0A0A] opacity-60 text-[14px] leading-[18px] font-medium font-sans  " id="grid-first-name" type="text" placeholder="City" />
                                </div>
                                <div className="w-full md:w-1/2 px-3">
                                    <input
                                        className="appearance-none block w-full  border border-[#6A5B40] rounded py-3 px-4 mb-3 text-[#0A0A0A] opacity-60 text-[14px] leading-[18px] font-medium font-sans  "
                                        id="grid-last-name" type="text" placeholder="State" />
                                </div>
                            </div>
                            <div className="flex flex-wrap -mx-3 mb-3">
                                <div className="w-full md:w-1/2 px-3 mb-3 mt-3 md:mt-0 md:mb-0">
                                    <input
                                        className="appearance-none block w-full  border border-[#6A5B40] rounded py-3 px-4 mb-3 text-[#0A0A0A] opacity-60 text-[14px] leading-[18px] font-medium font-sans  " id="grid-first-name" type="text" placeholder="Pincode" />
                                </div>
                                <div className="w-full md:w-1/2 px-3">
                                    <input
                                        className="appearance-none block w-full  border border-[#6A5B40] rounded py-3 px-4 mb-3 text-[#0A0A0A] opacity-60 text-[14px] leading-[18px] font-medium font-sans  "
                                        id="grid-last-name" type="text" placeholder="Locality" />
                                </div>
                            </div>

                        </div>
                        <div>
                            <button className="flex gap-4  justify-center mx-auto bg-[#6A5B40]  text-white font-bold py-2 px-4 rounded-full w-[344px] invisible md:visible" onClick={() => router.push('/payment')}>
                                <Link href="/payment">
                                    <span className='text-[ #FFFFFF] text-[16px] leading-[24px] font-bold' onClick={() => router.push('/payment')}>Next</span>
                                </Link>
                            </button>

                            <button className="md:invisible visible bg-[#6A5B40]  text-white font-bold py-2 px-4 rounded w-full">
                                <Link href="/payment">
                                    <span className='text-[ #FFFFFF] text-[16px] leading-[24px] font-bold' onClick={() => router.push('/payment')}>Next</span>
                                </Link>
                                {/* <span className='text-[ #FFFFFF] text-[16px] leading-[24px] font-bold  ' onClick={() => router.push('/payment')}>Save</span> */}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
export default UserDetails;