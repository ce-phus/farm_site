import React from 'react'

const Button = () => {
  return (
    <button type='button' className={`py-4 px-6 text-light font-medium text-[18px] hover:text-dark bg-dark hover:bg-light border border-[2px] rounded-[2rem] dark:bg-primary dark:text-dark dark:hover:text-light border-dark`}>
            Get Started
    </button>
  )
}

export default Button