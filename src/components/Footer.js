import React from 'react'
import {FaGithub,FaRegEnvelope,FaWhatsapp,FaFacebook,FaLinkedin} from 'react-icons/fa';
export default function Footer() {
  return (
    <div className='py:5 border-t-3/2'>
        <div className='flex justify-center mt-4 ' >
            <a target="blank" className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-gray-800 hover:bg-gray-800 rounded-full hover:text-white transition-colors duration-300" href="https://github.com/mouawiashride">
                <FaGithub />
                <span className="sr-only">Github</span>
              </a>
              <a target="blank" className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-green-600 hover:bg-gray-900 rounded-full hover:text-white transition-colors duration-300" href="https://wa.me/963967916865">
                <FaWhatsapp />
                <span className="sr-only">YouTube</span>
              </a>
              <a target="blank" className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-blue-500 hover:bg-blue-500 rounded-full hover:text-white transition-colors duration-300" href="https://www.facebook.com/muawia.tech/">
                <FaFacebook />
                <span className="sr-only">Twitter</span>  
              </a>
              <a target="blank" className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-teal-500 hover:bg-black rounded-full hover:text-white transition-colors duration-300" href="mailto:mooawia12@windowslive.com">
                <FaRegEnvelope />
                <span className="sr-only">Email</span>  
              </a>
              <a target="blank" className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-blue-500  hover:bg-blue-900 rounded-full hover:text-white transition-colors duration-300" href="https://www.linkedin.com/in/mouawia-sharedi/">
              <FaLinkedin />
                <span className="sr-only">Linkedin</span>  
              </a>
        </div>
        <div className='flex justify-center mt-4'>
           <p className='text-black mb-4'> 
           made with <span  className='mr-2 ' role='link' aria-label='Developer' >  👨‍💻 </span> by <a className='text-blue hover:underline' href='mailto:mooawia12@windowslive.com' > Mouwia Sharedi </a>
           </p>
        </div>
    </div>
  )
}
