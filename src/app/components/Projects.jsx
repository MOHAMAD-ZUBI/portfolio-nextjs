import Image from 'next/image'
import React from 'react'
import propertyImg from '../../../public/assets/projects/property.png'
import Link from 'next/link'
import ProjectItem from './ProjectItem'

const Projects = () => {
  return (
    <div className='w-full'>
        <div className=' max-w-[1240px] mx-auto px-2 py-16'>
        <p className=' text-xl text-blue-400 tracking-widest uppercase'>Projects</p>
        <h2 className='py-2'>What I've Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>

            <ProjectItem 
                title='Property Finder' 
                backgroundImg={propertyImg} 
                projectUrl='/property' 
            />

            <ProjectItem 
                title='E-commerce' 
                backgroundImg={propertyImg} 
                projectUrl='/property' 
            />

            <ProjectItem 
                title='Property Finder' 
                backgroundImg={propertyImg} 
                projectUrl='/property' 
            />

            <ProjectItem 
                title='Property Finder' 
                backgroundImg={propertyImg} 
                projectUrl='/property' 
            />
        

        </div>
        </div>
    </div>
  )
}

export default Projects