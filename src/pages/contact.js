import React from 'react'
import Layout from '../components/Layout'
import bgimage from '../../public/images/gallery/img7.jpg'
import Head from 'next/head'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { fadeIn } from '../../variants'
import ContactForm from '../components/ContactForm'

const contact = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Home" />
      </Head>
      <main className='flex items-center text-dark w-full min-h-screen dark:text-light'>
        <Layout className='pt-0 md:p-16 sm:pt-8'>
          <div className='flex flex-row justify-between items-center w-full bg-scroll  h-[972px]'>
            <div className='w-full h-1/4 overflow-hidden'>
              <Image
              src={bgimage}
              alt=''
              layout='fill'
              objectFit='cover'/>
            <div className='absolute inset-0 w-1/2 flex-col items-center self-center lg:w-full lg:text-center'>
            <motion.h1 
            variants={fadeIn('down', 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className=' h1 pt-60 inline-block w-full font-bold text-6xl text-light items-center pl-5 '>CONTACT US</motion.h1>
            </div>
            </div>
          </div>

          <div className='flex flex-col justify-center items-center'>
            
              <h1 className='text-5xl font-bold dark:text-light'>Get In <span className='text-primary'>Touch.</span></h1>
              <p className='pt-5 font-normal dark:text-light'>

Thank you for your interest in our farm! We would love to hear from you and answer any questions you may have. Whether you're inquiring about our fresh produce, farm tours, or any other aspect of our operations, please don't hesitate to reach out. Our dedicated team is here to provide you with the information you need. You can contact us through the provided form, email, or phone number below. We look forward to connecting with you and sharing the beauty and bounty of our farm.</p>


            
          </div>
          <div className='pt-5'>
            <ContactForm/>
          </div>
            
          
        </Layout>
      </main>
    </>
  )
} 

export default contact