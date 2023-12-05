import React, { useState } from 'react'
import Link from 'next/link'
import {motion} from 'framer-motion'
import logo from '../../public/images/logo.jpg'
import { useRouter } from 'next/router'
import { MoonIcon, SunIcon } from './Icons'
import useThemeSwitcher from './hooks/useThemeSwitcher'
import Image from 'next/image'

const CustomLInk=( {href, title, className} )=> {
    const router = useRouter();

    return(
        <Link href={href} className={`${className} relative group`}>{title}
        <span className={`h-[2px] inline-block bg-dark dark:bg-light absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease-duration-300 ${router.asPath===href ? 'w-full' :'w-0'}`}>
          &nbsp;  
        </span>
        </Link>
    )
}
const CustomMobileLink=( {href, title, className} )=> {
    const router = useRouter();
    const handleClick=()=>{
      toggle();
      router.push(href)
    }

    return(
        <Link href={href} className={`${className} relative group text-light dark:text-dark my-2`} onClick={handleClick}>{title}
        <span className={`h-[2px] inline-block bg-light absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease-duration-300 ${router.asPath===href ? 'w-full' :'w-0'}dark:bg-light'}`}>
          &nbsp;  
        </span>
        </Link>
    )
}


const Navbar = () => {
    const [mode, setMode]= useThemeSwitcher();
    const[isOpen, setIsOpen]= useState(false)

    const handleClick=()=>{
        setIsOpen(!isOpen)
    }
  return (
    <header className='w-full px-32 py-8 flex items-center justify-between dark:text-light relative z-10 lg:px-16 md:px-12 sm:px-8'>
        <Image src={logo} alt='farmhouse' className='w-[150px] h-[150px] rounded-full ' />
        <button className='flex-col  items-center justify-center hidden lg:flex' onClick={handleClick}>
      <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm  ${isOpen ? 'rotate-45 translate-y-1':'-translate-y-0.5'}`}></span>
      <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0': 'opacity-100'}`}></span>
      <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm translate-y-0.5 ${isOpen ? '-rotate-45 -translate-y-1':'translate-y-0.5'}`}></span>

    </button>
    
        
        
        <div className='w-full flex justify-end items-center lg:hidden'>
        
        <nav className='flex items-center justify-center flex-wrap font-bold'>

            <CustomLInk href='/' title='Home' className='mr-4'/>
            <CustomLInk href='/about' title='About' className='mr-4'/>
            <CustomLInk href='/contact' title='Contact Us' className='mr-4'/>
            <button
            onClick={()=> setMode(mode ==="light" ? "dark" : "light")}
            className={`ml-3 flex items-center justify-center rounded-full p-1 ${mode ==="light" ? "bg-dark text-light" : "bg-light text-dark"}`}>
            {mode=== 'dark' ? 
            <SunIcon className={'fill-dark'}/>: <MoonIcon className={'fill-dark'}/>}
            </button>
        </nav>
        </div>

        {
            isOpen ?
            <motion.div
            initial={{scale:0, opacity:0, x: "-50%", y:"-50%"}}
            animate={{scale:0.9, opacity:2}}
            className='min-w-[60%] flex flex-col items-center justify-between z-15 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-m py-32'>
                <nav className='flex items-center flex-col  justify-center'>
                    <CustomMobileLink href="/" title='Home' className='' toggle={handleClick}/>
                    <CustomMobileLink href="/about" title='About' className='' toggle={handleClick}/>
                    <CustomMobileLink href="/contact" title='Contact Us' className='' toggle={handleClick}/>
                    <button
          onClick={() => setMode(mode === "light" ? "dark" : "light")}
          className={`ml-3 flex items-center justify-center rounded-full p-1 ${mode ==="light" ? "bg-dark text-light":"bg-light text-dark"}`}
           
          >
        
        {mode === "dark" ?
          <SunIcon className={"fill-dark"} />
          : <MoonIcon className={'fill-dark'} />}

        </button>
                </nav>
            </motion.div>
            :null
        }
        
    </header>
  )
}

export default Navbar