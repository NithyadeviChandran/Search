import React, { useState, useEffect } from "react";
import "./App.css";
import Group from "./assets/Group.svg"; 
import Frontpage from "./assets/Frontpage.png";
import { Link } from "react-router-dom";
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'; 

function Pflegepfad() {
  const [isAtBottom, setIsAtBottom] = useState(false);
  // const [showBtn, setShowBtn] = useState(false);
  
  const handleScroll = () => {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollTop = window.scrollY || document.documentElement.scrollTop;

    // Check if user is at the bottom
    if (windowHeight + scrollTop >= documentHeight - 50) {
      setIsAtBottom(true);
    } else {
      setIsAtBottom(false);
    }

    // Show 'back to top' button after scrolling 20px
    // if (scrollTop > 20) {
    //   setShowBtn(true);
    // } else {
    //   setShowBtn(false);
    // }
  };

  const handleScrollToggle = () => {
    if (isAtBottom) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    } else {
      window.scrollTo({
        top: window.innerHeight,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className="min-h-screen bg-white-100 p-4 pt-20"
     
    >
      <div className="text-center mb-4">
        <h1 className="text-2xl text-blue-900 font-Open Sans z-4">
          Ihr Weg durch die Pflege - Schritt für Schritt
        </h1>
        <div className="flex justify-between mt-2 border rounded border-blue-900 p-2 bg-blue-100 w-full max-w-md md:max-w-2xl">
          <p className="whitespace-normal text-blue-900 font-sans">
            Die Reise geht los! Hier sehen Sie, wie ein beispielhafter Verlauf Ihrer Pflegetätigkeit als Angehöriger aussehen könnte:
          </p>
          <img className="h-24 fill-blue-900 bg-blue-100" src={Frontpage} alt="Description" />
        </div>
      </div>

      <div
        className="relative w-full max-w-4xl mx-auto z-0"
        style={{
          minHeight: "700px",
          backgroundImage: `url(${Group})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center"
        }}
      >
        <Link
          to="/newpage"
          className="absolute underline text-blue-900"
          style={{ top: "1px", left: "45px" }}
        >
          Erkennung von
          <br />
          Pflegebedürftigkeit
        </Link>

        <Link
          to="/Pflegegrad"  // This will navigate to the Pflegegrad page
          className="absolute underline text-blue-900"
          style={{ top: "75px", left: "160px" }}
        >
          Pflegegrad Einstufung
        </Link>

        <Link
          to="/Pflegegrad"
          className="absolute underline text-blue-900"
          style={{ top: "170px", left: "20px" }}
        >
          Planung der Pflege
        </Link>
        <Link
          to="/Pflegegrad"
          className="absolute underline text-blue-900"
          style={{ top: "260px", left: "200px" }}
        >
          Praktische 
          <br />Unterstützung 
          <br />
          im Alltag
        </Link>
        <Link
          to="/blank"
          className="absolute underline text-blue-900"
          style={{ top: "320px", left: "20px" }}
        >
          Finanzielle
          <br /> Unterstützung
        </Link>
        <Link
          to="/blank"
          className="absolute underline text-blue-900"
          style={{ top: "430px", left: "195px" }}
        >
          Entlastung für 
          <br />Angehörige
        </Link>
        <Link
          to="/blank"
          className="absolute underline text-blue-900"
          style={{ top: "560px", left: "10px" }}
        >
          Umgang mit 
          <br />Herausforderungen
        </Link>
        
      </div>
       {/* Scroll indicator */}
       <div className="fixed bottom-12 left-1/2 transform -translate-x-1/2  z-50">
        {isAtBottom ? (
          <FaChevronUp
            size={24}
            className="text-gray-500 cursor-pointer"
            onClick={handleScrollToggle}  // Click to scroll to top
          />
        ) : (
          <FaChevronDown
            size={24}
            className="text-gray-500 cursor-pointer"
            onClick={handleScrollToggle}  // Click to scroll down
          />
        )}
      </div>
   
      {/* {showBtn && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-12 right-4 bg-blue-900 text-white p-2 rounded"
          title="Go to top"
        >
          Top
        </button>
)} */}
    </div>
  );
}

export default Pflegepfad;
