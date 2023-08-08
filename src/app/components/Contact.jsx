"use client"
import Image from 'next/image'
import React from 'react'
import {MdAlternateEmail} from 'react-icons/md'
import { InfoCircleOutlined, UserOutlined } from '@ant-design/icons';
import { Input, Tooltip } from 'antd';
import Link from 'next/link';


const Contact = () => {
    const { TextArea } = Input;
  return (
    
    <div className=' w-full '>
        <div className=' max-w-[1240px] px-4 py-16 mx-auto'>
            <div className='uppercase pt-40  pb-20 '>
                <h2 className='flex text-xl justify-center tracking-widest'>Have Some Questions?</h2>
                <p className='flex justify-center'>Karabuk | TR : 100.yil 1010CD 22A </p>
            </div>
            <div className='grid md:grid-cols-2 gap-8'>
                <div className=' pb-5 flex items-center justify-center shadow-xl rounded-xl shadow-gray-400  hover:shadow-gray-600 hover:ease-in duration-300'>
                    
                     <div className='flex flex-col justify-center items-center'>
                             <Input className='mx-2 rounded-lg mt-6  w-[320px]'
                        placeholder="Enter your first name"
                        name='firstName'
                        prefix={<UserOutlined className="site-form-item-icon" />}
                       
                     />
                     <Input className='mx-2 rounded-lg mt-6 w-[320px]'
                        placeholder="Enter your last name"
                        name='lastName'
                        prefix={<UserOutlined className="site-form-item-icon" />}
                       
                     />
                     <Input className='mx-2 rounded-lg mt-6 w-[320px]'
                        placeholder="what's your email?"
                        name='email'
                        type='email'
                        prefix={<MdAlternateEmail/>}
                       
                     />
                     <div className='py-4'>
                            <TextArea className='mx-2 rounded-lg mt-6 w-[320px]' rows={4} placeholder="your question" maxLength={6} />
                     </div>
                     

                    <Link className='py-2 bg-blue-400 text-white text-md hover:shadow-lg shadow-gray-400 ease-in duration-300 hover:bg-blue-500 text-center uppercase rounded-xl mx-auto px-5' href='/'>Send Question</Link>
                     </div>
                    
                </div>
                <div className='hidden md:block relative items-center p-4 rounded-xl  shadow-gray-400 shadow-xl  hover:shadow-gray-600 hover:ease-in duration-300'>
                    
                    <Image className='rounded-xl w-full  object-cover ' src='/../public/assets/email.png' width={800} height={800} alt='my image' />
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Contact