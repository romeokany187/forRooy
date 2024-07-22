import React from 'react'
const Patners = () => {
  return (
    <div>
      <div className="px-[15rem] h-[45vh] bg-white  flex justify-between items-center gap-[3rem] ">
        <div className="w-[40%] ">
          <h1 className='text-4xl font-extrabold mb-2'>Ceux qui nous ont fait confiance</h1>
          <hr className='w-16  border-2 border-black mb-2' />
        </div>
        <div className=" grid grid-cols-[repeat(3,40%)] grid-rows-[repeat(2,50%)]  ">
          <img src="/assets/images/logos/glori_1.png" className='w-[8rem]' />
          <img src="/assets/images/logos/malcat_2.png" className='w-[8rem]' />
          <img src="/assets/images/logos/arra_3.png" className='w-[8rem]' />
          <img src="/assets/images/logos/tunda_4.png" className='w-[8rem]' />
          <img src="/assets/images/logos/SOSO_5.png" className='w-[8rem]' />
          <img src="/assets/images/logos/M_6.png" className='w-[8rem]' />
        </div>
      </div>
    </div>
  )
}

export default Patners;