"use client"
import Image from 'next/image'
import React from 'react'

const HowsWork = () => {
    return (
        <div className=' w-full  mx-10 mb-10'>
            <div className="flex flex-col self-center mt-20  max-md:mt-10 ">
                <div className="text-5xl font-semibold leading-[62.48px] text-neutral-900 max-md:max-w-full flex justify-start">
                    How It Works
                </div>
                {/* <div className="flex  mt-8 justify-between"> */}
                    <div className="flex flex-col md:flex-row justify-between w-[70%] mx-[0rem] md:mx-[3.50rem] md:gap-x-[5.5rem] lg:mx-[16rem] lg:gap-x-0 mt-4 md:mt-8 ">
                        <div className="flex flex-cal w-[20rem]  ">
                            <div className="flex flex-col grow px-7 py-6 mx-auto w-full rounded-lg border border-solid shadow-sm bg-slate-50 border-blue-700 border-opacity-10 max-md:px-5 max-md:mt-10">
                                <div className="flex gap-5 justify-between px-px text-xl leading-7 text-center whitespace-nowrap text-blue-700 text-opacity-20">
                                    <div className="self-end mt-12 max-md:mt-10">01</div>
                                    <Image
                                        alt="bg"
                                        src={"https://assets-global.website-files.com/60ef088dd8fef919efabb412/63be724e4823669d982f5e6a_Create.svg"}
                                        width={70} height={70}
                                        
                                    />
                                </div>
                                <div className="mt-7 text-5xl text-center text-blue-700 leading-[57.34px] max-md:text-4xl">
                                    Create
                                </div>
                                <div className="mt-8 text-base font-light leading-6 text-gray-600">
                                    Post <span className="font-bold">reviews</span>, create{" "}
                                    <span className="font-bold">content</span>
                                    <br />
                                    and give a <span className="font-bold">shout-out</span> on your
                                    <br />
                                    social media
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col w-[20rem]">
                            <div className="flex flex-col grow px-7 py-6 mx-auto w-full text-blue-700 rounded-lg border border-solid shadow-sm bg-slate-50 border-blue-700 border-opacity-10 max-md:px-5 max-md:mt-10">
                                <div className="flex gap-5 justify-between px-px text-xl leading-7 text-center whitespace-nowrap text-blue-700 text-opacity-20">
                                    <div className="self-end mt-12 max-md:mt-10">02</div>
                                    <Image
                                        alt="bg"
                                        src={"https://assets-global.website-files.com/60ef088dd8fef919efabb412/63be7696ee573225d8e248f9_Share.svg"}
                                        width={70} height={70}
                                    />
                                </div>
                                <div className="mt-7 text-5xl text-center leading-[57.6px] max-md:text-4xl">
                                    Submit
                                </div>
                                <div className="mt-8 text-base font-light leading-6 max-md:mr-2.5">
                                    Submit the <span className="font-bold">published URLs</span>{" "}
                                    with
                                    <br />
                                    us via chat or email us at
                                    <br />
                                    <span className="text-blue-700">wecare@scalenut.com</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col w-[20rem]">
                            <div className="flex flex-col grow px-7 py-6 mx-auto w-full rounded-lg border border-solid shadow-sm bg-slate-50 border-blue-700 border-opacity-10 max-md:px-5 max-md:mt-10">
                                <div className="flex gap-5 justify-between px-px text-2xl leading-7 text-center whitespace-nowrap text-blue-700 text-opacity-20">
                                    <div className="self-end mt-12 max-md:mt-10">03</div>
                                    <Image
                                        alt="bg"
                                        src={"https://assets-global.website-files.com/60ef088dd8fef919efabb412/63be769e6c450a783dbd254f_Earn.svg"}
                                        width={70} height={70}
                                    />
                                </div>
                                <div className="mt-7 text-5xl text-center text-blue-700 leading-[57.96px] max-md:text-4xl">
                                    Earn
                                </div>
                                <div className="mt-8 text-sm font-light leading-6 text-gray-600 max-md:mr-1.5">
                                    We will <span className="font-bold">upgrade your account</span>{" "}
                                    to
                                    <br />
                                    the<span className="font-bold"> Growth Plan </span>after
                                    <br />
                                    verification.
                                </div>
                            </div>
                        </div>
                    {/* </div> */}
                </div>
            </div>
        </div>
    )
}

export default HowsWork