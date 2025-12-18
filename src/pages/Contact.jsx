import React from 'react';
import { FaMapMarkedAlt, FaPhoneAlt } from "react-icons/fa";
import { IoTime } from "react-icons/io5";

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-white py-20 px-6 flex flex-col items-center mt-10"
    >
      <h1 className="text-3xl md:text-4xl font-extrabold text-center mb-12 text-black">
        Contact Us
      </h1>

      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Address */}
        <div className="flex flex-col items-center gap-3 text-center p-8 rounded-2xl border border-gray-200 hover:border-[#0F8B8D] transition-colors">
          <FaMapMarkedAlt className="text-4xl text-[#0F8B8D]" />
          <h2 className="text-xl font-bold text-black">Address</h2>
          <p className="text-gray-600">Deir El Zahrani | Drive Thru</p>
          <p className="text-gray-600">Nabatieh Kfarjoz | Drive Thru</p>
        </div>

        {/* Phone */}
        <div className="flex flex-col items-center gap-3 text-center p-8 rounded-2xl border border-gray-200 hover:border-[#0F8B8D] transition-colors">
          <FaPhoneAlt className="text-4xl text-[#0F8B8D]" />
          <h2 className="text-xl font-bold text-black">Call Us</h2>
          <p className="text-gray-600">Kfarjoz: +961-76-444-617</p>
          <p className="text-gray-600">Deir El Zahrani: +961-71-444-836</p>
        </div>

        {/* Hours */}
        <div className="flex flex-col items-center gap-3 text-center p-8 rounded-2xl border border-gray-200 hover:border-[#0F8B8D] transition-colors">
          <IoTime className="text-4xl text-[#0F8B8D]" />
          <h2 className="text-xl font-bold text-black">Opening Hours</h2>
          <p className="text-gray-600">Mon – Fri: 7 AM – 7 PM</p>
          <p className="text-gray-600">Sat – Sun: 8 AM – 6 PM</p>
        </div>

      </div>
    </section>
  );
};

export default Contact;
