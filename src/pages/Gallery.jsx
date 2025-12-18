import React from 'react';
import Gallery1 from '../assets/gallery1.png';
import Gallery2 from '../assets/gallery2.png';
import Gallery3 from '../assets/gallery3.png';
import Gallery4 from '../assets/gallery4.png';
import Gallery5 from '../assets/gallery5.png';
import Gallery6 from '../assets/gallery6.png';


const Gallery = () => {
  const galleryImages = [
    { src: Gallery1, alt: 'Specialty cortado' },
    { src: Gallery2, alt: 'Expert barista pouring coffee' },
    { src: Gallery3, alt: 'Coffee brewing process' },
    { src: Gallery4, alt: 'Perfect cortado with latte art' },
    { src: Gallery5, alt: 'Specialty coffee preparation' },
    { src: Gallery6, alt: 'Premium coffee experience' }
  ];

  return (
    <section id="gallery" className="section-padding-small" style={{ background: 'var(--bg-primary)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <h2 className="hero-medium" style={{ marginBottom: '16px' }}>Gallery</h2>
          <p className="body-large" style={{ color: 'var(--text-secondary)' }}>
            A glimpse into our craft
          </p>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '24px'
        }}>
          {galleryImages.map((image, index) => (
            <div 
              key={index}
              style={{
                overflow: 'hidden',
                border: '1px solid var(--border-light)',
                aspectRatio: '4/5',
                cursor: 'pointer'
              }}
              className="hover-lift"
            >
              <img 
                src={image.src}
                alt={image.alt}
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'cover',
                  transition: 'transform 0.3s ease'
                }}
                onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;