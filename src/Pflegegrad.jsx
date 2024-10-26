import React, { useState } from "react";
import Modal from "./Modal";
import Slidepage from './Slidepage'
import { useNavigate } from "react-router-dom";


const Pflegegrad = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [slideContent, setSlideContent] = useState(null);
  const navigate = useNavigate(); 

  const openModal = (content, slides) => {
    setModalContent(content);
    setSlideContent(slides);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const navigateToSlides = () => {
    navigate("/slidepage"); // Programmatically navigate to the Slidepage route
  };

  const modalContentMap = {
    link1: (
      <ul className="list-disc pl-5 space-y-2 text-gray-700">
        <li>Wie erkenne ich Pflegebedürftigkeit?</li>
        <li>Welche Anzeichen gibt es?</li>
        <li>Wer kann helfen, das festzustellen?</li>
      </ul>
    ),
    link2: (
      <ul className="list-disc pl-5 space-y-2 text-gray-700">
        <li>Another set of questions for Link 2.</li>
      </ul>
    ),
  };

  const slideContentMap = {
    link1: [
      <div key="slide-1">
        <div className="border border-blue-900 bg-blue-100 shadow-lg rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-2 text-blue-900">
            Wie erkenne ich Pflegebedürftigkeit?
          </h3>
          <p className="text-base font-sans text-gray-900">
            Pflegebedürftigkeit erkennst du daran, dass alltägliche Aktivitäten
            wie Anziehen, Essen oder Körperpflege zunehmend schwerfallen...
          </p>
        </div>
      </div>,
      <div key="slide-2">
        <div className="border border-blue-900 bg-blue-100 shadow-lg rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-2 text-blue-900">
            Welche Anzeichen gibt es?
          </h3>
          <p className="text-base font-sans text-gray-900">
            Typische Anzeichen sind körperliche Einschränkungen...
          </p>
        </div>
      </div>,
    ],
    link2: [
      <div key="slide-1">
        <div className="border border-blue-900 bg-blue-100 shadow-lg rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-2 text-blue-900">
            Content for Slide 1 in Link 2
          </h3>
          <p className="text-base font-sans text-gray-900">
            Content goes here...
          </p>
        </div>
      </div>,
    ],
  };

  return (
    <div>
      <button
        onClick={() => openModal(modalContentMap.link1, slideContentMap.link1)}
      >
        Open Modal 1
      </button>
      <button
        onClick={() => openModal(modalContentMap.link2, slideContentMap.link2)}
      >
        Open Modal 2
      </button>

      {/* Modal component */}
      <Modal isOpen={isModalOpen} onClose={closeModal} modalContent={modalContent} />

      {/* Button to navigate to Slidepage */}
      <button onClick={navigateToSlides}>
        Go to Slidepage
      </button>
    </div>
  );
};

export default Pflegegrad;
