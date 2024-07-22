'use client'
import Link from "next/link"
import { useEffect, useState } from "react"

const NavBar = (
  { className }
) => {
  const [showShadow, setShowShadow] = useState(true);

  useEffect(() => {
    const handleScroll = () =>{
      if(window.scrollY > 73) {
        setShowShadow(true)
        console.log('papa');
        
      }else {
        setShowShadow(false)
        console.log('mama');
      }
    }
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll)
    };
  }, []);
  return (
    <div className={`bg-secondary ${showShadow ? 'bg-opacity-95' : 'bg-opacity-100'} bg-opacity-95
       w-full  px-[8rem] py-4 flex justify-center  items-center
    top-0 left-0 sticky mb-0  'shadow-lg shadow-transparent'`}>
      <div className="logo w-[5%] "><img src="/assets/images/logos/logo_home.png" alt="" /></div>
      <div className="menu flex flex-row gap-10 w-[75%] justify-end items-center">
        <Link href="/"><div className="text-[#dce5e2] text-[1rem] cursor-pointer ">Home</div></Link>
        <Link href="/"><div className="text-[#dce5e2] text-[1rem] cursor-pointer">About Us</div></Link>
        <Link href="/"><div className="text-[#dce5e2] text-[1rem] cursor-pointer">Services</div></Link>
        <Link href="/"><div className="text-[#dce5e2] text-[1rem] cursor-pointer">Blog</div></Link>
        <Link href="/"><div className="text-[#dce5e2] text-[1rem] cursor-pointer">Contacts</div></Link>
      </div>
    </div>
  )
}

export default NavBar