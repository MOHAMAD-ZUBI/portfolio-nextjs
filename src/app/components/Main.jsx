import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'

const Main = () => {
  return (
   <div className=' w-full h-screen text-center'>
    <div className=' max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div>
            <p className='uppercase text-sm tracking-widest text-gray-600'>let's build something together</p>
            <h1 className='py-4 text-gray-700'>Hi, I'm <span className=' text-blue-600'>Mohamad</span> </h1>
            <h1 className='py-2 text-gray-700'>
                A Fullstack Web Developer
            </h1>
            <p className='py-4 text-gray-600 max-w-[70% m-auto]'>
                A fullstack web developer, current stack is MERN
            </p>
            <div className='flex justify-between items-center max-w-[330px] m-auto py-4'>
                <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <FaLinkedinIn size={22} />
                </div>
                <div className=' rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'> 
                    <FaGithub size={22}/>
                </div>
                <div className=' rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'> 
                    <AiOutlineMail size={22}/>
                </div>
                <div className=' rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'> 
                    <BsFillPersonLinesFill size={22}/>
                </div>
            </div>
        </div>
    </div>
   </div>
  )
}

export default Main