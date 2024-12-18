import Hom from '../assets/Image/hero-banner-1.jpg'
import Homi from '../assets/Image/hero-banner-2.jpg'
import Homt from '../assets/Image/hero-banner-3.jpg'

import React, { useState } from 'react';
import '../Components/Shop/home.css'

const ImageSwiper = () => {
  const images = [
    { src: 'hero-banner-2.jpg', alt: 'Image 1', },
    { src: 'hero-banner-2.jpg', alt: 'Image 2', },
    { src: 'hero-banner-2.jpg', alt: 'Image 3', },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the next image
  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Function to go to the previous image
  const goToPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  return (
    <div className="swiper-container">
      <div className="swiper-wrapper" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((image, index) => (
          <div className="swiper-slide" key={index}>
            <img src={Hom} alt={image.alt} className="image" />
            <div className="text-overlay flex flex-col gap-6 ">
              <h1 className='text-left font-bold text-5xl'>Reveal The <br />Beauty of Skin</h1>
              <p className='w-[450px] text-gray-500 text-left text-lg'>Made using clean, non-toxic ingredients, our products <br />are designed for everyone.</p>
              <h4 className='font-semibold text-left'>Starting at $7.99</h4>
              <button className="btn">Shop Now</button>
            </div>
          </div>
        ))}
      `</div>
      <button className="swiper-button-prev" onClick={goToPrev}>
        &#60;
      </button>
      <button className="swiper-button-next" onClick={goToNext}>
        &#62;
      </button>
    </div>
  );
};

export default ImageSwiper;


















// import Homi from '../assets/Image/hero-banner-1.jpg'

// export default function Home() {
//   return (
//     <div className='m-auto'>
//       <div className='w-[98%] relative flex gap-3 overflow-auto '>
//         <div>
//           <img src={Homi} alt="" />
//         </div>
//         <div className='absolute top-[90px] left-32 flex flex-col justify-between w-[85%] h-[350px]'>
//           <h1 className='text-left font-bold text-5xl'>Reveal The <br />Beauty of Skin</h1>
//           <p className='w-[450px] text-gray-500 text-left text-lg'>Made using clean, non-toxic ingredients, our products <br />are designed for everyone.</p>
//           <h4 className='font-semibold text-left'>Starting at $7.99</h4>
//           <div className='text-left'>
//             <button className="btn">Shop Now</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }
