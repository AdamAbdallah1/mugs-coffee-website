import React from 'react'
import Gallery1 from '../assets/gallery1.png'
import Gallery2 from '../assets/gallery2.png'
import Gallery3 from '../assets/gallery3.png'
import Gallery4 from '../assets/gallery4.png'
import Gallery5 from '../assets/gallery5.png'
import Gallery6 from '../assets/gallery6.png'
import Gallery7 from '../assets/gallery7.png'
import Gallery8 from '../assets/gallery8.png'


const Gallery = () => {
  const galleryImages = [
    { src: Gallery1, alt: 'Specialty cortado' },
    { src: Gallery2, alt: 'Expert barista pouring coffee' },
    { src: Gallery3, alt: 'Coffee brewing process' },
    { src: Gallery4, alt: 'Perfect cortado with latte art' },
    { src: Gallery5, alt: 'Specialty coffee preparation' },
    { src: Gallery6, alt: 'Specialty coffee preparation' },
    { src: Gallery7, alt: 'Specialty coffee preparation' },
    { src: Gallery8, alt: 'Premium coffee experience' }
  ]

  return (
    <section id="gallery" className="px-4 py-20 text-black mt-20">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <h1 className='text-4xl font-extrabold text-center text-black'>Gallery</h1>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-xl border border-white/10 group cursor-pointer"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="
                  w-full 
                  h-64 
                  object-cover 
                  transition-transform 
                  duration-300 
                  ease-out 
                  group-hover:scale-105
                "
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery
