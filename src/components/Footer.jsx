import React from 'react';
import { BiSolidCoffeeBean } from "react-icons/bi";
import { FaInstagram, FaMapMarkedAlt, FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className='bg-black text-white px-6 py-6'>
      
      <div className='flex flex-col md:flex-row justify-between items-center md:items-start gap-6 max-w-6xl mx-auto'>

        {/* Quick Links */}
        <div className='flex flex-col gap-2 items-center md:items-start text-center md:text-left'>
          <h1 className='text-base font-bold'>Quick Links</h1>
          <hr className='w-10 border-[#0F8B8D] mx-auto md:mx-0' />
          <nav className='flex flex-col gap-1 mt-1 text-sm'>
            {["home","menu","about","contact"].map((link, i) => (
              <div key={i} className='flex items-center gap-2 justify-center md:justify-start'>
                <BiSolidCoffeeBean size={12} className='text-[#0F8B8D]' />
                <a
                  className='hover:text-[#0F8B8D] transition-colors text-sm'
                  href={`#${link}`}
                >
                  {link === "about"
                    ? "About Us"
                    : link === "contact"
                    ? "Contact Us"
                    : link.charAt(0).toUpperCase() + link.slice(1)}
                </a>
              </div>
            ))}
          </nav>
        </div>

        {/* Opening Hours */}
        <div className='flex flex-col gap-1 items-center md:items-start text-center md:text-left text-sm'>
          <h1 className='text-base font-bold'>Opening Hours</h1>
          <hr className='w-10 border-[#0F8B8D] mx-auto md:mx-0' />
          <p className='text-[#0F8B8D] mt-1'>Mon - Fri</p>
          <p className='text-sm'>7 AM - 7 PM</p>
          <p className='text-[#0F8B8D]'>Sat - Sun</p>
          <p className='text-sm'>8 AM - 6 PM</p>
        </div>

        {/* Contact Info */}
        <div className='flex flex-col gap-1 items-center md:items-start text-center md:text-left text-sm'>
          <h1 className='text-base font-bold'>Contact Info</h1>
          <hr className='w-10 border-[#0F8B8D] mx-auto md:mx-0' />

          <p className='flex items-center gap-2 justify-center md:justify-start text-sm'>
            <FaMapMarkedAlt size={12} className='text-[#0F8B8D]' />
            Deir El Zahrani | Drive Thru
          </p>
          <p className='flex items-center gap-2 justify-center md:justify-start text-sm'>
            <FaMapMarkedAlt size={12} className='text-[#0F8B8D]' />
            Nabatieh Kfarjoz | Drive Thru
          </p>
          <p className='flex items-center gap-2 justify-center md:justify-start text-sm'>
            <FaPhoneAlt size={12} className='text-[#0F8B8D]' />
            Kfarjoz: +961-76-444-617
          </p>
          <p className='flex items-center gap-2 justify-center md:justify-start text-sm'>
            <FaPhoneAlt size={12} className='text-[#0F8B8D]' />
            Der El Zahrani: +961-71-444-836
          </p>

          <button className='bg-[#0F8B8D] p-1 mt-2 rounded hover:bg-[#075c5e] transition'>
            <FaInstagram size={14} />
          </button>
        </div>

      </div>

      {/* Footer Bottom */}
      <section className='text-center text-white text-xs mt-6'>
        <p>© Cedars Tech 2025 All Rights Reserved</p>
      </section>

    </footer>
  );
}

export default Footer;
