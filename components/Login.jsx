import React from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { useState } from 'react';

import { useFormik } from 'formik';
import * as yup from 'yup';

// import 'bootstrap/dist/css/bootstrap.min.css';
const Login = () => {
    const router = useRouter()
    const [message, setMessage] = useState(''); // This will be used to show a message if the submission is successful
    const [submitted, setSubmitted] = useState(false);

    const formik = useFormik({
        initialValues: {
            name: '',
            phonenumber: '',
        },
        onSubmit: () => {
            setMessage('Form submitted');
            setSubmitted(true);
        },
        validationSchema: yup.object({
            name: yup.string().trim().required('Name is required'),
            phonenumber: yup
                .string()
                .required('Phonenumber is required')
                .min(10)
                .max(13)

        }),
    });
    return (
        <>
            <div className="relative flex md:py-10 lg:min-h-screen flex-col justify-center overflow-hidden md:bg-[#6A5B40]">
                <div className="relative bg-white px-6 pt-6 pb-16 shadow-xl mx-auto w-full max-w-lg rounded-2xl">
                    <div className="mx-auto flex w-full max-w-md flex-col">
                        <div className='mx-auto flex justify-center mb-5'>
                           
                            <Image
                                src='images/bag.svg'
                                width={76}
                                height={96}
                                alt=''
                            />
                        </div>

                        <div className=''>
                            <h6 className='text-center mb-3 text-[#0A0A0A] text-[25px] md:text-[30px] leading-[36px] font-normal font-serif'>Welcome !</h6>
                            <p className='text-center mx-auto text-[16px] leading-[22px] font-sans font-normal md:w-[342px] opacity-50'>An exclusive community to buy apparel that fits you like a glove</p>
                        </div>
                        <div className=''>
                            <form onSubmit={formik.handleSubmit}>
                                <div className="md:flex md:justify-center py-4" data-te-input-wrapper-init>
                                    <input
                                        type="text"
                                        name='name'
                                        className="peer block min-h-[auto] w-full md:w-[343px] lg:w-[343px] rounded border border-[#000000] py-[0.32rem] px-3 leading-[2.15] outline-none border-opacity-40  text-[15px] font-normal"
                                        id="exampleFormControlInput2"
                                        placeholder="Enter Name"
                                        value={formik.values.name}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    />

                                </div>

                                <div>
                                    {formik.errors.name && (
                                        <div className="text-red-300 text-center pb-">{formik.errors.name}</div>
                                    )}
                                </div>
                                <div className="md:flex md:justify-center " data-te-input-wrapper-init>
                                    <input
                                        type="text"
                                        name='phonenumber'
                                        className="peer block min-h-[auto] w-full md:w-[343px] lg:w-[343px] rounded border border-[#000000] py-[0.32rem] px-3 leading-[2.15] outline-none border-opacity-40 text-[15px] font-normal"
                                        id="exampleFormControlInput2"
                                        placeholder="Phone Number"
                                        value={formik.values.phonenumber}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    />

                                </div>
                                <div>
                                    {formik.errors.phonenumber && (
                                        <div className="text-red-300 text-center">{formik.errors.phonenumber}</div>
                                    )}

                                </div>

                                <div className="flex w-[270px] mx-auto py-4">
                                    <input
                                        className=" mt-[0.28rem] mr-[6px] md:-ml-10 -ml-[1.5rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-[#6A5B40] outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-[#6A5B40] bg-[#6A5B40] checked:before:opacity-[0.16] checked:after:absolute checked:after:ml-[0.25rem] checked:after:-mt-px checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-t-0 checked:after:border-l-0 "
                                        type="checkbox"
                                        value=""
                                        id="checkboxDefault" />
                                    <label
                                        className="inline-block pl-[0.15rem hover:cursor-pointer"
                                        for="checkboxDefault">
                                        <span className='text-[14px] leading-[18px] font-normal font-sans text-[#000000] opacity-60'>I accept to the </span>
                                        <span className='text-[#418DFF] text-[14px] font-medium leading-[20px] font-sans'>Terms and conditions </span>
                                    </label>
                                </div>
                                <button className="w-full  md:w-[343px] mx-auto flex justify-center bg-[#6D5C41]  text-[#FFFFFF] text-[16px] leading-[20px] font-bold font-sans py-2 px-4 rounded-full"
                                    onClick={() => submitted ? router.push('/verify') : setSubmitted(false)}
                                    type='submit'
                                >
                                    Send OTP
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Login;