import p_1 from '../assets/Image/collection-1.jpg'
import p_2 from '../assets/Image/collection-2.jpg'
import p_3 from '../assets/Image/collection-3.jpg'
import arrow from '../assets/Image/dark-arrow.png'


export default function Collection() {
  return (
    <div className='flex items-center justify-between w-[95%] m-auto'>
      <div className='w-[350px] '>
        <img src={p_1} alt="" className='h-[450px] w-[360px] hover:scale-[1.02] transition duration-500 relative' />
        <h2 className='absolute top-[800px] font-semibold text-4xl left-[50px]'>Summer Collection</h2>
        <p className='absolute top-[850px] font-[500] text-xl left-[50px]'>Starting at $17.99</p>
        <button className='w-[250px] h-[20px] flex  gap-[10px] justify-center absolute left-[50px] top-[1125px]'>
          <div className='font-medium h-full text-left'>Discover Now</div> 
          <img src={arrow } alt="" className='w-[20px] h-[20px]' />
        </button>
      </div>
      <div className='w-[360px]'>
        <img src={p_2} alt="" className='h-[450px] w-[360px] hover:scale-[1.02] transition duration-500 relative' />
        <h2 className='absolute top-[800px] font-semibold text-4xl left-[520px]'>What’s New?</h2>
        <p className='absolute top-[850px] font-[500] text-xl left-[520px]'>Get the glow</p>
        <button className='w-[250px] h-[20px] flex  gap-[10px] justify-center absolute left-[520px] top-[1125px]'>
          <div className='font-medium h-full text-left'>Discover Now</div> 
          <img src={arrow } alt="" className='w-[20px] h-[20px]' />
        </button>
      </div>
      <div className='w-[350px] '>
        <img src={p_3} alt="" className='h-[450px] w-[360px] hover:scale-[1.02] transition duration-500 relative'/>
        <h2 className='absolute top-[800px] font-semibold text-4xl left-[990px]'>Buy 1 Get 1</h2>
        <p className='absolute top-[850px] font-[500] text-xl left-[990px]'>Starting at $7.99</p>
        <button className='w-[250px] h-[20px] flex  gap-[10px] justify-center  absolute left-[990px] top-[1125px]'>
          <div className='font-medium h-full text-left'>Discover Now</div> 
          <img src={arrow } alt="" className='w-[20px] h-[20px]' />
        </button>
      </div>
    </div>
  )
}
