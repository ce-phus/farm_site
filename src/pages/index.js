import React from 'react'
import Layout from '../components/Layout'
import Image from 'next/image'
import Head from 'next/head'
import { fadeIn } from '../../variants'
import { motion } from 'framer-motion'
import bgimage from '../../public/images/img5.jpg'
import ImageCarousel from '../components/ImageCarousel'
import Button from '../components/Button'
import Section from '../components/Section'
import Gallery from '../components/Gallery'


const images1 = [
  '/images/gallery/img6.jpg',
  '/images/gallery/img1.jpg',
  '/images/gallery/img2.jpg',
];

const images2=[
  'images/gallery/img7.jpg',
  'images/gallery/img9.jpg',
  'images/gallery/img10.jpg',
];


const photos =[
  '/images/gallery/img6.jpg',
  '/images/gallery/img7.jpg',
  '/images/gallery/img8.jpg',
  '/images/gallery/img9.jpg',
  '/images/gallery/img10.jpg',
  '/images/gallery/img11.jpg',
  '/images/gallery/img12.jpg',

]


const index = () => {
  return (
    <>
    <Head>
    <title>Create Next App</title>
        <meta name="description" content="Home" />
    </Head>

    <main className='flex items-center text-dark w-full min-h-screen dark:text-light'>
      <Layout className='pt-0 md:p-16 sm:pt-8'>
      
        <div className='flex flex-row justify-between items-center w-full bg-scroll  h-[972px]'>
          <div className='w-full h-1/2 overflow-hidden'>
            <Image
            src={bgimage}
            alt='farm image' 
            layout='fill'
            objectFit='cover'/>
            <div className='absolute inset-0 w-1/2 flex-col items-center self-center lg:w-full lg:text-center'>
            <motion.h1 
            variants={fadeIn('down', 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className=' h1 pt-60 inline-block w-full font-bold text-6xl text-light items-center pl-5 '>OITI FARMS LTD</motion.h1>
            <p className='font-medium text-light text-4xl pl-5'>"Always Fresh"</p>
            </div>
          
        
          </div>
        </div>
          <div className='flex flex-col justify-end
            w-full pt-8 font-semibold grid gap-4 sm:gap-6 grid-cols-2 dark:text-light'>
            <div className='w-full dark:text-light md:col-span-4'>
              <h2 className='text-dark font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl py-5 dark:text-light'>About Us</h2>
            <h1 className='text-dark font-bold text-4xl ss:text-[68px] ss:leading-[100px] sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl dark:text-light'>OITI FARMS <span className='text-primary'>LTD.</span></h1>
            <p className='font-normal text-dark pt-4 dark:text-light'>

            Welcome to OITI FARMS, a haven for sustainable agriculture located in the picturesque landscapes of Kajiado. Here, amidst the rolling hills and fertile soils, we cultivate a diverse array of crops, ranging from hearty cash crops to nourishing food crops. Our commitment to responsible farming practices extends to the integration of livestock, creating a harmonious ecosystem that defines the essence of our farm.</p>



            <p className='text-dark font-normal pt-3 dark:text-light'>
              Join us on a journey that celebrates the rich tapestry of agriculture in Kajiado. At OITI FARMS, we are more than a farm; we are a community dedicated to cultivating a sustainable and thriving environment. Explore the story of our farm, where the love for the land and a passion for sustainable living come together in the heart of Kajiado, providing our community with the very best nature has to offer.
            </p>


              
          </div>
        <div className='md:col-span-4 py-20'>
          <ImageCarousel images={images1}
          className='w-full max-w-xl mx-auto h-[100px]'
          />
          <div className='pt-3'>
          <Button/>
          </div>
          
        </div>
        </div>
        <div className='pt-10 gap-4 grid grid-cols-2 font-semibold flex flex-col justify-end sm:gap-6'>
          <div className='md:col-span-4'>
          <ImageCarousel images={images2}/>
          </div>
          <div className='md:col-span-4'>
            <p className='font-normal text-dark dark:text-light'>Our fields flourish with an array of crops, encompassing everything from vibrant fruits and vegetables to essential cash crops that contribute to the economic vitality of our community. From the bounty of our harvest, we offer a selection of fresh produce for sale, providing our community with wholesome and locally sourced options.</p>
            <p className='font-normal text-dark dark:text-light pt-4'>
            But our commitment doesn't stop there. At Oiti's Farm, we embrace a holistic approach to farming that extends beyond crops. We raise livestock with care, ensuring their well-being and integrating them into our sustainable farming practices. From farm-fresh eggs to responsibly raised meats, our livestock contribute to a well-rounded selection of homemade products available for purchase.
            </p>
          </div>
         

        </div>

        <div className='pt-20 justify between items-center flex '>
          <Section/>
        </div>
        <div>
          <Gallery photos={photos}/>
        </div>
      </Layout>
    </main>
    </>
  )
}

export default index
          
          
          
