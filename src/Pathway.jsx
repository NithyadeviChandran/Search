import React from "react";
import "./Pathway.css"; // Import CSS file for styling

const Pathway = () => {
  const steps = [
    "Auslöser & Symptome",
    "Diagnose",
    "Pflegegrad beantragen",
    "Pflegeplanung",
    "Praktische Pflege",
    "Selbstpflege",
    "Umgang mit Herausforderungen",
  ];

  // Define the bezierSpline function or import it if it's defined elsewhere
  const bezierSpline = (index) => {
    // Here you can generate the path data based on the index or other logic
    return `M 15 ${index * 100 + 25} C 0 ${index * 100 + 50}, 75 ${index * 100 + 75}, 25 ${index * 100 + 100}`;
  };

  return (
    <div className="pathway-container">
      {steps.map((step, index) => (
        <React.Fragment key={index}>
          <div className={`circle ${index % 2 === 0 ? "left" : "right"}`}>
            <div className="label">{step}</div>
          </div>
          {index < steps.length - 1 && (
            <svg
              className="curve"
              height="100"
              width="150" // Adjust width for better control
              style={{
                position: "absolute",
                top: `${index * 100 + 50}px`,
                left: `${index % 2 === 0 ? 50 : 100}px`, // Alternate left and right
              }}
            >
              <path
                d={bezierSpline(index)} // Use the bezierSpline function to generate the path data
                stroke="#003366" // Dark blue color
                strokeWidth="4" // Increased stroke width for visibility
                fill="transparent"
              />
            </svg>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Pathway;
