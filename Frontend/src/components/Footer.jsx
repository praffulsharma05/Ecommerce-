import React from 'react'
import { assets } from '../assets/frontend_assets/assets'

const Footer = () => {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
    <div>
<img src={assets.logo} className='mb-5 w-32 ' alt="" />
<p className='w-full md:w-2/3 text-gray-600'>
Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure eaque magnam dolorum cupiditate exercitationem veniam quasi consequuntur quis nesciunt modi at, et aspernatur tempore fugit eveniet deserunt ratione ullam ad.
</p>
    </div>
    <div>
        <p className='text-xl fontend-medium mb'>COMPANY</p>
        <ul className='flex flex-col gap-1 text-gray-600'>
            <li>HOME</li>
            <li>About us</li>
            <li>Delivery</li> 
            <li>Privacy policy</li>
        </ul>
    </div>
    <div>
      <p className='text-xl font-medium  mb-5'>GET IN TOUCH</p>
      <ul className='flex flex-col gap-1 text-gray-600'>
          <li>+1-212-456-4545</li>
          <li>contact@foreveryou.com</li>
      </ul>
    </div>
      </div>
      <div>
        <hr />
        <p className='py-5 text-sm text-center'>Copyright 2024@ forever.com  . All Right deserves</p>
      </div>
    </div>
  )
}

export default Footer
