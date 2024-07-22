'use client'
import Image from "next/image";
import Link from "next/link"
import { useEffect, useState } from "react"

const NavBar = (
  { className }
) => {
  const [showShadow, setShowShadow] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    return setMenuOpen(!menuOpen)
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 73) {
        setShowShadow(true)
        console.log('papa');

      } else {
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
    <div className={`bg-secondary ${showShadow ? 'bg-opacity-95' : 'bg-opacity-100'}
       w-full  px-[15rem] py-4  top-0 left-0 sticky mb-0  shadow-lg `}>

      <div className="relative flex justify-between  items-center">
        <div className="logo w-[5%] "><img src="/assets/images/logos/logo_home.png" alt="" /></div>
        <div className="">
          <button onClick={toggleMenu} className="flex gap-4 items-center justify-center p-2 bg-slate-800
        text-[#dce5e2] text-[1rem] rounded-md ">
            <small>Menu</small>
            <Image src={menuOpen ? '/close.svg' : '/hamburgerMenu.svg'} alt="open menu" width={17} height={17} />
          </button>

          {menuOpen && <div className="absolute right-3 z-50 mt-2 w-full h-[100vh] origin-top-right bg-secondary
        bg-opacity-95 p-2 menu flex flex-col gap-2  justify-center items-center uppercase">
            <Link href="/"><div className="text-[#dce5e2] text-[1rem] cursor-pointer ">Home</div></Link>
            <Link href="/"><div className="text-[#dce5e2] text-[1rem] cursor-pointer">About Us</div></Link>
            <Link href="/"><div className="text-[#dce5e2] text-[1rem] cursor-pointer">Services</div></Link>
            <Link href="/"><div className="text-[#dce5e2] text-[1rem] cursor-pointer">Blog</div></Link>
            <Link href="/"><div className="text-[#dce5e2] text-[1rem] cursor-pointer">Contacts</div></Link>
          </div>}
        </div>
      </div>


    </div>
  )
}

export default NavBar