import React from 'react'
import { logo } from '../assets'
import logo2 from '../../public/images/gallery/logo2.jpeg'
import { footerLinks, socialMedia } from '../constants'
import Image from 'next/image'
import Layout from './Layout'

const Footer = () => {
  return (
      <footer className='flex w-full justify-center items-center sm:px-16 px-6 flex-col'>
        <Layout className=' dark:text-light py-8 flex items-center justify-between lg:flex-col lg:py-6'>
        <div className='flex justify-center items-center md:flex-row flex-col mb-8 w-full'>
            <div className=' flex-1 flex flex-col justify-start mr-0'>
                <Image src={logo2} 
                alt='logo' 
                className='w-[146px] h-[130px] object-contain rounded-full -right-0'/>
            </div>
            <div className='flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10'>
        {footerLinks.map((footerLink)=>(
          <div key={footerLink.key} className='flex flex-col ss:my-0 my-4 min-w-[150px]'>
            <h4 className=' dark:text-light text-dark font-bold text-[18px] leading-[27px]'>
              {footerLink.title}
            </h4>
            <ul className='list-none mt-4'>
              {footerLink.links.map((link, index)=>(
                <li key={link.name} className={` font-normal text-[16px] leadin-[24px] hover:text-primary cursor-pointer dark:text-light dark:hover:text-primaryDark ${index!== footerLink.links.length - 1 ? 'mb-4': 'mb-0'}`}>{link.name}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
        </div>
        <div className='w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45'>
      <p className='text-dark font-normal text-center text-[18px] leading-[27px] dark:text-light'>
      <span>{new Date().getFullYear()} &copy; OitiFarms LTD.</span>
      </p>
    </div>
    <div className='flex flex-row md:mt-0 mt-3 mb-3'>{socialMedia.map((social, index)=>(
      <Image
      key={social.id}
      src={social.icon}
      alt={social.id}
      className={`w-[21px] h-[21px] object-contain cursor-pointer  rounded-full bg-dark rounded-[2rem] dark:text-light ${index !== socialMedia.length -1 ?'mr-6': 'mr-0' }`}
      />
    ))}
    </div>
    </Layout>
    </footer> 
  )
}

export default Footer