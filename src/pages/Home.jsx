import React from 'react'
import ButtonBook from '../components/ButtonBook'

const Home = () => {
  return (
    <section id='home' className='text-white flex flex-col justify-center items-center mt-50 gap-6 relative z-10 px-4'>
        <h1 className='text-4xl sm:text-5xl md:text-6xl font-extrabold text-center max-w-2xl'>
          A Cup of Coffee For Every Mood
        </h1>
        <h3 className='text-lg sm:text-xl md:text-2xl text-center'>
          We Don't Make Your Coffee, We Make Your Day!
        </h3>

        <div className='flex flex-col sm:flex-row gap-4 sm:gap-10 mt-4'>
           <button className='bg-[#a05c29] hover:bg-[#9c663c] p-3 cursor-pointer'
           onClick={() => document.getElementById('menu').scrollIntoView({ behavior: 'smooth' })}
           >
                VIEW MENU
            </button>
        </div>
    </section>
  )
}

export default Home
