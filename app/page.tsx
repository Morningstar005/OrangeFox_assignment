import React from 'react'
import { Cart2, Carts, HowsWork, LazyLandingPage, ReviewSection } from './layout/index'




const page = () => {
  return (
    <>
    <div className="overflow-x-hidden"> 
      <LazyLandingPage/>  
      <Carts/>
      <Cart2/>
      <HowsWork/>
      <ReviewSection/>
    </div>
    </>
  )
}

export default page