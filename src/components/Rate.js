import React, { useState } from 'react'
import emailjs from '@emailjs/browser';
export default function Rate() {

    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [text,setText]=useState('');
    const [statue,setStatue]=useState('');
   const handleSubmit = async (e)=>
   {
console.log(process.env.REACT_APP_USER_ID);
    e.preventDefault();
    emailjs.send(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, {
        from_name: name,
        Email: email,
        message: text,
        },
        process.env.REACT_APP_USER_ID
        )
    .then((response)=> {
      setStatue('success')
      setName('');
      setEmail('');
      setText('');
      setTimeout(setStatue(''),2000);
    }, (error)=> {
       setStatue('error! please try again later')
    });
    
   }

  return (
    <div className='flex max-w-4xl justify-center mx-auto text-center flex-col '>
           <p className='text-xl mx-auto p-8'>
           Give me your opinion of my Portfolio or any other advice
           </p>
           <form onSubmit={(e)=>handleSubmit(e)}>
               <div className='flex flex-col  justify-center p-4'>
                 <label htmlFor='name' >name</label>
                 <input type='text' id='name' value={name}  onChange={(e)=>{setName(e.target.value)}} placeholder='your name' className='w-1/2 mx-auto' />
               </div>
               <div className='flex flex-col  justify-center p-4'>
                 <label   htmlFor='email' >Your Email:</label>
                 <input type='text' id='email ' value={email}  onChange={(e)=>{setEmail(e.target.value)}} placeholder='your Email' className='w-1/2 mx-auto' />
               </div>
               <div className='flex  flex-col  justify-center p-2'>
                 <label  >Your text:</label>
                 <textarea  placeholder='your name' value={text} onChange={(e)=>{setText(e.target.value)}} className='w-1/2 h-40  mx-auto' style={{ resize:'none' }}   />
               </div>
               <button type='submit' className=' p-1  mx-auto block w-1/4 rounded-3xl text-white  bg-blue-900'>Send</button>
                <p className='bg-green-500 w-20  text-white mt-2 rounded-3xl mx-auto'>{statue}</p>
           </form>
    </div>
  )
}
