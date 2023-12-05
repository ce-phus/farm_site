import React from 'react'




const gallery = ({ photos }) => {
  return (
    <div className='grid hover:grid-cols-3 cursor-pointer grid-cols-3 sm:grid-cols-1 xs:grid-cols-1 lg:grid-cols-3 gap-4 justify-center items-center mt-5 md:order-2 md:col-span-4'>
      
        {photos.map((photo, index)=>(
          <div key={index} className='flex justify-center items-center'>
            <img src={photo} alt={`Photo ${index}`} className='max-w-full h-auto'/>
            </div>
        ))}
      
    </div>

  )
}

export default gallery

