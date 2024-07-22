import React from 'react'
const Footer = () => {
  return (
    <div>
        <div className="bg-primary overflow-x-hidden flex flex-col items-center">
                <div className="px-[17rem] py-[3rem] flex justify-center items-center gap-16 ">
                    <div className="bg">
                        <img src="/assets/images/logos/logo_footer_sur.png" className='w-[15rem] mb-8' alt="" />
                        <p className='text-white text-[1rem] '>Nous sommes basés à Goma, RD Congo.</p>
                    </div>
                    <div className="space-y-5">
                        <div className="text-green text-[1rem] underline  font-medium">Home</div>
                        <div className="text-white text-[1rem] ">About Us</div>
                        <div className="text-white text-[1rem] ">Services</div>
                        <div className="text-white text-[1rem] ">Contacts</div>
                    </div>
                    <div className="">
                        <p className='text-white text-2xl font-bold mb-2'>Entrons en contact !</p>
                        <div className="flex border justify-center p-2 gap-2 rounded-md mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-phone" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                            </svg>
                            <p className='text-white text-[1rem]'> +243 976 553 529 </p>
                        </div>
                        <div className="flex bg-green justify-center p-2 gap-2 rounded-md mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-mail " width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
                                <path d="M3 7l9 6l9 -6" />
                            </svg>
                            <p className='text-primary text-[1rem]'>rooy@creativo.com</p>
                        </div>
                        <div className="flex">

                        </div>
                    </div>
                </div>
                <div className=" w-[53%] ">
                    <hr className='mb-2' />
                    <p className='text-center text-white text-[1rem] font-medium mb-6'>© 2023. Copy right  by rooy.creativo</p>
                </div>
            </div>
    </div>
  )
}

export default Footer