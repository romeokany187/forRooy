import Link from "next/link"

const NavBar = (
  { className }
) => {
  return (
    <div className={`bg-secondary bg-opacity-95 w-full shadow-lg px-[8rem] py-4 flex justify-center  items-center
    top-0 left-0 sticky mb-0 ${className} `}>
      <div className="logo w-[5%] "><img src="/assets/images/logos/logo_home.png" alt="" /></div>
      <div className="menu flex flex-row gap-10 w-[75%] justify-end items-center">
        <Link href="/"><div className="text-white text-[1rem] cursor-pointer ">Home</div></Link>
        <Link href="/"><div className="text-white text-[1rem] cursor-pointer">About Us</div></Link>
        <Link href="/"><div className="text-white text-[1rem] cursor-pointer">Services</div></Link>
        <Link href="/"><div className="text-white text-[1rem] cursor-pointer">Contacts</div></Link>
        <Link href="/"><div className="text-white text-[1rem] cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5"
          fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round"
            strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg></div></Link>
      </div>
    </div>
  )
}

export default NavBar