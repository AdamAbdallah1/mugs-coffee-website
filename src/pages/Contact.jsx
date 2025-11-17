import React from 'react'
import { FaMapMarkedAlt, FaPhoneAlt } from "react-icons/fa";
import { IoTime } from "react-icons/io5";

const Contact = () => {
  return (
    <section id='contact' className='bg-white mt-10 md:mt-20 flex flex-col p-5 justify-center items-center gap-10'>
        <h1 className='text-3xl md:text-4xl font-extrabold text-center'>Contact Us</h1>

        <div className='bg-black w-full text-white flex flex-col md:flex-row justify-around items-center gap-6 p-6 md:p-10 rounded-lg'>

            <div className='flex flex-col items-center gap-2 text-center'>
                <FaMapMarkedAlt className='text-4xl md:text-5xl text-[#C69B7B]'/>
                <h1 className='text-xl md:text-2xl font-bold'>Address</h1>
                <p className='text-sm md:text-base'>Deir El Zahrani | Drive Thru</p>
                <p className='text-sm md:text-base'>Nabatieh Kfarjoz | Drive Thru</p>
            </div>

            <div className='flex flex-col items-center gap-2 text-center'>
                <FaPhoneAlt className='text-4xl md:text-5xl text-[#C69B7B]'/>
                <h1 className='text-xl md:text-2xl font-bold'>Call Us</h1>
                <p className='text-sm md:text-base'>Kfarjoz: +961-76-444-617</p>
                <p className='text-sm md:text-base'>Der El Zahrani: +961-71-444-836</p>
            </div>

            <div className='flex flex-col items-center gap-2 text-center'>
                <IoTime className='text-4xl md:text-5xl text-[#C69B7B]'/>
                <h1 className='text-xl md:text-2xl font-bold'>Opening Hours</h1>
                <p className='text-sm md:text-base'>Mon - Fri: 7 AM - 7 PM</p>
                <p className='text-sm md:text-base'>Sat - Sun: 8 AM - 6 PM</p>
            </div>

        </div>
    </section>
  )
}

export default Contact
