import React from 'react'
import image4 from '../../assets/images/image4.png'


const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 mb-[20px]">
      <div className="flex flex-col md:flex-row items-stretch gap-10 mt-[50px] mb-[70px]">
        
        {/* Left Image */}
        <div className="md:w-1/2">
          <img
            src={image4}
            alt="About PowerX"
            className="w-full h-full object-cover mask-r-from-5% mr-[40px]"
          />
        </div>

        {/* Right Content */}
        <div className="md:w-1/2 h-full pr-[3px] flex flex-col justify-start">
          <h1 className="text-3xl font-bold mb-4">ABOUT PowerX</h1>

          <p className=" mb-3  text-gray-700  leading-relaxed font-bold  text-sm transition-all  duration-300  ease-in-out hover:text-base hover:scale-105">
            We are an architectural and interior design firm based in the UAE and operating worldwide.
            We have delivered a number of creative interiors for hospitality, healthcare, office, retail
            and residential spaces, from design concept to handover.
          </p>

          <p className=" mb-3  text-gray-700  leading-relaxed font-bold  text-sm transition-all  duration-300  ease-in-out hover:text-base hover:scale-105">
            We are a multicultural team of passionate individuals dedicated to delivering a unique project.
            This is always achieved through a tailored approach, reflecting the client’s needs and aspirations.
          </p>

          <p className=" mb-3  text-gray-700  leading-relaxed font-bold  text-sm transition-all  duration-300  ease-in-out hover:text-base hover:scale-105">
            We work hand in hand with a network of trusted worldwide partners in order to accommodate the most
            varied and complex projects. Our interiors are focused on flexibility and functionality without
            compromising on style and design.
          </p>

          <p className=" mb-3  text-gray-700  leading-relaxed font-bold  text-sm transition-all  duration-300  ease-in-out hover:text-base hover:scale-105">
            Our approach is to create the most suitable designs with assorted architectural features and subtle
            touches and refinement; a vision of elegance expressed with sensibility and care in every detail.
          </p>
        </div>
        
      </div>
    </div>
  )
}

export default About
