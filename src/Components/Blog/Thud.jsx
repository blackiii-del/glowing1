import dug from '../../assets/Image/Offer-banner-1.jpg'
import dub from '../../assets/Image/Offer-banner-2.jpg'

export default function Thud() {
  return (
    <div className='flex justify-between h-fit w-[95%] m-auto items-center'>
      <div className='flex justify-between w-{60%} gap-[90px] items-center h-[500px]'>
        <img src={dug} alt="" className='h-[60%] w-[55%]' />
        <img src={dub} alt=""  className='h-[500px]'/>
      </div>
      <div className='h-[50%] flex flex-col gap-4 w-[35%] justify-center'>
        <div className='flex gap-4'>
            <h4>Special Offer</h4>
            <div className='bg-green-700 text-white'>-20%</div>
        </div>
        <h2 className='w-full font-bold text-left text-4xl'>Mountain Pine Bath Oil</h2>
        <p className='text-gray-500 text-left'>Made using clean, non-toxic ingredients, our products are designed for everyone.</p>
        <ul className='text-left flex gap-[10px]'>
            <li className='text-left max-w-full flex gap-6 text-5xl font-medium text-green-700'>15 <p className='w-[10%]  text-5xl font-medium'>:</p> </li>
            <li className='text-left max-w-full flex gap-6 text-5xl font-medium text-green-700'>21 <p className='w-[10%]  text-5xl font-medium'>:</p> </li>
            <li className='text-left max-w-full flex gap-6 text-5xl font-medium text-green-700'>46 <p className='w-[10%]  text-5xl font-medium'>:</p> </li>
            <li className='text-left max-w-full flex gap-6 text-5xl font-medium text-green-700'>08 <p className='w-[10%]  text-5xl font-medium'>:</p> </li>
        </ul>
      </div>
    </div>
  )
}
