import React from 'react'
import NavBar from './NavBar'
const Banner = () => {
    return (
        <div className="">
            
            <div className="" style={
                {
                    width: '100vw',
                    height: '85vh',
                    backgroundImage: `url("/assets/images/bghome/banner.png")`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    paddingLeft: '17rem',
                    paddingRight: '10rem',
                }
            } >
                <div className="w-[55%]">
                    <h1 className='text-white text-6xl font-extrabold mb-5'>Où l'art <br /> devient vivant <br /> & creatif</h1>
                    <p className='text-[#f3fff8] text-xl mb-[6rem]'>Chez <span className='text-green'>r<span>O</span>oy.creativo</span> Nous croyons en la puissance de la créativité pour transforùer des idées en réalisation exceptionelles</p>
                    <div className="flex gap-6">
                        <div className="">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-player-play bg-green rounded-full p-2" width="54" height="54" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M7 4v16l13 -8z" />
                            </svg>
                        </div>
                        <div className="text-white text-[1rem] font-medium ">
                            <p>A PROPOS</p>
                            <hr className='' />
                            <p className='text-green'>Nos productions</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner