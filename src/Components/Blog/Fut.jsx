import b_1 from '../../assets/Image/blog-1.jpg'
import b_2 from '../../assets/Image/blog-2.jpg'
import b_3 from '../../assets/Image/blog-3.jpg'
// import b_1 from '../../assets/Image/d.jpg'

export default function Fut() {
  return (
    <div className='w-[98%] m-auto flex justify-between items-center flex-col h-fit gap-10'>
      <h1 className='font-bold text-[40px] w-[99%]'>More to Discover</h1>
      <div className='w-[95%] flex justify-between h-[280px] items-center'>
        <div className='flex justify-between items-center h-full flex-col max-w-[350px]'>
            <img src={b_1} alt="" className='min-w-[400px] hover:scale-[1.05] cursor-pointer transition duration-150' />
            <a href="#" className='w-[100%] text-2xl'>Find A Store</a>
            <button className='w-[100%]'><a href="#">Our Store</a></button>
        </div>
        <div className='flex justify-between items-center h-full flex-col max-w-[350px]'>
            <img src={b_2} alt="" className='min-w-[400px] hover:scale-[1.05] cursor-pointer transition duration-150' />
            <a href="#" className='w-[100%] text-2xl'>Find A Store</a>
            <button className='w-[100%]'><a href="#">Our Store</a></button>
        </div>
        <div className='flex justify-between items-center h-full flex-col max-w-[350px]'>
            <img src={b_3} alt="" className='min-w-[400px] hover:scale-[1.05] cursor-pointer transition duration-150' />
            <a href="#" className='w-[100%] text-2xl'>Find A Store</a>
            <button className='w-[100%]'><a href="#">Our Store</a></button>
        </div>
      </div>
    </div>
  )
}
