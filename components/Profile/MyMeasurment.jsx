import React from "react";
import Navbar from "../Header/Navbar";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from '../../styles/Home.module.css'
const MyMeasurment = () => {
    const router = useRouter()
    return (
        <>

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
                            <div className='text-[#0A0A0A] text-[18px] leading-[28px] font-normal font-serif '>Measurements</div>
                        </div>

                    </div>
                </div>


                <div className='invisible md:visible'>
                    <div className='px-10 flex gap-1'>
                        <span className='text-[#9D8E73] text-[18px] font-medium font-sans '>Home</span>
                        <span className='text-[#9D8E73] text-[18px] font-medium font-sans'>/</span>
                        <span className='text-[#9D8E73] text-[18px] font-medium font-sans'>Profile</span>
                        <span className='text-[#9D8E73] text-[18px] font-medium font-sans'>/</span>
                        <span className='text-[#6A5B40] text-[18px] font-medium font-sans'>My Measurements</span>


                    </div>
                    <div className='px-20 py- md:py-10 flex gap-6 '>

                        <span className='text-[#6A5B40] text-[30px] leading-[22px] font-normal font-serif '>Measurements</span>
                        <hr className="md:w-[400px] h-px mt-4 bg-[#9D8E73] border-0 dark:bg-gray-700" />

                    </div>
                </div>


                {/* for card */}

                <div></div>

                <div className="text-gray-600 body-font">
                    <div className="md:container md:px-5 px-3 mx-auto">


                     

                        <div className="flex flex-wrap -mt-14 md:-mt-0">
                            <div className="md:p-4  md:w-[344px] w-full ">
                                <div className="rounded">
                                    <figure className="relative   bg-black transition duration-500 cursor-pointer filter grayscale   bg-gradient-to-r from-black via-black to-black opacity-80 rounded-[10px] ">
                                        <a href="#">
                                            <img className="md:h-[144px] w-[344px] h-[140px]  md:w-[344px]  rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-3.png" alt="image description" />
                                        </a>
                                        <figcaption className="absolute px-4  text-whit bottom-14">
                                            <div className="flex justify-between gap-28 md:gap-28">
                                                <h6 className="text-[#FFFFFF] text-[28px] leading-[36px] font-normal font-sans ">Rohith</h6>
                                                <button className="mx-auto bg-white text-[#000000] text-[12px] font-medium py- w-[82px] h-[28px] border-[1px] border-[#FFFFFF] rounded shadow">
                                                    View
                                                </button>
                                            </div>
                                            <div className="flex justify-between mx-auto gap-">
                                                <p className="text-[#FFFFFF] text-[12px] leading-[16px] font-normal font-sans ">Date: 20/08/2020</p>
                                                <button className="text-[#FFFFFF] text-[12px] font-medium py- w-[82px] h-[28px] border-[1px] border-[#FFFFFF] rounded shadow">
                                                    Delete
                                                </button>
                                            </div>
                                        </figcaption>
                                    </figure>
                                </div>
                            </div>


                            <div className="md:p-4 mt-4 md:mt-0 md:w-[344px] w-full">
                                <div className="rounded">
                                    <figure className="relative   bg-black transition duration-500 cursor-pointer filter grayscale   bg-gradient-to-r from-black via-black to-black opacity-80 rounded-[10px] ">
                                        <a href="#">
                                            <img className="md:h-[144px] w-[344px] h-[140px]  md:w-[344px]  rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-3.png" alt="image description" />
                                        </a>
                                        <figcaption className="absolute px-4  text-whit bottom-14">
                                            <div className="flex justify-between gap-28 md:gap-28">
                                                <h6 className="text-[#FFFFFF] text-[28px] leading-[36px] font-normal font-sans ">Rohith</h6>
                                                <button className="mx-auto bg-white text-[#000000] text-[12px] font-medium py- w-[82px] h-[28px] border-[1px] border-[#FFFFFF] rounded shadow">
                                                    View
                                                </button>
                                            </div>
                                            <div className="flex justify-between mx-auto gap-">
                                                <p className="text-[#FFFFFF] text-[12px] leading-[16px] font-normal font-sans ">Date: 20/08/2020</p>
                                                <button className="text-[#FFFFFF] text-[12px] font-medium py- w-[82px] h-[28px] border-[1px] border-[#FFFFFF] rounded shadow">
                                                    Delete
                                                </button>
                                            </div>
                                        </figcaption>
                                    </figure>
                                </div>
                            </div>
                        </div>


                        <div className="flex flex-wrap ">
                            <div className="md:p-4 mt-4 md:mt-0 md:w-[344px] w-full">
                                <div className="rounded">
                                    <figure className="relative   bg-black transition duration-500 cursor-pointer filter grayscale   bg-gradient-to-r from-black via-black to-black opacity-80 rounded-[10px] ">
                                        <a href="#">
                                            <img className="md:h-[144px] w-[344px] h-[140px]  md:w-[344px]  rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-3.png" alt="image description" />
                                        </a>
                                        <figcaption className="absolute px-4  text-whit bottom-14">
                                            <div className="flex justify-between gap-28 md:gap-28">
                                                <h6 className="text-[#FFFFFF] text-[28px] leading-[36px] font-normal font-sans ">Rohith</h6>
                                                <button className="mx-auto bg-white text-[#000000] text-[12px] font-medium py- w-[82px] h-[28px] border-[1px] border-[#FFFFFF] rounded shadow">
                                                    View
                                                </button>
                                            </div>
                                            <div className="flex justify-between mx-auto gap-">
                                                <p className="text-[#FFFFFF] text-[12px] leading-[16px] font-normal font-sans ">Date: 20/08/2020</p>
                                                <button className="text-[#FFFFFF] text-[12px] font-medium py- w-[82px] h-[28px] border-[1px] border-[#FFFFFF] rounded shadow">
                                                    Delete
                                                </button>
                                            </div>
                                        </figcaption>
                                    </figure>
                                </div>
                            </div>


                            <div className="md:p-4 mt-4 md:mt-0 md:w-[344px] w-full  ">
                                <div className="rounded">
                                    <figure className="relative   bg-black transition duration-500 cursor-pointer filter grayscale   bg-gradient-to-r from-black via-black to-black opacity-80 rounded-[10px] ">
                                        <a href="#">
                                            <img className="md:h-[144px] w-[344px] h-[140px]  md:w-[344px]  rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-3.png" alt="image description" />
                                        </a>
                                        <figcaption className="absolute px-4  text-whit bottom-14">
                                            <div className="flex justify-between gap-28 md:gap-28">
                                                <h6 className="text-[#FFFFFF] text-[28px] leading-[36px] font-normal font-sans ">Rohith</h6>
                                                <button className="mx-auto bg-white text-[#000000] text-[12px] font-medium py- w-[82px] h-[28px] border-[1px] border-[#FFFFFF] rounded shadow">
                                                    View
                                                </button>
                                            </div>
                                            <div className="flex justify-between mx-auto gap-">
                                                <p className="text-[#FFFFFF] text-[12px] leading-[16px] font-normal font-sans ">Date: 20/08/2020</p>
                                                <button className="text-[#FFFFFF] text-[12px] font-medium py- w-[82px] h-[28px] border-[1px] border-[#FFFFFF] rounded shadow">
                                                    Delete
                                                </button>
                                            </div>
                                        </figcaption>
                                    </figure>
                                </div>
                            </div>
                        </div>

                        <div>
                            <button className="pt-4   text-[#6A5B40] text-[20px] leading-[25px] font-bold font-sans " onClick={() => router.push('/measurment-details')}>
                                Add new measurement +
                            </button>
                        </div>

                    </div>



{/* 
                    <div className="mb-4 md:px-32 px-4 flex flex-wrap gap-4" >
                        <div className={styles.bgImg}>
                            <div className={styles.background}>
                                <p className={styles.para}>Lorem ipsum dolor sit amet consectetur </p>
                            </div>
                        </div>


                        <div className={styles.bgImg}>
                            <div className={styles.background}>
                                <p className={styles.para}>Lorem ipsum dolor sit amet consectetur </p>
                            </div>
                        </div>
                    </div>



 */}



                </div>


            </div>
        </>
    )
}
export default MyMeasurment;