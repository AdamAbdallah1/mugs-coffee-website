import React from 'react'
import ButtonBook from '../components/ButtonBook'

const Home = () => {
  const hour = new Date().getHours()

  const getMoodText = () => {
    if (hour >= 6 && hour < 12) {
      return "Good morning Start strong with an Espresso or Spanish Latte"
    }
    if (hour >= 12 && hour < 17) {
      return "Midday boost Power through with an Iced Latte"
    }
    if (hour >= 17 && hour < 21) {
      return "Evening vibes Slow down with Matcha or Caramel Latte"
    }
    return "Late night mood Chill with a warm cup and good company"
  }

  return (
    <section
      id='home'
      className='text-white flex flex-col justify-center items-center mt-50 gap-6 relative z-10 px-4'
    >
      <h1 className='text-4xl sm:text-5xl md:text-6xl font-extrabold text-center max-w-2xl'>
        A Cup of Coffee For Every Mood
      </h1>

      <h3 className='text-lg sm:text-xl md:text-2xl text-center opacity-90'>
        {getMoodText()}
      </h3>

      <div className='flex flex-col sm:flex-row gap-4 sm:gap-10 mt-4'>
        <button
  className="
    bg-[#0F8B8D] 
    hover:bg-[#0C7476]
    text-[#F5E6C8]
    px-6 py-3
    font-semibold tracking-wide
    transition-colors
  "
  onClick={() =>
    document.getElementById('menu').scrollIntoView({ behavior: 'smooth' })
  }
>
  VIEW MENU
</button>
      </div>
    </section>
  )
}

export default Home
