import React from 'react'

const About = () => {
  return (
    <div className='w-full md:h-screen p-2 flex items-center py-16'>
        <div className=' max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
                <p className='uppercase text-blue-400 text-cl tracking-widest'>About</p>
                <h2 className='py-4'>Who I am</h2>
                <p className='py-2 text-gray-600'>
                    A fullstack web developer, current stack is MERN
                </p>
                <p className='py-2 text-gray-600'>
                    A fullstack web developer, current stack is MERN
                </p>
                <p className='py-2 text-gray-600 underline cursor-pointer'>
                    Check out some of my latest projects
                </p>
            </div>
            <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-centert justify-center p-2 hover:scale-105 ease-in duration-300'>
                <img className='rounded-xl' src='https://careertraining.ed2go.com/common/images/2/20680/front-end-web-developer-935x572.jpg' alt='/' />
            </div>
        </div>
    </div>
  )
}

export default About