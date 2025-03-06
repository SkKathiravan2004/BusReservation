import React from 'react';
import './Gallery.css';  
import { Link } from 'react-router-dom';

const Gallery = () => {
  const images = [
    { className: 'bus-fleet', caption: 'Our Modern Bus Fleet' },
    { className: 'scenic-route', caption: 'Enjoy Scenic Routes' },
    { className: 'bus-interior', caption: 'Comfortable Interiors' },
    { className: 'ooty-kodaikanal', caption: 'Popular Travel Destinations' },
    { className: 'hills-express', caption: 'Popular Travel Bus' },
    { className: 'contact-us', caption: 'Contact Us' },
  ];

  return (
    <div className="gallery-container">
      <h1>Our Gallery</h1>
      <p>Take a look at our bus fleet, routes, and the comfort we offer on your travel journey.</p>

      <div className="gallery-grid">
        {images.map((image, index) => (
          <div key={index} className={`gallery-item ${image.className}`}>
            <div className="caption">{image.caption}</div>
          </div>
        ))}
      </div>
      
      <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home Page</Link>
    </div>
  );
};

export default Gallery;
