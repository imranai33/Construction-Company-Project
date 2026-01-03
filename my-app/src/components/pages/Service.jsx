import React from 'react'
import constimg from '../../assets/images/constraction1.png'
const Service = () => {
  return (
    <>
    <div className="bg-[#404040] h-[200px] flex items-center">
      <h1 className="text-[50px] font-bold text-white ml-[60px]">
        Our Services
      </h1>
    </div>


<div className="flex flex-col md:flex-row items-center bg-[#27272a] px-6 md:px-16 py-16 gap-10">
  <div className="md:w-1/2 text-[#f8fafc]">
    <h1 className="text-1xl md:text-2xl font-bold mb-6 leading-tight">
      Residential Design & Build
    </h1>
    <p className="text-gray-300 text-lg leading-relaxed mb-8">
      We deliver personalized interior design and build services for residential
      projects across UAE and the region; complete refurbishments, extensions,
      existing space conversions, and top-notch renovations.
    </p>
    <button className="
     border border-[#f8fafc] px-8 py-3 text-sm tracking-wider text-gray-300 transition-all duration-300 ease-in-out hover:text-white hover:bg-white/10  hover:scale-110 hover:font-bold">
     READ MORE
    </button>
  </div>
  <div className="md:w-1/2 w-full">
    <img
      src={constimg}
      alt="Residential Design"
      className="w-full h-[350px] md:h-[450px] object-cover"
    />
  </div>
</div>

<div className="flex flex-col md:flex-row items-center bg-[#292524] px-6 md:px-16 py-16 gap-10">

    <div className="md:w-1/2 w-full">
    <img
      src={constimg}
      alt="Residential Design"
      className="w-full h-[300px] md:h-[450px] object-cover"
    />
  </div>
  <div className="md:w-1/2 text-[#f8fafc]">
    <h1 className="text-1xl md:text-2xl font-bold mb-6 leading-tight">
      Residential Design & Build
    </h1>
    <p className="text-gray-300 text-lg leading-relaxed mb-8">
      We deliver personalized interior design and build services for residential
      projects across UAE and the region; complete refurbishments, extensions,
      existing space conversions, and top-notch renovations.
    </p>
    <button className="
     border border-[#f8fafc] px-8 py-3 text-sm tracking-wider text-gray-300 transition-all duration-300 ease-in-out hover:text-white hover:bg-white/10  hover:scale-110 hover:font-bold">
     READ MORE
    </button>
  </div>

</div>

    </>
  )
}

export default Service
