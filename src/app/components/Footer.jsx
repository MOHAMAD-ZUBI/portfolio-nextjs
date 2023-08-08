import Link from 'next/link'
import React from 'react'
import {AiOutlineInstagram, AiOutlineGithub} from 'react-icons/ai'
import {FiTwitter} from 'react-icons/fi'
import {FaLinkedinIn} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='w-full'>
        <div className=' max-w-[1240px] m-auto pt-16'>
            <div className=' border-b-2 border-gray-200'/>

           <div className='flex justify-between items-center px-4 py-16'>
                <div className='  '>
                        <h2 className=' text-xl uppercase '>Mohamad Zubi</h2>
                        <div className=' flex justify-between items-center mx-auto py-4 gap-2'>
                            <div className=' rounded-full shadow-lg shadow-gray-400 p-2 cursor-pointer hover:scale-110 ease-in duration-300' >
                                 <Link href='/' ><AiOutlineInstagram  size={22}/></Link>
                             </div>
                             <div className=' rounded-full shadow-lg shadow-gray-400 p-2 cursor-pointer hover:scale-110 ease-in duration-300' >
                                 <Link href='/' ><FiTwitter  size={22}/></Link>
                             </div>
                             <div className=' rounded-full shadow-lg shadow-gray-400 p-2 cursor-pointer hover:scale-110 ease-in duration-300' >
                                 <Link href='/' ><AiOutlineGithub  size={22}/></Link>
                             </div>
                             <div className=' rounded-full shadow-lg shadow-gray-400 p-2 cursor-pointer hover:scale-110 ease-in duration-300' >
                                 <Link href='/' ><FaLinkedinIn  size={22}/></Link>
                             </div>
                        </div>
                        
                </div>


                <div className=''>

                    <h2 className=' text-xl uppercase'>Links</h2>
                    <div className='py-4'>
                        <ul className='flex flex-col gap-2 px-2 text-md uppercase'>
                            <li>
                                <Link href='/'>Home</Link>
                            </li>
                            <li>
                                <Link href='/'>ABOUT</Link>
                            </li>
                            <li>
                                <Link href='/'>SKILLS</Link>
                            </li>
                            <li>
                                <Link href='/'>projects</Link>
                            </li>
                            <li>
                                <Link href='/'>CONTACT</Link>
                            </li>
                            
                        </ul>
                    </div>

                </div>

    
            </div>
            <div className='py-5 uppercase'>
                <div className=' border-b-2 border-gray-200'/>
                <p className=' flex justify-center items-center py-2'>Mohamad, 2023.</p>
            </div>
            

            
        </div>
        
    </div>
  )
}

export default Footer