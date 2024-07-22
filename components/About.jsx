import React from 'react'

const About = () => {
  return (
    <div>
        <div className="" style={
                {
                    width: '100vw',
                    height: '50vh',
                    backgroundImage: `url("/assets/images/bgnous/Rectangle2.png")`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingLeft: '25rem',
                }
            }>
                <div className="px-[17rem] ">
                    <p className='text-xl text-green font-semibold mt-8 mb-6'>A PROPOS DE NOUS</p>
                    <h2 className='text-4xl text-white font-bold mb-2'>Ce que nous <span className='text-green'>sommes</span></h2>
                    <hr className='w-12  h-2' />
                    <p className='text-white text-[1rem]  mb-8'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi tempore cupiditate perferendis dolor aliquid eveniet, culpa quasi nihil corporis ullam id autem at. Itaque tempora sed exercitationem quasi aliquam sit!</p>
                    <p className='text-white text-[1rem]  mb-14'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit quas esse officiis quidem ipsum nemo.</p>
                </div>
            </div>
    </div>
  )
}

export default About