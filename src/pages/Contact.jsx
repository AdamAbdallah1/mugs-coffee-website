import React from 'react'
import { FaMapMarkedAlt, FaPhoneAlt } from "react-icons/fa";
import { IoTime } from "react-icons/io5";

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-white py-16 px-6 flex flex-col items-center"
    >
      <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-10">
        Contact Us
      </h1>

      <div
        className="
          bg-black/90 w-full max-w-6xl 
          text-white rounded-2xl 
          grid grid-cols-1 md:grid-cols-3 
          gap-10 p-10
        "
      >
        <div className="flex flex-col items-center gap-3 text-center">
          <FaMapMarkedAlt className="text-5xl text-[#C69B7B]" />
          <h2 className="text-2xl font-bold">Address</h2>
          <p className="text-sm md:text-base opacity-80">Deir El Zahrani | Drive Thru</p>
          <p className="text-sm md:text-base opacity-80">Nabatieh Kfarjoz | Drive Thru</p>
        </div>

        {/* Call Us */}
        <div className="flex flex-col items-center gap-3 text-center">
          <FaPhoneAlt className="text-5xl text-[#C69B7B]" />
          <h2 className="text-2xl font-bold">Call Us</h2>
          <p className="text-sm md:text-base opacity-80">Kfarjoz: +961-76-444-617</p>
          <p className="text-sm md:text-base opacity-80">Deir El Zahrani: +961-71-444-836</p>
        </div>

        <div className="flex flex-col items-center gap-3 text-center">
          <IoTime className="text-5xl text-[#C69B7B]" />
          <h2 className="text-2xl font-bold">Opening Hours</h2>
          <p className="text-sm md:text-base opacity-80">Mon - Fri: 7 AM - 7 PM</p>
          <p className="text-sm md:text-base opacity-80">Sat - Sun: 8 AM - 6 PM</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
