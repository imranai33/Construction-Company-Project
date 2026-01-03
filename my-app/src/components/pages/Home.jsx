import React, { useState, useEffect } from 'react';
import image1 from '../../assets/images/image1.png';
import image2 from '../../assets/images/image2.png';
import image3 from '../../assets/images/image3.png';
import image4 from '../../assets/images/image4.png';
import image5 from '../../assets/images/image5.png';
import image6 from '../../assets/images/image6.png';

const images = [image1, image2, image3,image4,image5,image6]; 

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 1000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-screen h-screen overflow-hidden">

      <img
        src={images[currentIndex]}
        alt="slider"
        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
      />

      <div className="relative z-10 text-center text-white pt-20 px-4 md:pt-40 mt-[200px]">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Welcome to PowerX
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto">
          Architectural and interior design, from concept to handover.
        </p>
      </div>

    </div>
    
  );

  
};

export default Home;
