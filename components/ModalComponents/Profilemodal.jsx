import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
const ProfileModal = () => {
    const router = useRouter()
    return (
        <>
            <div
                // className="w-[240px] h-ful flex items-center whitespace-nowrap rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca]"

                className='w-[180px] md:w-[240px] pb-5 bg-white rounded-lg shadow-[0_4px_9px_-4px_#3b71ca]'
            >
                <div className="flex items-center border-b-2 py- mb-3 p-2" >
                    <Image className="w-[40px] h-[40px] rounded-full mr-4" src="/images/dumy.jpg" alt="Avatar of Jonathan Reinink"
                        width={40}
                        height={40}
                    />
                    <div className="text-sm">
                        <p className="lg:text-[18px] font-bold text-[#000000]">Robert Maxwell</p>
                    </div>
                </div>
                <div className='px-'>
                    <div className="flex border-b-2 py- pb-3 px-4 gap-4">
                        <Image
                            src="/icons/notification.svg" alt=""
                            width={20}
                            height={20}
                            className=''
                        />
                        <p>Notifications</p>
                    </div>

                    <div className="flex border-b-2 mt-3 pb-3 px-4 gap-4">
                        <Image
                            src="icons/wishlist.svg" alt=""
                            width={20}
                            height={20}
                            className=''
                        />
                        <p>Wishlist</p>
                    </div>

                    <div className="flex border-b-2 mt-3 pb-3 px-4 gap-4">
                        <Image
                            src="icons/location.svg" alt=""
                            width={20}
                            height={20}
                            className=''
                        />
                        <p>My Address</p>
                    </div>
                    <div className="flex border-b-2 mt-3 pb-3 px-4 gap-4">
                        <Image
                            src="icons/location.svg" alt=""
                            width={20}
                            height={20}
                            className=''

                        />
                        <p onClick={() => router.push('/measurement')}>Measurments</p>
                    </div>
                </div>

                <div
                    className="flex-grow basis-[100%] items-center lg:!flex lg:basis-auto py-4 px-4"
                    id="navbarSupportedContent1"
                    data-te-collapse-item>
                    <a
                        className="mt-2 mr-2 flex items-center lg:mt-0"
                        href="#">
                        <Image
                            src="/images/Group 7739.svg" alt=""
                            loading="lazy"
                            width={100}
                            height={100}
                        />
                    </a>

                </div>

                <div className=''>
                    <button className="mt-5  mx-auto text-[16px] flex justify-center border border-[#DA1E28] text-[#DA1E28] font-medium py-1 px-6 rounded-full">
                        Loggout
                    </button>
                </div>

            </div>
        </>
    )
}
export default ProfileModal;