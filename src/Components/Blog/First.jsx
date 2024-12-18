import rest from '../../assets/Image/banner-1.jpg'
import resti from '../../assets/Image/hero-banner-3.jpg'
import './first.css'

export default function First() {
  return (
    <div className='w-[100%] flex m-auto items-center justify-center gap-10'>
        <div className="bg-cover bg-center h-[400px] w-[60%] hover:scale-[1.05] transition duration-500 ease-in-out" style={
        {
            backgroundImage: `url(${rest})`

        }
    }>
        <div className='text-left w-[80%] m-auto  h-[50%] mt-28'>
            <h2 className='font-semibold text-lg'>New Collection</h2>
            <h1 className='font-bold max-w-[300px] text-3xl'>Discover Our Autumn Skincare</h1>
            <button className='button'>Explore More</button>
        </div>
        </div>
        <div className="bg-cover bg-center h-[400px] w-[30%] hover:scale-[1.05] transition duration-500 ease-in-out" style={
        {
            backgroundImage: `linear-gradient(rgba(0,50,75,0.7), rgba(0,50,50,0.7)) ,url(${resti})`

        }
    }>
            <h2 className='font-semibold text-lg'>New Collection</h2>
            <h1 className='font-bold max-w-[300px] text-3xl'>Discover Our Autumn Skincare</h1>
            <button className='button'>Explore More</button>
        </div>
    </div>
  )
}
