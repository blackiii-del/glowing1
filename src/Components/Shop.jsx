
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import './Shop/shop.css'; // Import Swiper styles

// Import icons and images
import { FaShare, FaShoppingBag, FaStar } from "react-icons/fa";
import c_1 from '../assets/Image/product-01.jpg';
import c_2 from '../assets/Image/product-02.jpg';
import c_3 from '../assets/Image/product-03.jpg';
import c_4 from '../assets/Image/product-04.jpg';
import c_5 from '../assets/Image/product-05.jpg';
import c_6 from '../assets/Image/product-07.jpg';
import arrow from '../assets/Image/dark-arrow.png';

const Shop = () => {
  const products = [
    { src: c_1, title: 'Facial Cleanser', price: '$29.00', oldPrice: '$39.00', rating: '5 stars', reviews: '5170 reviews' },
    { src: c_2, title: 'Bio-shroom Rejuvanating Serum', price: '$29.00', rating: '5 stars', reviews: '5170 reviews' },
    { src: c_3, title: 'Coffe Bean Caffeine Eye Cream', price: '$29.00', rating: '5 stars', reviews: '5170 reviews' },
    { src: c_4, title: 'Facial Cleanser', price: '$29.00', rating: '5 stars', reviews: '5170 reviews' },
    { src: c_5, title: 'Coffe Bean Caffeine Eye Cream', price: '$29.00', oldPrice: '$39.00', rating: '5 stars', reviews: '5170 reviews' },
    { src: c_6, title: 'Coffe Bean Caffeine Eye Cream', price: '$29.00', oldPrice: '$39.00', rating: '5 stars', reviews: '5170 reviews' }
  ];

  return (
    <div className="w-[99%] m-auto">
      {/* Static content outside swiper */}
      <div className="flex justify-between items-center w-[99%]">
        <h2 className="font-medium text-4xl">Our Bestsellers</h2>
        <button className="flex items-center justify-center w-[149px]">
          <h5>Shop All Products</h5>
          <img src={arrow} alt="" className="w-[15%] mt-2" />
        </button>
      </div>

      {/* Swiper container only wraps the product images */}
      <div className="swiper-wrapper-container">
        <Swiper
          spaceBetween={10}
          slidesPerView={5} // Adjust to display 5 images at a time
          loop={false} // Enable looping of images
          navigation={false} // Enable navigation buttons
          pagination={{ clickable: true }} // Enable clickable pagination
          className="swiper-container"
        >
          {products.map((product, index) => (
            <SwiperSlide key={index}>
              <div className="max-w-[290px] h-[390px] relative">
                <div className="program">
                  <img src={product.src} alt={`Product ${index + 1}`} className="w-full h-auto object-cover" />
                  <div className="caption absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center gap-2">
                    <FaShoppingBag className="img text-white" />
                    <FaStar className="img text-yellow-500" />
                    <FaShare className="img text-white" />
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  {product.oldPrice && <p className="line-through mr-2">{product.oldPrice}</p>}
                  <p className="font-bold">{product.price}</p>
                </div>
                {/* Display the product title in a centered block */}
                <div className="flex items-center justify-center mt-2">
                  <a href="#" className="text-center text-xl font-semibold">{product.title}</a>
                </div>
                <div className="flex gap-1 items-center justify-center mt-1">
                  <p>{product.rating}</p>
                  <p>{product.reviews}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Shop;