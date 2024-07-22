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
        <Link href="/"><div className="text-white text-[1rem] cursor-pointer">Blog</div></Link>
        <Link href="/"><div className="text-white text-[1rem] cursor-pointer">Contacts</div></Link>
      </div>
    </div>
  )
}

export default NavBar