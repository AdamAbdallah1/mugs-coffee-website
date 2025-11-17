import React from 'react'
import CoffeeImage from '../assets/coffee-image.jpg'
import ButtonBook from '../components/ButtonBook'

const About = () => {
  return (
    <section id='about' className='bg-white mt-20 flex flex-col p-5 justify-center items-center gap-10'>
        
        <h1 className='text-4xl font-extrabold text-center'>About Us</h1>

        <div className='flex flex-col md:flex-row w-full gap-5'>
            <div className='w-full md:w-1/2 flex justify-center'>
                <img src={CoffeeImage} alt="" className='max-w-full h-auto'/>
            </div>

            <div className='w-full md:w-1/2 flex flex-col justify-center gap-4'>
                <h1 className='text-4xl font-extrabold mb-2 text-center md:text-left'>
                    Coffee The Way It Was Meant To Be.
                </h1>
                <h3 className='mb-4 font-bold text-xl text-center md:text-left'>
                    Experience the authentic taste of coffee made with passion, precision, and the finest handpicked beans.
                </h3>
                <p className='text-gray-900 text-center md:text-left'>
                    At our café, we believe coffee is more than just a drink — it’s a ritual, a comfort, and an art form. From bean to brew, every cup is crafted to perfection using traditional methods and premium ingredients. Whether you're here for your morning pick-me-up or an afternoon escape, we promise a rich, flavorful experience that captures the true essence of coffee.
                </p>
                <button className='bg-[#a05c29] hover:bg-[#9c663c] p-3 cursor-pointer mt-6 w-40 self-center md:self-start'
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                >
                    CONTACT US
                    
                </button>
            </div>
        </div>
        
    </section>
  )
}

export default About
