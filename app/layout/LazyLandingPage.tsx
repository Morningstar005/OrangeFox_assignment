"use client"

import Image from "next/image"
import ReviewSection from "./ReviewSection"


const LazyLandingPage = () => {
  return (
    <>
    <div
    className=" relative bg-[url('https://assets-global.website-files.com/60ef088dd8fef919efabb412/63be5a8ac9d13ec38fbaf283_Ellipse%208.svg')] bg-no-repeat mb-[40px]  bg-cover bg-center h-[1120px] -mt-[24rem]">
        <div>
        <div className="absolute flex flex-col items-center justify-center mt-[30rem] translate-y-2 left-0 right-0">
            <Image 
            alt="bg"
            src={"https://assets-global.website-files.com/60ef088dd8fef919efabb412/60ffb7d0bbdd6e7341d50963_SN%20-%20Logo%20Light.svg"} 
            width={250} height={250}/>

            <div className="m-5 items-center text-center justify-center  ">
                <h2 className="text-white font-bold text-[1.5rem] md:text-[2.8rem]">6 Months Growth Plan Giveaway</h2>
            </div>
            <div className=" mx-2 md:mx-0 md:w-[40%] items-center text-center mb-5 text-white ">
                <p className="leading-[1.4rem] font-normal">Get more out of Scalenut with our rewards program. free Growth Plan and referral credits up for grabs to maximize your saving.</p>
            </div>

            <button 
            className="bg-[#cefdf3] text-[rgba(3,90,71,.3)] hover:text-[#035a47] text-center shadow-[0_0_15px_rgba(0, 0, 0, 0.2)] mt-[9rem]   md:mt-[9rem] px-0 md:px-4 py-9 rounded-[1.25rem] transition duration-300 w-[70%] md:w-auto">
                <div className="flex flex-col gap-4">
                    <h1 className="font-bold text-[2rem]">Referral Program</h1>
                    <p className=" leading-[14px] w-[90%] m-auto text-center ">Earn credit by sharing with friends,relative and people you know</p>
                </div>
            </button>
        </div>

        </div>

    </div>
    
    </>

  )
}

export default LazyLandingPage