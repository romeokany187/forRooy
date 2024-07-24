import React from 'react'
import { CSSTransition } from 'react-transition-group'
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from "framer-motion"


const ButtonMenu = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        return setMenuOpen(!menuOpen)
    }
    return (
        <>
            <button
                onClick={toggleMenu}
                className="flex gap-4 items-center justify-center p-2 bg-slate-800 text-[#dce5e2] text-[1rem] rounded-md z-50"
            >
                <small className="font-bold">MENU</small>
                <CSSTransition
                    in={menuOpen}
                    timeout={500}
                    classNames="icon"
                >
                    <div>
                        <Image
                            src={menuOpen ? '/close.svg' : '/menu.svg'}
                            alt="open menu"
                            width={17}
                            height={17}
                        />
                    </div>
                </CSSTransition>
            </button>

            <AnimatePresence>

                {menuOpen &&
                    (

                        <motion.div
                            initial={{ translateY: -1000 }}
                            animate={{ translateY: 0  }}
                            exit={{ translateY: -1000 }}
                            transition={{ duration: 0.9 }}
                            className="absolute top-0 right-0 w-full h-[100vh] bg-secondary bg-opacity-95 px-8 py-10"
                        >
                            <>
                                <div className="">
                                    <div className="w-full h-[80vh] flex flex-col justify-between ">
                                        <div className="flex gap-9 mt-8">
                                            <div className="">
                                                <p className="text-[#dce5e2] text-[1.2rem]  font-semibold mb-4">Bienvenue</p>
                                                <div className="flex flex-col gap-2 uppercase">
                                                    <Link href="/aboutt"><div className="text-[#dce5e2] text-[1rem] cursor-pointer ">Apropos</div></Link>
                                                    <Link href="/expertise"><div className="text-[#dce5e2] text-[1rem] cursor-pointer">Expertise</div></Link>
                                                    <Link href="/projects"><div className="text-[#dce5e2] text-[1rem] cursor-pointer">Projets</div></Link>
                                                    <Link href="/blog"><div className="text-[#dce5e2] text-[1rem] cursor-pointer">Blog</div></Link>
                                                </div>
                                            </div>

                                            <div className="">
                                                <p className="text-[#dce5e2] text-[1.2rem] font-semibold mb-4">Evèments</p>
                                                <div className="flex flex-col gap-2 uppercase ">
                                                    <Link href="/presse"><div className="text-[#dce5e2] text-[1rem] cursor-pointer ">Presse</div></Link>
                                                    <Link href="/"><div className="text-[#dce5e2] text-[1rem] cursor-pointer">Contacts</div></Link>
                                                    <Link href="/"><div className="text-[#dce5e2] text-[1rem] cursor-pointer">Services</div></Link>
                                                    <Link href="/"><div className="text-[#dce5e2] text-[1rem] cursor-pointer">Contacts</div></Link>
                                                    <Link href="/"><div className="text-[#dce5e2] text-[1rem] cursor-pointer flex gap-2">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" className="fill-gray-500 w-[.9rem] ">
                                                            <title>Mail</title>
                                                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                                                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                                                        </svg>
                                                        <p className="text-xs text-gray-500">Couriel</p>
                                                    </div>
                                                    </Link>
                                                    <Link href="/"><div className="text-[#dce5e2] text-[1rem] cursor-pointer flex gap-2">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="fill-gray-500 w-[.9rem] ">
                                                            <title>Téléphone</title>
                                                            <path d="M6.62 10.79a15.466 15.466 0 0 0 6.59 6.59l2.2-2.2a1.14 1.14 0 0 1 1.16-.27c1.26.42 2.62.65 4.02.65a1.15 1.15 0 0 1 1.15 1.15v3.84a1.15 1.15 0 0 1-1.15 1.15C10.65 22 2 13.35 2 2.15A1.15 1.15 0 0 1 3.15 1h3.84a1.15 1.15 0 0 1 1.15 1.15c0 1.4.23 2.76.65 4.02.14.46.02.97-.27 1.16l-2.2 2.2z" />
                                                        </svg>
                                                        <p className="text-xs text-gray-500">Couriel</p>
                                                    </div>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex justify-between ">
                                            <p className="text-gray-500 text-[1rem] ">©2024 DanRooy studio</p>
                                            <div className="flex gap-5">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="fill-gray-500 w-[1.2rem]">
                                                    <title>LinkedIn</title>
                                                    <path d="M19.998 3H4.002A1.997 1.997 0 0 0 2 4.998v14.004C2 20.106 2.893 21 4.002 21h15.996A1.998 1.998 0 0 0 22 19.002V4.998A1.998 1.998 0 0 0 19.998 3zm-12.8 14.198h-2.8V9h2.8v8.198zM7.4 7.794a1.62 1.62 0 1 1 0-3.24 1.62 1.62 0 0 1 0 3.24zM19 17.198h-2.8v-4.376c0-1.042-.373-1.75-1.305-1.75-.712 0-1.135.475-1.32.937-.068.167-.084.4-.084.634v4.555H10.8V9h2.687v1.113h.038c.168-.26.473-.617.947-.904.572-.367 1.248-.586 1.968-.586 2.32 0 3.56 1.518 3.56 3.973v4.602z" />
                                                </svg>

                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="fill-gray-500 w-[1.2rem] ">
                                                    <title>Facebook</title>
                                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 
                        11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491
                         0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z">
                                                    </path>
                                                </svg>

                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="fill-gray-500 w-[1.2rem] ">
                                                    <title>Instagram</title>
                                                    <path d="M12 2.163c3.204 0 3.584.012 4.849.07 1.366.062 2.633.332 3.608 1.307.976.975 1.245 2.243 1.307 3.608.058 1.265.069 1.645.069 4.849s-.011 3.584-.069 4.849c-.062 1.366-.331 2.633-1.307 3.608-.975.976-2.242 1.245-3.608 1.307-1.265.058-1.645.069-4.849.069s-3.584-.011-4.849-.069c-1.366-.062-2.633-.331-3.608-1.307-.976-.975-1.245-2.242-1.307-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.849c.062-1.366.332-2.633 1.307-3.608C4.515 2.495 5.782 2.225 7.148 2.163 8.413 2.105 8.793 2.163 12 2.163zm0-2.163C8.766 0 8.352.01 7.083.07c-1.548.071-2.908.384-4.002 1.478C1.986 2.63 1.572 3.991 1.501 5.54.942 7.084.932 7.497.932 12s.01 4.916.07 6.46c.071 1.548.384 2.908 1.478 4.002C4.63 23.986 5.991 24.4 7.54 24.469 9.084 25.028 9.497 25.038 12 25.038s2.916-.01 4.46-.07c1.548-.071 2.908-.384 4.002-1.478 1.094-1.094 1.407-2.454 1.478-4.002.06-1.544.07-1.957.07-6.46s-.01-4.916-.07-6.46c-.071-1.548-.384-2.908-1.478-4.002-1.094-1.094-2.454-1.407-4.002-1.478C15.916.01 15.497 0 12 0z" />
                                                    <path d="M12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a4 4 0 1 1 0-8 4 4 0 0 1 0 8z" />
                                                    <circle cx="18.406" cy="5.594" r="1.44" />
                                                </svg>

                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="fill-gray-500 w-[1.2rem]">
                                                    <title>YouTube</title>
                                                    <path d="M23.499 6.203a2.842 2.842 0 0 0-2.003-2.007C19.91 3.6 12 3.6 12 3.6s-7.91 0-9.496.596A2.842 2.842 0 0 0 .501 6.203 29.68 29.68 0 0 0 0 12a29.68 29.68 0 0 0 .501 5.797 2.842 2.842 0 0 0 2.003 2.007C4.09 20.4 12 20.4 12 20.4s7.91 0 9.496-.596a2.842 2.842 0 0 0 2.003-2.007A29.68 29.68 0 0 0 24 12a29.68 29.68 0 0 0-.501-5.797zM9.602 15.202V8.798L15.798 12 9.602 15.202z" />
                                                </svg>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        </motion.div>
                    )
                }
            </AnimatePresence>
        </>
    )
}

export default ButtonMenu