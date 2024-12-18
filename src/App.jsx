import './App.css'
import { FaSearch, FaShoppingBag, FaStar, FaUser } from "react-icons/fa"
import Home from './Components/Home'
import Collection from './Components/Collection'
import Shop from './Components/Shop'
import Shop2 from './Components/Shop2'
import First from './Components/Blog/First'
import Second from './Components/Blog/Second'
import Thud from './Components/Blog/Thud'
import Fut from './Components/Blog/Fut'

function App() {
  
  return (
    <>
    <div className='Glowing'>
      <div className='bg-green-300 h-10 flex items-center justify-center'>
        <p className='text-lg text-black'>Free Shipping On All U.S. Orders $50+</p>
      </div>
      <div className='flex items-center justify-between w-[99%] p-2 m-auto'>
        <div className='flex items-center justify-center border-2 sach'>
        <input type="search" placeholder='Search product' className='w-48 h-11 relative sach ' />
        <FaSearch  className='sach'/>
        </div>
        <a href="#" className='cursor-pointer text-4xl font-black'>GLOWING</a>
        <div className='flex justify-center gap-7 items-center max-w-[200px] bagi'>
          <div className='hover:cursor-pointer'>
            <FaUser className='text-2xl'/>
          </div>
          <div className='bag'>
            <FaStar className='text-2xl '/>
          </div>
          <div className='flex gap-2 items-center justify-center bag'>
            <p className='bag'>$0.00</p>
            <FaShoppingBag className='text-2xl bag'/>
          </div>
        </div>
      </div>
      <ul className='flex w-full items-center justify-center gap-10 font-semibold'>
        <li>
          Home
        </li>
        <li>
          Collection
        </li>
        <li>
          Shop
        </li>
        <li>
          Offer
        </li>
        <li>
          Blog
        </li>
      </ul>
      <div className='flex items-center justify-center'>
        <Home />
      </div>
      <div>
        <Collection className='mt-40'/>
      </div>
      <div className='mb-40'>
        <Shop />
      </div>
      <div className='mb-40'>
        <Shop2 />
      </div>
      <div>
        <First  className='mb-40' />
      </div>
      <div>
        <Second  className='mb-52'/>
      </div>
      <div>
        <Thud />
      </div>
      <div>
        <Fut />
      </div>
    </div>
    </>
  )
}

export default App






// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';

// export default () => {
//   return (
//     <Swiper
//       spaceBetween={50}
//       slidesPerView={3}
//       onSlideChange={() => console.log('slide change')}
//       onSwiper={(swiper) => console.log(swiper)}
//     >
//       <SwiperSlide>Slide 1</SwiperSlide>
//       <SwiperSlide>Slide 2</SwiperSlide>
//       <SwiperSlide>Slide 3</SwiperSlide>
//       <SwiperSlide>Slide 4</SwiperSlide>
//       ...
//     </Swiper>
//   );
// };