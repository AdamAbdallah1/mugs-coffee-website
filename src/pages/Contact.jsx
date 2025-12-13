import React from 'react';
import { FaMapMarkedAlt, FaPhoneAlt } from "react-icons/fa";
import { IoTime } from "react-icons/io5";

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-white py-20 px-6 flex flex-col items-center mt-10"
    >
      <h1 className="text-3xl md:text-4xl font-extrabold text-center mb-12 text-gray-800">
        Contact Us
      </h1>

      <div
        className="
          w-full max-w-6xl 
          grid grid-cols-1 md:grid-cols-3 
          gap-10 p-10
        "
      >
        <div className="flex flex-col items-center gap-3 text-center bg-black/90 p-10 rounded-2xl shadow-xl border border-black/20 hover:scale-105 transition-transform duration-300">
          <FaMapMarkedAlt className="text-4xl text-[#C69B7B]" />
          <h2 className="text-2xl font-bold text-white">Address</h2>
          <p className="text-sm md:text-base text-gray-300">Deir El Zahrani | Drive Thru</p>
          <p className="text-sm md:text-base text-gray-300">Nabatieh Kfarjoz | Drive Thru</p>
        </div>

        <div className="flex flex-col items-center gap-3 text-center bg-black/90 p-10 rounded-2xl shadow-xl border border-black/20 hover:scale-105 transition-transform duration-300">
          <FaPhoneAlt className="text-4xl text-[#C69B7B]" />
          <h2 className="text-2xl font-bold text-white">Call Us</h2>
          <p className="text-sm md:text-base text-gray-300">Kfarjoz: +961-76-444-617</p>
          <p className="text-sm md:text-base text-gray-300">Deir El Zahrani: +961-71-444-836</p>
        </div>

        <div className="flex flex-col items-center gap-3 text-center bg-black/90 p-10 rounded-2xl shadow-xl border border-black/20 hover:scale-105 transition-transform duration-300">
          <IoTime className="text-4xl text-[#C69B7B]" />
          <h2 className="text-2xl font-bold text-white">Opening Hours</h2>
          <p className="text-sm md:text-base text-gray-300">Mon - Fri: 7 AM - 7 PM</p>
          <p className="text-sm md:text-base text-gray-300">Sat - Sun: 8 AM - 6 PM</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
