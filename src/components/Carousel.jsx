/* eslint-disable react/prop-types */
// import React, { useState } from 'react';
// import './Carousel.css';

import { useState } from "react";

function Carousel({ images = [] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

 
  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
 
  return (

    
    <div className="carousel-container ">
      <div
       className="carouselStyles"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
      
        {images.map((image, index) => (
          <img src={image} alt={`Slide ${index}`} key={index} style={{ width: '100%' }} className="carousel-image" />
        ))}
     
      </div>
      <button className="carousel-button prev" onClick={goToPrevious}>
        &#10094;
      </button>
      <button className="carousel-button next" onClick={goToNext}>
        &#10095;
      </button>
      <form className="d-flex carousel-search" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success bg-success" style={{color:"white"}}type="submit">Search</button>
      </form>
    </div>
  );
}

export default Carousel;
