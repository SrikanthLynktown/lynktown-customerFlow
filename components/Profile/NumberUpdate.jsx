import React from 'react'
import Navbar from '../Header/Navbar'
import Image from 'next/image'

const NumberUpdate = () => {
    return (
        <>
            <div className='invisible md:visible'>
                <Navbar />
            </div>
            <div className="md:flex md:py-20 -mt-12 md:-mt-0">

                <div className=''>
                    <Image
                        src='icons/arrowicon.svg'
                        alt='arrowicon'
                        width={25}
                        height={17}
                        className='ml-6'
                    />

                </div>
                <div class="flex  mx-auto px-6 pt-10 md:pt-0">
                    <div
                        class="block md:w-[499px] md:h-[341px] rounded-lg bg-white p-6  border-[1px] border-[#6A5B40] ">
                        <h6 className='text-[#0A0A0A] text-[20px] md:text-[24px] leading-[36px] font-normal font-sans text-center'>
                            Update your mobile number
                        </h6>


                        <p class="mb-6 text-[#000000] opacity-50 text-center text-[14px] leading-[22px] font-normal font-sans ">
                            Will be verified in the next step
                        </p>


                        <form>
                            <div class="relative mt-10 mb-12" data-te-input-wrapper-init>
                                <input
                                    type="text"
                                    class="peer block mx-auto w-[342px] h-[68px] rounded border-[2px] border-[#000000] py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                    id="exampleInputEmail1"
                                    aria-describedby="numberHelp"
                                    placeholder="Mobile Number" />
                                <label
                                    for="exampleInputEmail1"
                                    class="mx-auto pointer-events-none absolute top-0 left-20 mb-6  origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-[#000000] opacity-60 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-[#000000] peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-neutral-200"
                                >Mobile Number</label>

                            </div>


                            <div  >
                               
                                    <button className="w-full  md:w-[343px] h-[48px] mx-auto flex justify-center items-center bg-[#6D5C41]  text-[#FFFFFF] text-[16px] leading-[20px] font-bold font-sans rounded-full"
                                    >
                                        Verify
                                    </button>
                               
                            </div>

                        </form>

                    </div>

                    {/* form */}


                </div>
            </div>
        </>
    )
}

export default NumberUpdate