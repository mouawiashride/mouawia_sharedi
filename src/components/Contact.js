import React from 'react'
import {FaArrowRight} from 'react-icons/fa'
export default function Contact() {
  return (
    <div className='max-w-full w-full text-center m-auto pt-36 pb-10'>
           <h1 className='text-2xl sm:text-4xl'> Interested in working togother ?  </h1>
           <a href="mailto:mooawia12@windowslive.com">
                <span className='mt-6 inline-block w-auto rounded-full   bg-black  font-display text-white text-base ms:text-xl py-4 px-7 cursor-pointer' > 
                     <div className='flex flex-col items-center'>
                                 <span className='mr-3'>  Get on touch  </span>
                                 <FaArrowRight color ='white' />
                     </div>

                </span>
           </a> 
    </div>
  )
}
