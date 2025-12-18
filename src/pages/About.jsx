import React from 'react'

const About = () => {
  return (
    <section
      id='about'
      className='bg-white mt-20 flex flex-col justify-center items-center p-8 gap-6'
    >
      <div className="w-full max-w-3xl p-8 rounded-2xl border border-gray-200 shadow-lg hover:border-[#0F8B8D] transition-colors text-left">
        <h1 className='text-4xl font-extrabold mb-4 text-center'>About Us</h1>

        <h2 className='text-2xl font-bold mb-2 text-center'>
          Coffee The Way It Was Meant To Be.
        </h2>

        <h3 className='text-xl font-semibold mb-4'>
          Experience the authentic taste of coffee made with passion, precision, and the finest handpicked beans.
        </h3>

        <p className='text-gray-900 mb-6'>
          At our café, we believe coffee is more than just a drink — it’s a ritual, a comfort, and an art form. From bean to brew, every cup is crafted to perfection using traditional methods and premium ingredients. Whether you're here for your morning pick-me-up or an afternoon escape, we promise a rich, flavorful experience that captures the true essence of coffee.
        </p>

        <div className="flex justify-center">
          <button
            className='border border-[#0F8B8D] text-[#0F8B8D] hover:bg-[#0F8B8D] hover:text-white 
              px-6 py-3 rounded-full font-medium transition-colors'
            onClick={() =>
              document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })
            }
          >
            Contact Us
          </button>
        </div>
      </div>
    </section>
  )
}

export default About
