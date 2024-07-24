'use client'
import Image from "next/image";
import Link from "next/link"
import { useEffect, useState } from "react"
import LanguageSwitcher from "./LanguageSwicther";
import ButtonMenu from "./ButtonMenu";

const NavBar = (
  { className }
) => {
  const [showShadow, setShowShadow] = useState(true);
  const [laguage, setLanguage] = useState('fr');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 73) {
        setShowShadow(true)

      } else {
        setShowShadow(false)
      }
    }
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll)
    };
  }, []);
  return (
    <div className={`bg-secondary ${showShadow ? 'bg-opacity-95' : 'bg-opacity-100'}
       w-full  px-[15rem] py-4  top-0 left-0 sticky mb-0  shadow-xl shadow-transparent `}>

      <div className=" flex justify-between  items-center">
        <div className="logo w-[5%] z-50"><img src="/assets/images/logos/logo_home.png" alt="" /></div>
        <div className="flex gap-6">
          <LanguageSwitcher />
          <ButtonMenu />

        </div>
      </div>


    </div>
  )
}

export default NavBar