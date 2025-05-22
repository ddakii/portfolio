import React from "react";
import heroImage from "../assets/DV.png";
import mobileL from "../assets/mobileL.png"; 
import mobileM from "../assets/mobileM.png";
import mobileR from "../assets/mobileR.png";


import  {TypeAnimation} from 'react-type-animation'

const Hero = () => {
  return (
    <div className='relative grid sm:grid-cols-3 gap-8 max-w-[1200px] md:h-[70vh] mx-auto py-8 overflow-hidden md:overflow-visible' id="hero">
      <img className='hidden md:block absolute z-[-1] w-[400px] bottom-0 left-[-170px]' src={mobileL} alt=''/>
      <img className='absolute z-[-1] w-[400px]  -bottom-[190px] md:bottom-0 md:left-[320px]' src={mobileM} alt=''/>
      <img className='absolute z-[-1] w-[200px] bottom-[500px] left-[450px]' src={mobileR} alt=''/>

      <div className='glass px-5 col-span-2 px-5 my-auto z-[-1]'>
        <h1 className='text-white text-4xl sm:text-5xl lg:text-8xl font-extrabold p-4 md:p-0'>
          <p className="md:mb-4 text-gray-500"> I'm a</p>
          <TypeAnimation
            sequence={[
              "Frontend Developer",
              1000,
            
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
       
        </h1>
        <p className="font-bold mb-6 md:mb-0 md:my-6 text-sm sm:text-lg lg:text-xl max-w-[280px] p-4 md:p-0 md:max-w-[600px] ml-1 text-gray-300">
        Hi! I'm Daut Vuniqi, a 18-year-old web developer with over 3 years of experience in building dynamic,
         responsive websites. While I haven’t worked professionally yet,
          I’ve honed my skills through personal projects and a passion for coding. 
          I specialize in HTML, CSS, JavaScript,WordPress and React.js on the front-end.I’m currently looking 
          or an internship opportunity where I can contribute my skills while learning from experienced
           professionals.
          
        </p>
      </div>


      <div className="absolute bottom-40 right-0 w-[250px] lg:w-[400px] z-[-1]">
       <img className="w-[300px]" src={heroImage} alt=''/>
      </div>
    </div>
  )
}

export default Hero



