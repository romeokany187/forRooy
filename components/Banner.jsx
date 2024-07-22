import React from 'react'
const Banner = () => {
    return (
        <div className="mt-0">

            <div className="" style={
                {
                    width: '100vw',
                    height: '91vh',
                    marginTop: "",
                    backgroundImage: `url("/assets/images/bghome/banner.png")`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    paddingLeft: '15rem',
                    paddingRight: '10rem',
                }
            } >
                <div className="w-[55%]">
                    <h1 className='text-[#dce5e2] text-6xl font-extrabold mb-5'>Où l'art <br /> devient vivant <br /> & creatif</h1>
                    <p className='text-[#dce5e2]  text-[1rem] mb-[3rem]'>Chez <span className='text-green'>r<span>O</span>oy.creativo</span> Nous croyons en la puissance de la créativité pour transforùer des idées en réalisation exceptionelles</p>
                    <div className="flex gap-6">
                        <div className="">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler bg-green rounded-full p-2 icon-tabler-player-play-filled" width="54" height="54" viewBox="0 0 24 24" stroke-width="2" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M6 4v16a1 1 0 0 0 1.524 .852l13 -8a1 1 0 0 0 0 -1.704l-13 -8a1 1 0 0 0 -1.524 .852z" stroke-width="0" fill="#F5F5F5" />
                            </svg>
                        </div>
                        <div className="text-[#dce5e2] text-[1rem] font-medium ">
                            <p>A PROPOS</p>
                            <p className='text-green'>Nos productions</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner