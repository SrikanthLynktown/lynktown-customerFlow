import React from 'react';
import Navbar from '../Header/Navbar';
import Image from 'next/image';
import UserDetails from './UserDetails';
import OrderHeader from './OrderHeader';
const OrderSummery = () => {
    return (
        <>
            <div className='mb-20'>
                <div className='invisible md:visible'>
                    <Navbar />
                </div>

                <div className='pb-4 px-4 md:p-0 visible md:invisible border-b-[1px] border-[#000000] border-opacity-20'>
                    <div className="flex w-full flex-wrap items-center justify-between">
                        <div
                            className="flex gap-6 text-[#0A0A0A]">
                            <Image
                                src='icons/arrowicon.svg'
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
                        <span className='text-[#6A5B40] text-[18px] font-medium font-sans'>Order summary</span>

                    </div>
                    <div className='px-10 py- md:pt-10 flex gap- '>
                        <div>
                            <Image
                                src='icons/Arrow 1.svg'
                                width={25}
                                height={17}
                                className='cursor-pointer'
                            />

                        </div>
                    </div>
                </div>

                {/* order summery text */}
                <div className="md:flex md:justify-center ">
                    <div className="block rounded-lg bg-white shadow-lg md:border-[1px] md:border-[#6A5B40] ">
                        <OrderHeader />
                        <UserDetails />
                    </div>
                </div>
                {/* order summery text */}
            </div>
        </>
    )
}
export default OrderSummery;