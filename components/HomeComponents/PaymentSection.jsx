import React, { useState } from 'react';
import Image from 'next/image';
import Navbar from '../Header/Navbar';
import PaymentModal from '../ModalComponents/PaymentModal';
import ToggleButton from '../Header/ToggleButton';
import { useRouter } from 'next/router';

const PaymentSection = () => {
    const [showModal, setShowModal] = useState(false);
    const router=useRouter()

    return (
        <>
            <div className='mb- '>
                <div className='invisible md:visible'>
                    <Navbar />
                </div>
                <div style={{ width: '50%' }} className='w-[10p]'>
                    <PaymentModal width='70' height={10} className="" styles={{ width: '10%' }}
                        onClose={() => setShowModal(false)}
                        show={showModal}
                    >
                        <div className='mx-auto justify-center'>
                            <div className=''>

                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="mx-auto w-16 h-16 text-white bg-[#25D366] rounded-full">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                </svg>
                            </div>
                            <div className='mx-auto text-center '>
                                <h6 className=' mt-4 md:mt-7 mx-auto w-[308px] md:w-[502px] text-[#000000] text-[28px] md:text-[30px] font-medium leading-[20px] font-sans '>Payment is successful</h6>
                                <p className=' mt-4 md:mt-7 w-[284px] md:w-[452px] text-center mx-auto text-[#3B3B3B] text-[16px] leading-[26px] font-sans font-normal '>You can add your measurement now or later</p>
                            </div>

                            <div className=' mx-auto mt-3  md:mt-5 bg-[#6A5B40] w-[236px] md:w-[330px] h-[48px] rounded-[5px]'>
                                <button className='mx-auto flex items-center h-[48px] text-[#FFFFFF] text-[16px] leading-[20px] font-bold font-sans '>
                                    Add measurement
                                </button>
                            </div>

                            <div className='mx-auto mt-3 md:mt-5 w-[236px] border-[1px] border-[#FF543E]  md:rounded-[5px] md:w-[330px] h-[48px]'>
                                <button className=' mx-auto flex items-center text-[#FF543E]  w-[95px] h-[48px] text-[16px] leading-[20px] font-bold font-sans'>
                                    I’ll do it later
                                </button>
                            </div>
                        </div>


                    </PaymentModal>
                </div>
                <div className='pb-4 -mt-14 md:-mt-0 px-4 md:p-0 visible md:invisible border-b-[1px] border-[#000000] border-opacity-20'>
                    <div className="flex w-full flex-wrap items-center justify-between">
                        <div
                            className="flex gap-6 text-[#0A0A0A]">
                            <Image
                                src='icons/arrowicon.svg'
                                alt=''
                                width={12}
                                height={12}
                            />
                            <div className='text-[#0A0A0A] text-[18px] leading-[28px] font-normal font-serif '>Payment</div>
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
                    <div className='px-10 md:pt-10 flex gap- '>
                        <div>
                            <Image
                                src='icons/Arrow 1.svg'
                                alt=''
                                width={25}
                                height={17}
                                className='cursor-pointer'
                            />

                        </div>
                    </div>
                </div>

                {/* order summery text */}
                <div className="md:flex md:justify-center">
                    <div className="block rounded-lg bg-white shadow- md:border-[1px] md:border-[#6A5B40] ">
                        <div className='md:w-[814px] md:h-[200px] bg-[#000000] opacity-50 -mt-[45px] mb-10 pb-6 md:-mt-0 md:pb-0 md:mb-0 w-full'>
                            {/* <Image
                        src='images/image.svg'
                        width={814}
                        height={10}
                        className=''
                        
                          /> */}

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



                        {/* steper code */}

                        <div className='px-6 pb-6 -mt-6  md:-mt-0 md:pb-0'>
                            <ul
                                data-te-stepper-init
                                className="relative m-0 flex list-none justify-betwee mx-auto overflow-hidden md:p-10 w-[319px] md:w-[450px]">
                                <li
                                    data-te-stepper-step-ref
                                    data-te-stepper-step-active
                                    className="w-[4.5rem] flex-auto">
                                    <div
                                        data-te-stepper-head-ref
                                        className="flex cursor-pointer items-center pl-2 after:h-px after:w-full after:flex-1 after:bg-[#e0e0e0]">
                                        <span
                                            data-te-stepper-head-icon-ref
                                            className="my-2 mr-2 flex h-[1.938rem] w-[1.938rem] items-center justify-center rounded-full bg-[#6A5B40] text-sm font-medium text-[#FFFFFF]">
                                            1
                                        </span>

                                    </div>

                                    <p
                                        data-te-stepper-head-text-ref
                                        className="text-[12px] leading-[22px] text-[#0A0A0A] font-normal font-sans md:-ml-6">
                                        Order Summary
                                    </p>

                                </li>
                                <li data-te-stepper-step-ref className="">
                                    <div
                                        data-te-stepper-head-ref
                                        className="flex cursor-pointer items-center leading-[1.3rem] no-underline before:mr-2 before:h-px before:w-full before:flex-1 before:bg-[#e0e0e0] before:content-[''] after:ml-2 after:h-px after:w-full after:flex-1 after:bg-[#e0e0e0] after:content-['']">
                                        <span
                                            data-te-stepper-head-icon-ref
                                            className="my-2 mr-2 flex h-[1.938rem] w-[1.938rem] items-center justify-center rounded-full bg-[#6A5B40] text-sm font-medium text-[#FFFFFF]"
                                        >
                                            2
                                        </span>

                                    </div>
                                    <p
                                        data-te-stepper-head-text-ref
                                        className='text-[#0A0A0A] opacity-60 text-[12px] leading-[22px] font-normal font-sans'
                                    >
                                        Payment
                                    </p>
                                </li>
                            </ul>
                        </div>
                        {/* steper code */}



                        {/* blue card */}

                        <div className='bg-[#EEECE7] flex flex-wrap gap-2 md:p-4 mx-auto justify-center'>


                            <div className="p-4 md:p-6  md:w-[319px] w-full">

                                <div className=" mx-auto flex items-center justify-cente bg-white rounded-lg shadow md:flex-row ">
                                    <Image
                                        className="p-2 object-cover rounded-lg w-[74px] h-[86px] md:h-[94px] md:w-[79px]  md:rounded-lg" src="images/wishlistimg.svg" alt=""
                                        width={10}
                                        height={40}
                                    />
                                    <div className="flex flex-col text-left  p-2">
                                        <p className='text-[#3B3B3B] text-[12px] leading-[18px] font-normal font-sans italic'>By Designer name</p>
                                        <h5 className="text-[14px] text-[#0A0A0A]   font-medium font-sans leading-[18px] mb">Blue men kurta</h5>
                                        <p className="text-[14px] text-[#0A0A0A]  font-bold font-sans leading-[18px] mb-">₹1000</p>
                                        <a href="" className='text-[#1A5E9D] underline text-[12px] font-normal font-sans leading-[20px] mb-'>Product lynk</a>
                                        <p className='text-[14px] text-[#3B3B3B]   font-medium font-sans leading-[18px]'>Size:  M</p>
                                    </div>
                                </div>

                                <div className='flex gap-4 mt-4'>
                                    <p className='text-[#3B3B3B] text-[12px] leading-[20px] font-bold font-sans w-[157px]'>Exchange within  <span className='text-[#DA1E28]'>6 days</span></p>
                                    <p className='text-[#3B3B3B] text-[12px] leading-[20px] font-bold font-sans w-[137px] '>Return within   <span className='text-[#DA1E28]'>6 days</span></p>
                                </div>

                                <div className='mt-3'>
                                    <p className='text-[#3B3B3B] text-[12px] leading-[18px] font-medium font-sans'>Select your prefered size</p>
                                </div>
                                {/* toggele button */}
                                <div className='mt-3'>
                                    <ToggleButton />
                                </div>
                            </div>
                            <div className="p-4 md:p-6 md:w-[319px] w-full">
                                <div className=" mx-auto flex justify-cente items-center bg-white  rounded-lg shadow md:flex-row ">
                                    <Image
                                        className="p-2 object-cover w-[74px] h-[86px] rounded-lg  md:h-[94px] md:w-[79px]  md:rounded-lg" src="images/wishlistimg.svg" alt=""
                                        width={10}
                                        height={40}
                                    />
                                    <div className="flex flex-col text-left  p-2">
                                        <p className='text-[#3B3B3B] text-[12px] leading-[18px] font-normal font-sans italic'>By Designer name</p>
                                        <h5 className="text-[14px] text-[#0A0A0A]   font-medium font-sans leading-[18px] mb">Blue men kurta</h5>
                                        <p className="text-[14px] text-[#0A0A0A]  font-bold font-sans leading-[18px] mb-">₹1000</p>
                                        <a href="" className='text-[#1A5E9D] underline text-[12px] font-normal font-sans leading-[20px] mb-'>Product lynk</a>
                                        <p className='text-[14px] text-[#3B3B3B]   font-medium font-sans leading-[18px]'>Size:  M</p>
                                    </div>


                                </div>

                                <div className='flex gap-4 mt-4'>
                                    <p className='text-[#3B3B3B] text-[12px] leading-[20px] font-bold font-sans w-[157px]'>Exchange within  <span className='text-[#DA1E28]'>6 days</span></p>
                                    <p className='text-[#3B3B3B] text-[12px] leading-[20px] font-bold font-sans w-[137px] '>Return within   <span className='text-[#DA1E28]'>6 days</span></p>
                                </div>

                                <div className='mt-3'>
                                    <p className='text-[#3B3B3B] text-[12px] leading-[18px] font-medium font-sans'>Select your prefered size</p>
                                </div>
                                {/* toggele button */}
                                <div className='mt-3'>
                                    <ToggleButton />
                                </div>


                            </div>

                        </div>

                        {/* blue card */}

                        {/* Price details */}
                        <div className='md:border-[2px] border-[#CECECE]'>
                            <div className='py-8 px-4'>
                                <h6 className='mb-5 md:text-center text-[#000000] text-[18px] leading-[18px] font-medium font-sans '>Shipping and payment details</h6>

                                <div
                                    class="block max-w-sm md:mx-auto rounded-lg bg-white  shadow-lg  border-[1px] border-[#9D8E73]">
                                    <div class=" md:w-[382px]  w-full border-b-[0.5px] border-[#CECECE] pb-2" >

                                        <div className="flex mx-auto justify-between md:p- ">
                                            <div className="flex md:p-4 p-2 md:gap-20 ">
                                                <div class="flex items-center ">
                                                    <input id="default-radio-1" type="radio" value="" name="default-radio" class="invisible md:visible w-4 h-4 text-blue-600 bg-gray-100" />
                                                    <label class="-ml-2 md:ml-2 text-[16px] leading-[20px] md:font-bold font-normal ">John Hamilton</label>
                                                </div>

                                                <div className=''>
                                                    <button class="bg-[#E6E3DC] md:-ml-10 text-[#6A5B40] text-[12px] leading-[17px]  font-serif font-bold py- px-2 rounded-full">
                                                        Home
                                                    </button>
                                                </div>

                                            </div>
                                            <div className='md:pt-4 pt-2'>
                                                <button class="bg-[#3AC267]  py-1 px-4 rounded-full ">
                                                    <p className="text-[10px]  text-[#FFFFFF] font-normal font-sans">Selected</p>
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
                                        <p className="py-2 text-[#DA1E28] text-[16px] leading-[20px] font-bold">Change</p>
                                    </div>
                                </div>


                                <div className='mt-10' onClick={()=>router.push('/address')}>
                                    <p className=' text-center text-[#6A5B40] text-[16px] leading-[24px] font-bold font-sans cursor-pointer '>Add New Address +</p>
                                </div>
                            </div>

                            <div className='mt-3 bg-[#EEECE7] '>

                                <div className="flex justify-center">
                                    <div
                                        className="block max-w-sm p-4">
                                        <h5 className="mb-3 text-[#000000] text-[16px] leading-[20px] font-bold font-sans">
                                            Price Details
                                        </h5>
                                        <div className='border-b-[1px] border-[#CECECE] pb-2'>
                                            <div className="flex gap-28 mb-2">
                                                <p className='text-[#6C6C6C] text-[14px] leading-[18px] font-normal font-sans'>Product Price</p>
                                                <span className='text-[#3B3B3B] mx-auto text-[14px] leading-[18px] font-normal font-sans'>₹2000.00</span>
                                            </div>

                                            <div className="flex gap-28">
                                                <p className='text-[#6C6C6C] text-[14px] leading-[18px] font-normal font-sans'>Delivery Charges</p>
                                                <span className='mx-auto text-[#42BE65] text-[14px] leading-[18px] font-normal font-sans'>₹99</span>
                                            </div>
                                        </div>

                                        <div className="flex gap-24 pt-2">
                                            <p className='text-[#000000] text-[20px] leading-[18px] font-bold font-sans '>Total Ammount</p>
                                            <span className='text-[#000000] text-[20px] leading-[18px] font-bold font-sans '>₹2099.00</span>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className='py-4'>
                            <button className="flex gap-4 items-center justify-center mx-auto bg-[#6A5B40]  text-white font-bold py-2 px-4 rounded-[5px] md:rounded-full w-[343px] h-[48px]" onClick={() => setShowModal(true)}>
                                <span className='text-[#FFFFFF] text-[16px] leading-[20px] font-bold font-sans'>Pay</span>
                            </button>
                        </div>

                        {/* Price details */}
                    </div>
                </div>
                {/* order summery text */}
            </div>

        </>
    )
}
export default PaymentSection;