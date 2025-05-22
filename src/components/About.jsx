import React from 'react'
import mobilem from "../assets/mobileM.png";
import mobile from "../assets/mobileR.png";

const About = () => {
  return (
    <div className='text-white gap-4 max-w-[1200px] mx-auto my-12 grid sm:grid-cols-3' id="about">
      <div className='sm:col-span-2 glass sm:py-16 my-auto text-left p-4'>
        <div className='max-w-[80%] mx-auto'>
          <h2 className='text-3xl font-bold mb-4 '>I can create your Website</h2>
          <p className='text-gray-200'>"I'll craft your website with precision and care. Let's work together to bring your vision to life online."</p>
        </div>
      </div>

      <div className='hidden md:block sm:col-span-1 glass overflow-hidden'>
        <img className='w-[200px] md:w-[500px] abosulte' src={mobilem} />
      </div>

      <div className='hidden md:block sm:col-span-1 glass overflow-hidden'>
        <img className='w-[200px] md:w-[500px] abosulte' src={mobile} />
      </div>

      <div className='md:hidden relative overflow-hidden h-[200px] glass'>
        <img className='abosulte w-[400px]' src={mobilem} />
        <img className='w-[200px] right-0 abosulte' src={mobile} />
      </div> 

      <div className='sm:col-span-2 glass sm:py-16 my-auto text-left p-4'>
        <div className='max-w-[80%] mx-auto'>
          <h2 className='text-3xl font-bold mb-4 '>I can optimize your website</h2>
          <p className='text-gray-200'>
            "I specialize in optimizing websites to ensure they perform at their best. With my expertise, I'll fine-tune your site to boost its speed, functionality, and user experience. Let's collaborate to take your online presence to the next level.</p>
        </div>
      </div>


    </div>
  )
}

export default About
