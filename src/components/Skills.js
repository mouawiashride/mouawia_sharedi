import React from 'react'
import {FaReact,FaSass,FaGithub} from 'react-icons/fa'
import {SiTailwindcss,SiPug,SiMaterialui,SiRedux} from 'react-icons/si'
import {ImHtmlFive2} from 'react-icons/im'
import {IoLogoJavascript,IoLogoCss3} from 'react-icons/io'
import {BsBootstrap} from 'react-icons/bs'
import { motion } from "framer-motion"
export default function Skills() {
   const app = {
      visible: { 
         opacity: 1,
         x:0 ,
         transition:{
            type:'spring',
            mass:0.4,
         damping:3,
         when:"beforeChildren",
         staggerDirection: -1
         
       },
      },
      hidden: {
          opacity: 0,
          x:'-100vw'
          },
    }
    const child = {
      visible: { 
         opacity: 1,
         x:[-30,0,30] ,
         transition:{
         duration:3,
         repeat: Infinity,
         repeatType: 'mirror'
       },
      }
      ,
      hover:{
         x:0
      }
    }
  return (
    <motion.div
     variants={app}
     initial="hidden"
     animate="visible"
      className='max-w-4xl mx-auto justify-center py-12 overflow-hidden ' id='tech'>
             <p className='text-2xl text-black text-center sm:text-4xl pt-4 font-bold'>
                 Tech I Use
            </p>
            <div   className='flex flex-wrap justify-center pt-2'>
               <motion.div variants={child}    className='  flex flex-col w-40 p-10 m-6 hover:border-[blue] border-4	 overflow-hidden bg-white shadow-2xl  rounded-full sm:w-52 '>
                  <FaReact color='blue' className='mx-auto  text-4xl' />
                  <p className='mt-6 text-xl sm:text-2xl font-semibold text-center'>React</p>
               </motion.div>
               <motion.div variants={child} className='flex flex-col w-40 p-10 m-6    hover:border-[orange]    border-4         overflow-hidden bg-white shadow-2xl  rounded-full sm:w-52 '>
                  <ImHtmlFive2 color='orange' className='mx-auto  text-4xl' />
                  <p className='mt-6 text-xl sm:text-2xl font-semibold text-center'>Html 5</p>
               </motion.div>

               <motion.div variants={child} className='flex flex-col w-40 p-10 m-6  hover:border-[#00c0A3]  border-4   overflow-hidden bg-white shadow-2xl  rounded-full sm:w-52 '>
                  <SiTailwindcss color='#00c0A3' className='mx-auto  text-4xl' />
                  <p className='mt-6 text-xl sm:text-2xl font-semibold text-center'>Tailwind</p>
               </motion.div>

               <motion.div variants={child} className='flex flex-col w-40 p-10 m-6  hover:border-[blue]  border-4      overflow-hidden bg-white shadow-2xl  rounded-full sm:w-52 '>
                  <IoLogoJavascript color='blue' className='mx-auto  text-4xl' />
                  <p className='mt-6 text-xl sm:text-2xl font-semibold text-center'>Javascript</p>
               </motion.div>

               <motion.div variants={child} className='flex flex-col w-40 p-10 m-6  hover:border-[#8412fa]    border-4   overflow-hidden bg-white shadow-2xl  rounded-full sm:w-52 '>
                  <BsBootstrap color='#8412fa' className='mx-auto  text-4xl' />
                  <p className='mt-6 text-xl sm:text-2xl font-semibold text-center'>Bootstrap</p>
               </motion.div>

               <motion.div variants={child} className='flex flex-col w-40 p-10 m-6  hover:border-[#CD6799]   border-4      overflow-hidden bg-white shadow-2xl  rounded-full sm:w-52 '>
                  <FaSass color='#CD6799' className='mx-auto  text-4xl' />
                  <p className='mt-6 text-xl sm:text-2xl font-semibold text-center'>Sass</p>
               </motion.div>

               <motion.div variants={child} className='flex flex-col w-40 p-10 m-6      hover:border-[brown]  border-4   overflow-hidden bg-white shadow-2xl  rounded-full sm:w-52 '>
                  <SiPug color='brown' className='mx-auto  text-4xl' />
                  <p className='mt-6 text-xl sm:text-2xl font-semibold text-center'>Pugjs</p>
               </motion.div>

                    <motion.div variants={child} className='flex flex-col w-40 p-10 m-6  hover:border-[blue]   border-4     overflow-hidden bg-white shadow-2xl  rounded-full sm:w-52 '>
                  <SiMaterialui color='blue' className='mx-auto  text-4xl' />
                  <p className='mt-6 text-xl sm:text-2xl font-semibold text-center'>Materialui</p>
               </motion.div>

               <motion.div variants={child} className='flex flex-col w-40 p-10 m-6     hover:border-[black]  border-4 overflow-hidden bg-white shadow-2xl  rounded-full sm:w-52 '>
                  <FaGithub color='black' className='mx-auto  text-4xl' />
                  <p className='mt-6 text-xl sm:text-2xl font-semibold text-center'>Github</p>
               </motion.div>

               <motion.div variants={child} className='flex flex-col w-40 p-10 m-6  hover:border-[orange]  border-4   overflow-hidden bg-white shadow-2xl  rounded-full sm:w-52 '>
                  <IoLogoCss3 color='orange' className='mx-auto  text-4xl' />
                  <p className='mt-6 text-xl sm:text-2xl font-semibold text-center'>Css3</p>
               </motion.div>

               <motion.div variants={child} className='flex flex-col w-40 p-10 m-6  hover:border-[#d800ff]   border-4      overflow-hidden bg-white shadow-2xl  rounded-full sm:w-52 '>
                  <SiRedux color='#d800ff' className='mx-auto  text-4xl' />
                  <p className='mt-6 text-xl sm:text-2xl font-semibold text-center'>Redux</p>
               </motion.div>
            </div>
    </motion.div>
  )
}
