import React from 'react'

const ButtonMenu = () => {
    return (
        <>
            <button
                onClick={toggleMenu}
                className="flex gap-4 items-center justify-center p-2 bg-slate-800 text-[#dce5e2] text-[1rem] rounded-md z-50"
            >
                <small className="font-bold">MENU</small>
                <CSSTransition
                    in={menuOpen}
                    timeout={300}
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
        </>
    )
}

export default ButtonMenu