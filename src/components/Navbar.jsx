import React, { useState } from 'react';
import { CiCoffeeCup } from "react-icons/ci";
import { HiMenu } from "react-icons/hi"; 
import { AiOutlineClose } from "react-icons/ai"; 
import ButtonBook from './ButtonBook';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className='flex items-center justify-between p-4 h-16 text-white bg-black/50 backdrop-blur-md fixed w-full z-50'>
      
      <div className='flex items-center gap-2'>
          <CiCoffeeCup size={32} color='#C69B7B'/>
          <h1 className='font-extrabold text-xl cursor-pointer'>Mugs Coffee</h1>
      </div>

      <nav className='hidden md:flex gap-6 font-medium'>
          <a className='hover:text-[#C69B7B]' href="#home">Home</a>
          <a className='hover:text-[#C69B7B]' href="#menu">Menu</a>
          <a className='hover:text-[#C69B7B]' href="#about">About</a>
          <a className='hover:text-[#C69B7B]' href="#contact">Contact</a>
      </nav>

      <div className='flex md:hidden'>
            <button onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? <AiOutlineClose size={28}/> : <HiMenu size={28}/>}
            </button>
        </div>

      {menuOpen && (
        <div className='absolute top-16 left-0 w-full bg-black/90 flex flex-col items-center gap-4 p-5 md:hidden'>
          <a className='hover:text-[#C69B7B]' href="#home">Home</a>
          <a className='hover:text-[#C69B7B]' href="#menu">Menu</a>
          <a className='hover:text-[#C69B7B]' href="#about">About</a>
          <a className='hover:text-[#C69B7B]' href="#contact">Contact</a>
        </div>
      )}
    </div>
  );
}

export default Navbar;
