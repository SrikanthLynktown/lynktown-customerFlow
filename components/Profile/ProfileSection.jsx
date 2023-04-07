import React from 'react'
import Navbar from '../Header/Navbar'
import Image from 'next/image'

const ProfileSection = () => {
    return (
        <>

            <div className=''>
                <div className='invisible md:visible'>
                    <Navbar />
                </div>


                <div className="flex gap-6 text-[#0A0A0A] -mt-14 -mb-5 md:-mt-0 md:-mb-0 visible md:invisible ">
                    <Image
                        src='icons/arrowicon.svg'
                        alt='arrowicon'
                        width={12}
                        height={12}
                        className='ml-6'
                    />


                    <h6 className='text-[#000000] ml-[95px] text-[20px] leading-[28px] font-normal font-serif '>Profile</h6>
                </div>
                {/* profile card */}
                <div className='md:flex'>
                    <div className='invisible md:visible'>
                        <Image
                            src='icons/arrowicon.svg'
                            alt='arrowicon'
                            width={25}
                            height={17}
                            className='ml-6'
                        />

                    </div>

                    <div class="flex justify-center mx-auto">
                        <div class="block w-[376px] md:w-[805px] md:h-[700px] h-full md:border-[1px] border-[#6A5B40] rounded-lg bg-white p- shadow-lg ">

                            <div className=' relative bg-[#857250] md:w-[804px] md:h-[249px] h-[150px] md:rounded-lg'>
                                <div className=''>
                                    <div className="md:pt-10 pt-5 flex justify-center  gap-3 invisible md:visible ">
                                        <p className='text-white md:text-[45px] font-normal  font-serif ml-'>Profile</p>
                                    </div>
                                    <div className='absolute top-[100px] left-[18px] md:top-[200px] md:left-[37px]'>
                                        <Image
                                            src='icons/camera.svg'
                                            width={35}
                                            height={35}
                                            alt=''

                                        />

                                    </div>
                                    <div>
                                        <div className='md:pt-8 pt-5 relative'>
                                            <Image className=" w-[144px] h-[144px] md:w-[201px] md:h-[201px] rounded-full  shadow-lg mx-auto" src="images/proimg.svg" alt="Avatar of Jonathan Reinink"
                                                width={201}
                                                height={201}
                                            />


                                        </div>


                                        <div className='absolute left-[220px] top-[170px] md:left-[460px] md:top-[290px]'>
                                            <Image
                                                src='icons/camera.svg'
                                                width={35}
                                                height={35}
                                                alt=''

                                            />
                                        </div>

                                    </div>
                                    <div className='flex justify-end px-6 mb-4'>
                                        <Image
                                            src="icons/edit.svg"
                                            width={23}
                                            height={23}
                                            alt=''
                                        />
                                    </div>
                                </div>


                                <div className="flex flex-wrap px-6 md:px-0">

                                    <div className="mx-auto " data-te-input-wrapper-init>
                                        <div className='mb-2'>
                                            <label htmlFor="" className='text-[#0A0A0A] text-[14px] leading-[18px] font-normal font-sans '>User Name</label>

                                        </div>

                                        <input
                                            type="text"
                                            className="peer block h-[48px] w-[343px] md:w-[343px] lg:w-[343px] rounded border border-[#000000] py-[0.32rem] px-3 leading-[18px] outline-none border-opacity-40 text-[#9D9D9D]  text-[14px] font-normal font-sans"
                                            id="exampleFormControlInput2"
                                            placeholder="Anup Raj" />

                                    </div>



                                    <div className="mx-auto pt-4 md:pt-0 " data-te-input-wrapper-init>
                                        <div className="mb-2">
                                            <label htmlFor="" className='text-[#0A0A0A] text-[14px] leading-[18px] font-normal font-sans mt-4'>Phone Number</label>

                                        </div>
                                        <input
                                            type="text"
                                            className="peer  block h-[48px] w-[343px] md:w-[343px] lg:w-[343px] rounded border border-[#000000] py-[0.32rem] px-3 leading-[18px] outline-none border-opacity-40 text-[#9D9D9D]  text-[14px] font-normal font-sans"
                                            id="exampleFormControlInput2"
                                            placeholder="89476 56720" />
                                    </div>


                                    <div className="mx-auto pt-4 " data-te-input-wrapper-init>
                                        <div className="mb-2">
                                            <label htmlFor="" className='text-[#0A0A0A] text-[14px] leading-[18px] font-normal font-sans'>Email id</label>

                                        </div>
                                        <input
                                            type="text"
                                            className="peer block h-[48px] w-[343px] md:w-[343px] lg:w-[343px] rounded border border-[#000000] py-[0.32rem] px-3 leading-[18px] outline-none border-opacity-40 text-[#9D9D9D]  text-[14px] font-normal font-sans"
                                            id="exampleFormControlInput2"
                                            placeholder="test@gmail.com" />
                                    </div>


                                    <div className="mx-auto pt-4 " data-te-input-wrapper-init>
                                        <div className="mb-2">
                                            <label htmlFor="" className='text-[#0A0A0A] text-[14px] leading-[18px] font-normal font-sans'>Gender</label>
                                        </div>
                                        <select id="gender" className="peer block h-[48px] w-[343px] md:w-[343px] lg:w-[343px] rounded border border-[#000000] py-[0.32rem] px-3 leading-[18px] outline-none border-opacity-40 text-[#9D9D9D]  text-[14px] font-normal font-sans">
                                            <option selected>Choose Gender</option>
                                            <option value="MALE">Male</option>
                                            <option value="FEMALE">Female</option>
                                            <option value="OTHERS">Others</option>
                                        </select>
                                    </div>

                                </div>



                                <div className="flex gap-4 px-6 md:px-8 md:pb- pb- mt-6">
                                    <p className='text-[#000000] opacity-40 text-[14px] leading-[18px] font-normal font-sans '>Need help? </p>
                                    <Image
                                        src='icons/whatsapp.svg'
                                        width={20}
                                        height={20}
                                        alt=''
                                    />

                                </div>
                                <div className='md:pb-20 pb-4 px-6'>
                                    <button class="mt-6  mx-auto justify-center items-center flex bg-[#857250]  text-white font-bold md:w-[200px] w-full h-[48px] rounded-full">
                                        Save
                                    </button>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>


        </>
    )
}

export default ProfileSection