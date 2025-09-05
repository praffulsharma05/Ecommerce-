import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/frontend_assets/assets'
import NewsletterBox from '../components/NewsletterBox'
const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
          <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
          <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
                <p>Forever was born out of a passion for innovation Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea modi officiis enim pariatur itaque quam consequatur, facilis cum dicta tempora, eum amet voluptatibus excepturi voluptatum quibusdam dignissimos ut? Amet, cum. </p>
                <p>Since our inception.we've worked tirelessly to curate a diverse selection of high-quantity products that cater to every taste and preference.From fashion and beauty to electrons and home ess </p>
                <b className='flex items-start text-gray-800'>Our Mission </b>
                <p>Our Mission at Forever is empower customers with choice, convenience, and confidence.We're dedicated to providing a seamless shopping experience that exceeds expectations, from browsing and ordering to delievery</p>
          </div>
      </div>
      <div className='text-xl py-4'>
    <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>
      <div className='flex flex-col  md:flex-row text-sm mb-20'>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
              <b>Quanlity Assurance:</b>
              <p className='text-gray-600'>With our user-friendly interface and hussle-free product to ensure it meets our stringent quality standards. Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          </div>
             <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
              <b>Convenience:</b>
              <p className='text-gray-600'>We meticulosly select and vet each product to ensure it meets our stringent quality standards dfe efei9gd ef peaFFF WE eff sfefe ewerrg lowwdd dd df.</p>
          </div>
             <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
              <b>Expectational Customer Service:</b>
              <p className='text-gray-600'>Our teams of dedicated professionals is here to assists you to way, ensuring you and vet each product to ensure it meets our stringent quality standards.</p>
          </div>
      </div>
      <NewsletterBox />
    </div>
  )
}

export default About
