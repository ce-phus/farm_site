import React from 'react'
import Layout from '../components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import bgimage from '../../public/images/gallery/img10.jpg'
import { motion } from 'framer-motion'
import { fadeIn } from '../../variants'
import ImageCarousel from '../components/ImageCarousel'
import Section from '../components/Section'
import Gallery from '../components/Gallery'



const images1 = [
  '/images/gallery/img6.jpg',
  '/images/gallery/img1.jpg',
  '/images/gallery/img2.jpg',
];
const images3 = [
  '/images/gallery/img2.jpg',
  '/images/gallery/img6.jpg',
  '/images/gallery/img1.jpg',
];

const images2=[
  'images/gallery/img14.jpg',
  'images/gallery/img9.jpg',
  'images/gallery/img13.jpg',
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

const about = () => {
  return (
    <>
    <Head>
    <title>Create Next App</title>
        <meta name="description" content="About" />
    </Head>
    <main className='flex items-center text-dark w-full min-h-screen dark:text-light'>
    <Layout className='pt-0 md:p-16 sm:pt-8'>
      <div className='flex flex-row justify-between items-center w-full bg-scroll h-[972px]'>
      <div className='w-full h-[50%] overflow-hidden'>
        <Image src={bgimage} 
        alt='farm image'
        layout='fill'
        objectFit='cover'/>
        <div className='absolute inset-0 w-1/2 flex-col items-center self-center lg:w-full lg:text-center'>
          <motion.h1
          variants={fadeIn('down', 0.2)}
          initial='hidden'
          animate='show'
          className='h1 pt-60 inline-block w-full font-bold text-6xl text-light items-center pl-5'
          >FARM-TO-TABLE <br/>PHILOSOPHY</motion.h1>
        </div>
      </div>
      </div>

      <div className='flex flex-col justify-end w-full pt-8 font-semibold grid gap-4 sm:gap-6 grid-cols-2 dark:text-light'>
        <div className='w-full dark:text-light md:col-span-4'>
          <h1 className='text-dark dark:text-light text-dark font-bold text-4xl ss:text-[68px] ss:leading-[100px] sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl'>Diverse <span className='text-primary'>Crops.</span></h1>
          <p className='text-dark font-normal pt-4 dark:text-light'>
            At our farm, we believe in the value of divresity. We grow a variety of crops to provide our customers with unique and falvorful experience. By having a diverse range of crops, we are also able to promote biodiversity which is essential for a healthy ecosystem.
          </p>
        </div>
        <div className='md:col-span-4 py-20 pl-5'>
          <ImageCarousel images={images1}
          className='w-full max-w-xl mx-auto h-[100px]'
          />
        </div>
      </div>
      <div className='pt-10 gap-4 grid grid-cols-2 font-semibold flex flex-col justify-end sm:gap-6'>
        <div className='md:col-span-4'>
          <ImageCarousel images={images2}/>
        </div>
        <div className='md:col-span-4'>
          <h1 className='text-dark  dark:text-light font-bold text-4xl ss:text-[69px] pl-5'>Animal <span className='text-primary'>Welfare</span></h1>
          <p className='font-normal text-dark dark:text-light pl-5'>
            We take great care to ensure that our livestock are raised in ahumane and healthy environment. Our animals are free-range and have access to pasture, which not only promotes their well-being but also results in healthier and more flavorful meat.
          </p>
        </div>
      </div>
      <div className='flex flex-col justify-end w-full pt-8 gap-4 sm:gap-6 grid-cols-2'>
        <div className='w-fill md:col-span-4'>
          <h1 className='text-dark font-bold dark:text-light text-4xl sm:gap-6 dark:text-light'>Community <span className='text-primary'>Involvement.</span></h1>
          <p className='text-dark font-normal pt-4 dark:text-light'>
            We believe in the importance of connecting with our community and sharing our passion for sustainable agriculture. We offer farm tours, workshop and other events to educate and involve our community in the farm-to-table experience.By doing so, we hope to promote a greater understanding of where food comes from and the importance of supporting local agriculture
          </p>
        </div>
        <div className='md:col-span-4'>
          <ImageCarousel images={images3}/>
        </div>
      </div>
      <div className='pt-20 justify between items-center flex '>
          <Section/>
        </div>
      <div>
        <Gallery photos={photos}/>
      </div>

      
    </Layout>  
    </main></>
  )
}

export default about
          
          
      
      
