"use client"
import Image from 'next/image'


const Cart2 = () => {
  return (
    <div className=' relative mx-10 mb-10'>
    <p className='absolute font-bold left-12 -translate-y-[1rem] bg-white px-2 text-[1.25rem]'>Create Long-Form Content</p>
     <div className="justify-center px-10 py-10 rounded-lg border border-amber-300 border-solid max-md:px-5">
    <div className="flex gap-5 max-md:flex-col max-md:gap-0">
      <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
        <div className="flex flex-col grow items-start pt-6 pr-20 pb-11 pl-6 w-full font-semibold rounded-xl  bg-orange-100 bg-opacity-50 max-md:px-5 max-md:mt-10 max-md:max-w-full shadow-[1px_-1px_20px_3px_rgba(18,179,249,0.15)] ">
        <Image
      alt="bg"
   src={"https://assets-global.website-files.com/60ef088dd8fef919efabb412/63be70efee57322a20e1e46f_Blog.svg"}
      width={70}
      height={70}
     />
          <div className="mt-6 text-lg leading-7 text-neutral-900">Free</div>
          <div className="mt-4 text-4xl font-bold leading-10 bg-clip-text">
            2-month
          </div>
          <div className="mt-3.5 text-xl leading-7 text-neutral-900">
            Growth Plan
          </div>
          <div className="mt-6 font-light text-base  leading-6 text-black">
          Write a{" "}
            <span className="font-bold ">blog reviewing Scalenut,</span>{" "}highlighting its features and your personal experience
          </div>
        </div>
      </div>

      <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
        <div className="flex flex-col grow items-start pt-6 pr-20 pb-11 pl-6 w-full font-semibold rounded-xl bg-orange-100 bg-opacity-50 max-md:px-5 max-md:mt-10 max-md:max-w-full shadow-[1px_-1px_20px_3px_rgba(18,179,249,0.15)]">
        <Image
      alt="bg"
   src={"https://assets-global.website-files.com/60ef088dd8fef919efabb412/63be6ab5ee5732ec1fe19bc9_Capterra.svg"}
      width={70} height={70}
     />
          <div className="mt-5 text-lg leading-7 text-neutral-900">Free</div>
          <div className="mt-4 text-4xl font-bold leading-10 bg-clip-text">
            2-month
          </div>
          <div className="mt-3.5 text-xl leading-7 text-neutral-900">
            Growth Plan
          </div>
          <div className="mt-6 font-light text-base leading-6 text-black">
            Create a{" "}
            <span className="font-bold ">Youtube video</span>{" "} reviewing Scalenut, walk-through of its features and functions
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
  )
}

export default Cart2