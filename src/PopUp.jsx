import React, { useState, useEffect } from "react";
import "./Popup.css"; // Optional: Add custom styles for your popup



const Popup = ({ onClose }) => {
  const [answers, setAnswers] = useState({
    question1: "",
    question2: "",

  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAnswers((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User responses:", answers);
    onClose(); // Close the popup after submission
  };

  return (
    <div className="popup-container">
      <div className="popup-content">
      <button className="close-btn" onClick={onClose}>×</button>
        <h2>Hey! Wilkommen bei Pflego! Was liegt dir auf dem Herzen?</h2>
        <form onSubmit={handleSubmit}>
          <div className="question">
            <label htmlFor="question1">Ich bin neu hier und möchten Möglichkeiten bei der Pflege gezeigt bekommen</label>
            {/* <input
              type="text"
              id="question1"
              name="question1"
              value={answers.question1}
              onChange={handleChange}
              required
            /> */}
          </div>
          <div className="question">
            <label htmlFor="question2"> Ich suche Infos zu einem bestimmten Thema</label>
            {/* <input
              type="text"
              id="question2"
              name="question2"
              value={answers.question2}
              onChange={handleChange}
              required
            /> */}
          </div>
          <div className="question">
          <a
              href="https://pflegefinder.bayern.recaresolutions.com/providersearch/bavaria"
              target="_blank"
              rel="noopener noreferrer"
              className="question-link"
            >
               Ich möchte telefonische Beratung oder eine Beratungstelle finden
            </a>
          
          </div>
         
        </form>
     
      </div>
    </div>
  );
};

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Automatically open the popup when the page loads
  useEffect(() => {
    setIsOpen(true);
  }, []);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {isOpen && <Popup onClose={togglePopup} />}
    </div>
  );
};

export default Popup;
