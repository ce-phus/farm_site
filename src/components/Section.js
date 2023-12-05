import React from 'react'
import { motion } from 'framer-motion'

const Section = () => {
  return (
    <div className='flex flex-col'>
    <motion.h1
    initial={{y:50}}
    whileInView={{y:0}}
    transition={{duration:0.5, type:'spring'}}
    className='text-7xl font-bold h1 text-primaryDark'
    >
        A LOOK INTO OITI'S FARMING
    </motion.h1>
    <motion.p
    initial={{y:50}}
    whileInView={{y:0}}
    transition={{duration:0.5, type:'spring'}}
    className='font-normal font-bold text-dark dark:text-light pt-10'>
        At the heart of our farm is a dedication to cultivating a harmonious balance between nature and agriculture. We invite you to explore the story of Oitis Farm, where the love for the land and a passion for sustainable living come together to create a thriving and bountiful environment. Join us on this journey as we continue to grow and nurture our farm, providing our community with the very best nature has to offer
    </motion.p>
    </div>
    
    
  )
}

export default Section