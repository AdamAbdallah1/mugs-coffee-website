import React from 'react'
import { BiSolidCoffeeBean } from "react-icons/bi";
import { FaInstagram, FaMapMarkedAlt, FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className='bg-black text-white p-10 flex flex-col gap-10'>
      
      <div className='flex flex-col md:flex-row justify-around items-center gap-10'>

        <div className='flex flex-col gap-3 items-center md:items-start text-center md:text-left'>
          <h1 className='text-2xl md:text-3xl font-bold'>Quick Links</h1>
          <hr className='w-12 border-[#e2a679]' />
          <nav className='flex flex-col gap-2 mt-2'>
            <div className='flex items-center gap-2 justify-center md:justify-start'>
              <BiSolidCoffeeBean color='#e2a679' size={20} />
              <a className='hover:text-[#e2a679] cursor-pointer' href="#home">Home</a>
            </div>
            <div className='flex items-center gap-2 justify-center md:justify-start'>
              <BiSolidCoffeeBean color='#e2a679' size={20} />
              <a className='hover:text-[#e2a679] cursor-pointer' href="#menu">Menu</a>
            </div>
            <div className='flex items-center gap-2 justify-center md:justify-start'>
              <BiSolidCoffeeBean color='#e2a679' size={20} />
              <a className='hover:text-[#e2a679] cursor-pointer' href="#about">About Us</a>
            </div>
            <div className='flex items-center gap-2 justify-center md:justify-start'>
              <BiSolidCoffeeBean color='#e2a679' size={20} />
              <a className='hover:text-[#e2a679] cursor-pointer' href="#contact">Contact Us</a>
            </div>
          </nav>
        </div>

        <div className='flex flex-col gap-2 items-center md:items-start text-center md:text-left'>
          <h1 className='text-2xl md:text-3xl font-bold'>Opening Hours</h1>
          <hr className='w-12 border-[#e2a679]' />
          <p className='text-[#e2a679] mt-2'>Mon - Fri</p>
          <p>7 AM - 7 PM</p>
          <p className='text-[#e2a679]'>Sat - Sun</p>
          <p>8 AM - 6 PM</p>
        </div>

        <div className='flex flex-col gap-2 items-center md:items-start text-center md:text-left'>
          <h1 className='text-2xl md:text-3xl font-bold'>Contact Info</h1>
          <hr className='w-12 border-[#e2a679]' />
          <p className='flex items-center gap-2 justify-center md:justify-start mt-2'>
            <FaMapMarkedAlt color='#e2a679' />Deir El Zahrani | Drive Thru
          </p>
          <p className='flex items-center gap-2 justify-center md:justify-start'>
            <FaMapMarkedAlt color='#e2a679' />Nabatieh Kfarjoz | Drive Thru
          </p>
          <p className='flex items-center gap-2 justify-center md:justify-start'>
            <FaPhoneAlt color='#e2a679' />Kfarjoz: +961-76-444-617
          </p>
          <p className='flex items-center gap-2 justify-center md:justify-start'>
            <FaPhoneAlt color='#e2a679' />Der El Zahrani: +961-71-444-836
          </p>
          <button className='bg-[#e2a679] w-fit p-2 mt-3 cursor-pointer rounded'>
            <FaInstagram size={18} />
          </button>
        </div>

      </div>

      <section className='text-center text-[#e2a679] mt-6'>
        <p>© Adam Abdallah 2025 All Rights Reserved</p>
      </section>

    </footer>
  )
}

export default Footer
