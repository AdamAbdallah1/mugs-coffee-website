import React, { useState } from 'react'
import { CiCoffeeCup } from "react-icons/ci"
import { HiMenu } from "react-icons/hi"
import { AiOutlineClose } from "react-icons/ai"

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full z-50">
      <div className="flex items-center justify-between h-16 px-6 text-white
        bg-[#0F8B8D]/90 backdrop-blur-md border-b border-white/10">

        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer">
          <CiCoffeeCup size={30} className="text-[#F5E6C8]" />
          <h1 className="font-extrabold text-xl tracking-wide">
            Mugs Coffee
          </h1>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 font-medium text-sm tracking-wide">
          {['Home','Menu','Gallery','About','Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative text-white/90 hover:text-[#F5E6C8] transition-colors"
            >
              {item}
            </a>
          ))}
        </nav>

        <button
          className="md:hidden text-[#F5E6C8]"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <AiOutlineClose size={26}/> : <HiMenu size={26}/>}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0F8B8D]/95 backdrop-blur-md
          border-t border-white/10 flex flex-col items-center gap-6 py-6">

          {['Home','Menu','Gallery','About','Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className="text-lg text-white/90 hover:text-[#F5E6C8] transition-colors"
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}

export default Navbar
