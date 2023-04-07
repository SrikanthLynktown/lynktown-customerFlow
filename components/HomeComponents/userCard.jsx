import React, { useState } from 'react';
import Navbar from '../Header/Navbar';
import Image from 'next/image';
import { useRouter } from 'next/router';
import LinkModal from '../ModalComponents/LinkModal';
const UserCard = () => {
    const router = useRouter()
    // const [linkModal, setLinkModal] = useState(false)
    const [showModal, setShowModal] = useState(false);

    return (
        <>

            {/* lynks card */}


            <div className=''>
                <div className='invisible md:visible'>
                    <Navbar />
                </div>

                <LinkModal
                    onClose={() => setShowModal(false)}
                    show={showModal}
                >

                    <div className='mx-auto'>
                        <Image
                            src='icons/crosslogo.svg'
                            width={44}
                            height={44}
                            alt=''
                            className='mx-auto mt- md:mt-7'
                        />

                        <h6 className='text-center mt-4 md:mt-7 text-[#DA1E28] text-[30px] leading-[31px] font-sans font-bold '>This Link is Invalid </h6>
                        <p className='text-center mt-4 md:mt-7 text-[#0A0A0A] opacity-80 text-[16px] leading-[22px] font-normal font-sans w-[264px] md:w-[330px] mx-auto '>Please contact fashion designer to get a valid link </p>
                    </div>

                </LinkModal>
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
                            <div className='text-[#0A0A0A] text-[18px] leading-[28px] font-normal font-serif '>Lynks</div>
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
                            alt=''
                            width={25}
                            height={17}
                            className='cursor-pointer'
                        />
                        <span className='text-[#6A5B40] text-[42px] leading-[22px] font-normal font-serif '>Lynks</span>
                        <hr className="w-[549px] h-px mt-4 bg-[#9D8E73] border-0 dark:bg-gray-700" />
                    </div>
                </div>
            </div>

            {/* lynks Card */}

            <section className="text-gray-600 body-font">
                <div className="container px-4 py-1 mx-auto">
                    <div className="flex flex-wrap gap-6 w-full">
                        <div className="lg:w-[289px] md:w-1/2  w-full p-4 bg-[#F1F1F1] border-[0.5px] border-[#857250] rounded-lg gap-4">
                            <div className="justify-cente  border-[3px] border-[#A1CACA] rounded-lg">
                                <div
                                    className="block max-w-sm rounded-lg bg-white shadow-lg dark:bg-neutral-700">
                                    <a href="#!" data-te-ripple-init data-te-ripple-color="light">
                                        <Image
                                            className="rounded-lg w-full"
                                            src="images/Rectangle 4530.svg"
                                            alt=""
                                            width={10}
                                            height={10}
                                        />
                                    </a>
                                </div>
                            </div>
                            <div className="py-4" >
                                <button className="bg-[#3AC267]  text-white text-[10px] md:text-[12px] leading-[13px] md:leading-[16px] font-sans font-medium py-1 px-4 rounded-full" onClick={() => router.push('/order-summery')}>
                                    New
                                </button>

                                <div className='flex text-[#000000] justify-between pt-2'>
                                    <a href="" className='underline text-[14px] leading-[18px] font-normal font-sans' onClick={() => setShowModal(true)} >u2lynk.com/id=5234</a>
                                    <p className='text-[18px] leading-[28px] font-bold font-sans'>$8000</p>
                                </div>
                                <h6 className='text-[#000000] text-[22px] md:text-[20px] leading-[21px] font-normal font-serif italic' >By Designer name</h6>
                                <p className='text-[#000000] text-[12px] leading-[16px] font-medium font-sans pt-2'>Total no of products (1)</p>

                                <div className='flex text-[#000000] justify-between mt-2'>
                                    <p className='text-[12px] leading-[16px] font-medium font-sans pt-1'>Date : 02 / 12 / 2022 </p>
                                    <a href="" className='underline text-[12px] md:text-[14px] leading-[28px] font-bold font-sans '>View details</a>
                                </div>
                            </div>
                        </div>

                        <div className="lg:w-[289px] md:w-1/2  w-full p-4  bg-[#F1F1F1] border-[0.5px] border-[#857250] rounded-lg gap-4">
                            <div className="justify-cente  border-[3px] border-[#A1CACA] rounded-lg">
                                <div
                                    className="block max-w-sm rounded-lg bg-white shadow-lg dark:bg-neutral-700">
                                    <a href="#!" data-te-ripple-init data-te-ripple-color="light">
                                        <Image
                                            className="rounded-lg w-full"
                                            src="images/Rectangle 4530.svg"
                                            alt=""
                                            width={10}
                                            height={10}
                                        />
                                    </a>
                                </div>
                            </div>
                            <div className="py-4">
                                <button className="bg-[#3AC267]  text-white text-[10px] md:text-[12px] leading-[13px] md:leading-[16px] font-sans font-medium py-1 px-4 rounded-full">
                                    Delivered
                                </button>

                                <div className='flex text-[#000000] justify-between pt-2'>
                                    <a href="" className='underline text-[14px] leading-[18px] font-normal font-sans '>u2lynk.com/id=5234</a>
                                    <p className='text-[18px] leading-[28px] font-bold font-sans'>$8000</p>
                                </div>
                                <h6 className='text-[#000000] text-[22px] md:text-[20px] leading-[21px] font-normal font-serif italic'>By Designer name</h6>
                                <p className='text-[#000000] text-[12px] leading-[16px] font-medium font-sans pt-2'>Total no of products (1)</p>

                                <div className='flex text-[#000000] justify-between mt-2'>
                                    <p className='text-[12px] leading-[16px] font-medium font-sans pt-1'>Date : 02 / 12 / 2022 </p>
                                    <a href="" className='underline text-[12px] md:text-[14px] leading-[28px] font-bold font-sans '>View details</a>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-[289px] md:w-1/2  w-full p-4  bg-[#F1F1F1] border-[0.5px] border-[#857250] rounded-lg gap-4">
                            <div className="justify-cente  border-[3px] border-[#A1CACA] rounded-lg">
                                <div
                                    className="block max-w-sm rounded-lg bg-white shadow-lg dark:bg-neutral-700">
                                    <a href="#!" data-te-ripple-init data-te-ripple-color="light">
                                        <Image
                                            className="rounded-lg w-full"
                                            src="images/Rectangle 4530.svg"
                                            alt=""
                                            width={10}
                                            height={10}

                                        />
                                    </a>
                                </div>
                            </div>
                            <div className="py-4">
                                <button className=" text-[#FF6C59] text-[10px] md:text-[12px] leading-[13px] md:leading-[16px] font-sans font-medium py-1">
                                    Measurement pending
                                </button>

                                <div className='flex text-[#000000] justify-between pt-2'>
                                    <a href="" className='underline text-[14px] leading-[18px] font-normal font-sans '>u2lynk.com/id=5234</a>
                                    <p className='text-[18px] leading-[28px] font-bold font-sans'>$8000</p>
                                </div>
                                <h6 className='text-[#000000] text-[22px] md:text-[20px] leading-[21px] font-normal font-serif italic'>By Designer name</h6>
                                <p className='text-[#000000] text-[12px] leading-[16px] font-medium font-sans pt-2'>Total no of products (1)</p>

                                <div className='flex text-[#000000] justify-between mt-2'>
                                    <p className='text-[12px] leading-[16px] font-medium font-sans pt-1'>Date : 02 / 12 / 2022 </p>
                                    <a href="" className='underline text-[12px] md:text-[14px] leading-[28px] font-bold font-sans '>View details</a>
                                </div>
                            </div>
                        </div>

                        <div className="lg:w-[289px] md:w-1/2  w-full p-4  bg-[#F1F1F1] border-[0.5px] border-[#857250] rounded-lg gap-4">
                            <div className="justify-cente  border-[3px] border-[#A1CACA] rounded-lg">
                                <div
                                    className="block max-w-sm rounded-lg bg-white shadow-lg dark:bg-neutral-700">
                                    <a href="#!" data-te-ripple-init data-te-ripple-color="light">
                                        <Image
                                            className="rounded-lg w-full"
                                            src="images/Rectangle 4530.svg"
                                            alt=""
                                            width={10}
                                            height={10}
                                        />
                                    </a>
                                </div>
                            </div>
                            <div className="py-4">
                                <button className="bg-[#D9F2E0]  text-[#4C4D4C] text-[10px] md:text-[12px] leading-[13px] md:leading-[16px] font-sans font-medium py- px-2 rounded-full">
                                    Completed
                                </button>

                                <div className='flex text-[#000000] justify-between pt-2'>
                                    <a href="" className='underline text-[14px] leading-[18px] font-normal font-sans '>u2lynk.com/id=5234</a>
                                    <p className='text-[18px] leading-[28px] font-bold font-sans'>$8000</p>
                                </div>
                                <h6 className='text-[#000000] text-[22px] md:text-[20px] leading-[21px] font-normal font-serif italic'>By Designer name</h6>
                                <p className='text-[#000000] text-[12px] leading-[16px] font-medium font-sans pt-2'>Total no of products (1)</p>

                                <div className='flex text-[#000000] justify-between mt-2'>
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