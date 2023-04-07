import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link'
import { useRouter } from 'next/router';

const Otp = () => {
  const router = useRouter()
  const [otp, setotp] = useState()
  const [error, setError] = useState()

  const validation = () => {
    let flag = true;
    if (!otp) {
      setError('Please Enter Otp')
      flag = false
    }
    return flag;
  }

  return (
    <>
      <div className="relative flex md:py-6 lg:min-h-screen flex-col justify-center overflow-hidden md:bg-[#6A5B40]">
        <div className="relative bg-white px-6 py-10 md:pt-20 pb-20 shadow-xl mx-auto w-full max-w-lg rounded-2xl">
          <div className="mx-auto flex w-full max-w-md flex-col">

          <div className='mx-auto flex justify-center'>
                           
                           <Image
                               src='images/bag.svg'
                               width={76}
                               height={96}
                               alt=''
                           />
                       </div>

            <div className=' visible md:invisible pb-6'>
              <Image
                src="icons/Arrow 1.svg"
                alt=''
                width={28}
                height={28}
              />
            </div>
            <div className="flex flex-col md:items-center md:justify-center md:text-center md:space-y-2">

              <div className="text-[#0A0A0A] text-[25px] md:text-[30px] leading-[36px] font-normal font-serif ">
                <p>OTP verification</p>
              </div>
              <div className="flex flex-row text-[14px] md:text-[16px] leading-[22px] font-normal font-sans opacity-50 ">
                <p>Please enter the OTP sent to +919876543210</p>
              </div>
            </div>

            <div>
              <form >
                <div className="flex flex-col space-y-5">
                  <div className="md:mx-auto md:py-4 " data-te-input-wrapper-init>
                    <label htmlFor="" className='text-[#0A0A0A] text-[14px] leading-[18px] font-normal font-sans invisible md:visible'>Enter Otp</label>
                    <input
                      type="text"
                      className="peer block h-[44px] w-full md:w-[343px] lg:w-[343px] rounded border border-[#000000] py-[0.32rem] px-3 leading-[18px] outline-none border-opacity-40 text-[#9D9D9D]  text-[14px] font-normal font-sans"
                      id="exampleFormControlInput2"
                      placeholder="8000" />
                  </div>

                  <div className="flex flex-col space-y-5">
                    <div  >
                      <Link href="/home">
                        <button className="w-full  md:w-[343px] mx-auto flex justify-center bg-[#6D5C41]  text-[#FFFFFF] text-[16px] leading-[20px] font-bold font-sans py-2 px-4 rounded-full"
                        // type='submit' onClick={() => validation() ? router.push('/home')}
                        >
                          Verify
                        </button>
                      </Link>
                    </div>
                    <div className="flex flex-row items-center justify-center text-center text-[16px] font-normal leading-[22px] font-sans space-x-1">
                      <p className='text-[#6C6C6C]  '>Didn’t recieve code?</p>
                      <a className="flex flex-row items-center text-[#0645AD]" href="http://" target="_blank" rel="noopener noreferrer">Re-send OTP</a>
                    </div>

                    <div className="flex flex-row items-center justify-center text-center text-[14px] leading-[18px] font-sans font-normal space-x-1">
                      <p className='text-[#6C6C6C]'>Try to fill within</p>
                      <span className="flex flex-row items-center text-[#D0342C]">00.13</span>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>


    </>
  )
}
export default Otp;