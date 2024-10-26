import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';


function Slidepage({ slides }) {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleBack = () => {
    navigate(-1);
  };

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length); // Loop back to first slide
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };


  return (
    <div className="p-4 md:p-16">
      <button
        className="bg-gray-300 text-gray-800 mt-16 py-2 px-4 rounded-md shadow-md hover:bg-gray-400 transition duration-200 ease-in-out"
        onClick={handleBack}
      >
        Zurück
      </button>
      <h2 className="text-lg font-semibold text-blue-900 mt-8 mb-4 text-center">
        Erkennung von Pflegebedürftigkeit
      </h2>
      <div className="flex flex-col justify-center items-center">
        <div className="w-full max-w-3xl">{slides[currentSlide]}</div>
        <div className="flex justify-center mt-6 space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`h-3 w-3 rounded-full ${
                currentSlide === index ? "bg-blue-500" : "bg-gray-300"
              }`}
              onClick={() => handleSlideChange(index)}
            ></button>
            
          ))}
        </div>
        <button className="prev-slide" onClick={prevSlide}>
        <FaChevronLeft /> {/* Left arrow */}
      </button>
      <button className="next-slide" onClick={nextSlide}>
        <FaChevronRight /> {/* Right arrow */}
      </button>

      {/* Simple slide indicator */}
      <p>
        {currentSlide + 1}/{slides.length}
      </p>
      </div>
    </div>
  );
}

export default Slidepage;
