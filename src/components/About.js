import React, { useEffect, useRef } from 'react'
import Typed from 'typed.js';
import  ScrollIntoView  from 'react-scroll-into-view';
import {FaChevronDown} from 'react-icons/fa'


export default function About() {
    const about = useRef(null);
	const typed = useRef(null);

  useEffect(() => {
    const options = {
    	strings: [  " I'm a <b> React developer </b> , ^1000 \n  I create this Page for who need react developer , ^1000 \n if you like my website  Don't forget to contact me through the social media <b> above </b>  "],
      typeSpeed: 80,
      backSpeed: 200,
      loop:true
    };
    typed.current = new Typed(about.current, options);
    return () => {
      typed.current.destroy();
    }
  }, [])
  return (
    <div className='max-w-4xl mt-20 mx-auto ' >
          <p className='text-2xl text-black md:text-4xl font-bold text-center'>
             Hey ! 👋
          </p>
          <p className='text-base  sm:text-xl  text-center text-gray-600 leading-relaxed mt-4 '>
              <span style={{ whiteSpace: 'pre' }} ref={about}></span>
             
          </p>
         
   
    <ScrollIntoView selector='#tech'>
        <div className='mx-auto p-20'>
            <FaChevronDown className='animate-bounce mx-auto text-3xl text-blue-500' />
        </div>
    </ScrollIntoView>
    </div>   )
}
