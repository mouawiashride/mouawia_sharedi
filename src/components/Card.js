import React, { useEffect ,useRef} from 'react'
import Typed from 'typed.js';
import profile from '../images/myphoto.jpg'
import {FaGithub,FaWhatsapp,FaLinkedin,FaFacebook,FaRegEnvelope} from 'react-icons/fa';
export default function Card() {

  const myName = useRef(null);
	const typed = useRef(null);

  useEffect(() => {
    const options = {
    	strings: [  'Mouawia Sharedi'],
      typeSpeed: 200,
      backSpeed: 200,
      loop:true
    };
    typed.current = new Typed(myName.current, options);
    return () => {
      typed.current.destroy();
    }
  }, [])
 
  return (
     <div className="w-full ">
         <div className='flex flex-col justify-center max-w-xs mx-auto  bg-white shadow-2xl rounded-xl p-5'>
                  <div >
                      <img className="w-44  mx-auto shadow-xl rounded-full drop-shadow-sm h-auto" src={profile} alt="profile face" />
                  </div>
                  <div className="text-center mt-5">
                      <p className='text-xl sm:text-2xl hover:text-blue-800 h-6	  font-semibold text-gray-900' >
                         <span ref={myName}></span>
                      </p>
                      <p className='text-xs sm:text-base text-gray-600 pt-2 pb-4 px-5 w-auto inline-block border-b-2'>
                          React Developer 

                      </p>
                      <div className="flex align-center justify-center mt-4">
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
            </div>
        </div>
     </div>
  )
}
