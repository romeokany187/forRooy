import React from 'react'

const Nous = () => {
    return (
        <div>
            <div className="bg-secondary px-[15rem] py-8 flex gap-9 ">
                <div className="w-[60%] ">
                    <p className='text-xl text-green font-semibold mb-4'>Nos services</p>
                    <h2 className='text-[1.6rem] text-white font-bold mb-2'>Ce que nous <span className='text-green'>faisons</span></h2>
                    <hr className='w-12  h-2' />
                    <p className='text-white text-[.95rem]  mb-2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi tempore cupiditate perferendis dolor aliquid eveniet, culpa quasi nihil corporis ullam id autem at. Itaque tempora sed exercitationem quasi aliquam sit!</p>
                    <p className='text-white text-[.95rem]  mb-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit quas esse officiis quidem ipsum nemo.</p>

                    <button className='bg-green p-2 rounded-md'> Nos Articles </button>
                </div>
                <div className="grid grid-cols-[repeat(2,50%)] grid-rows-[repeat(2,43%)] gap-6 ">
                    <div className="flex flex-col justify-center items-center gap-3 bg-secondary py-4 px-4">
                        <img src="/assets/icons_services/ui.png" className='w-[4rem] ' />
                        <h3 className='text-xl text-white font-medium '>Branding Identity</h3>
                        <p className='text-[#cdcdcd] text-center'>We bring the right peopl together  so challenge</p>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-3 bg-gradient-to-b from-primary from-50% via-emerald-950 via-80% to-emerald-950 to-100% py-4 px-4">
                        <img src="/assets/icons_services/ux-design.png" className='w-[4rem] ' />
                        <h3 className='text-xl text-white font-medium '>Branding Identity</h3>
                        <p className='text-[#cdcdcd] text-center'>We bring the right peopl together  so challenge</p>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-3 bg-gradient-to-b from-primary from-50% via-emerald-950 via-80% to-emerald-950 to-100% py-4 px-4">
                        <img src="/assets/icons_services/ui 2.png" className='w-[4rem] ' />
                        <h3 className='text-xl text-white font-medium '>Branding Identity</h3>
                        <p className='text-[#cdcdcd] text-center'>We bring the right peopl together  so challenge</p>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-3 bg-secondary  px-4">
                        <img src="/assets/icons_services/bullhorn.png" className='w-[4rem] ' />
                        <h3 className='text-xl text-white font-medium'>Branding Identity</h3>
                        <p className='text-[#cdcdcd] text-center'>We bring the right peopl together  so challenge</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Nous