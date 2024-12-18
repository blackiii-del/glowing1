import f_1 from '../../assets/Image/feature-1.jpg'

export default function Second() {
  return (
    <div className='w-[90%] flex justify-between items-center flex-col m-auto h-[400px]'>
      <h1 className='font-bold text-[40px] w-[90%]'>Why Shop with Glowing?</h1>
      <div className='w-[95%] flex justify-between h-[280px]'>
        <div className='flex justify-between items-center h-full flex-col max-w-[350px]'>
            <img src={f_1} alt="" className='w-[100px]'/>
            <h4 className='w-full text-2xl font-bold'>Guaranteed PURE</h4>
            <p className='w-full text-gray-400'>All Grace formulations adhere to strict purity standards and will never contain harsh or toxic ingredients</p>
        </div>
        <div className='flex justify-between items-center h-full flex-col max-w-[350px]'>
            <img src={f_1} alt="" className='w-[100px]'/>
            <h4 className='w-full text-2xl font-bold'>Guaranteed PURE</h4>
            <p className='w-full text-gray-400 text-[16px]'>All Grace formulations adhere to strict purity standards and will never contain harsh or toxic ingredients</p>
        </div>
        <div className='flex justify-between items-center h-full flex-col max-w-[350px]'>
            <img src={f_1} alt="" className='w-[100px]'/>
            <h4 className='w-full text-2xl font-bold'>Guaranteed PURE</h4>
            <p className='w-full text-gray-400'>All Grace formulations adhere to strict purity standards and will never contain harsh or toxic ingredients</p>
        </div>
      </div>

    </div>
  )
}
