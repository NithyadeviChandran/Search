import React from "react";
import { useNavigate } from 'react-router-dom';
import Frontpage from './assets/Frontpage.png';
import Vector from './assets/Vector.svg'

const Startsite = () => {
  const navigate = useNavigate();

  const handleCircleClick = (name) => {
    navigate(`/new-page/${name}`);
  };

  const circles = [
    { cx: 110, cy: 50, r: 20, name: "Erkennung von Pflegebedürftigkeit", side: "left" },
    { cx: 300, cy: 150, r: 20, name: "Einstufung & Antragstellung", side: "right" },
    { cx: 90, cy: 250, r: 20, name: "Planung der Pflege", side: "left" },
    { cx: 300, cy: 350, r: 20, name: "Unterstützung im Alltag", side: "right" },
    { cx: 90, cy: 450, r: 20, name: "Finanzielle Unterstützung", side: "left" },
    { cx: 300, cy: 550, r: 20, name: "Entlastung für Angehörige", side: "right" },
    { cx: 90, cy: 650, r: 20, name: "Gesundheit und Wohlbefinden", side: "left" },
  ];

  const createPath = (from, to) => {
    const x1 = from.side === "left" ? from.cx + from.r : from.cx - from.r;
    const x2 = to.side === "left" ? to.cx + to.r : to.cx - to.r;
    const midX = (x1 + x2) / 2;
    return `M ${x1},${from.cy} C ${midX},${from.cy + 2} ${midX},${to.cy - 2} ${x2},${to.cy}`;
  };

  return (
    <div className="min-h-screen bg-white-100 py-2" style={{ paddingTop: "80px" }}>
      <div className="text-center mb-8 px-4 py-2">
        <h1 className="text-2xl text-blue-900 font-Open Sans">
          Ihr Weg durch die Pflege – Schritt für Schritt.
        </h1>
        <div className="flex mt-4 border rounded border-blue-300 px-4 py-2 bg-blue-100 w-full max-w-md md:max-w-2xl">
        <p>
          Finden Sie die Unterstützung, die Sie als Pflegebedürftiger oder pflegender Angehöriger brauchen.
          <br />
        Jetzt direkt loslegen!
        </p>
  
        <img src={Frontpage} alt="Description" />
   
        </div>
    
      </div>
      <svg
        viewBox="0 0 400 800"
        className="border border-white-100 w-full"
        preserveAspectRatio="xMidYMid meet"
      >
        {circles.map((circle, index) => (
          <React.Fragment key={index}>
            <circle
              cx={circle.cx}
              cy={circle.cy}
              r={circle.r}
              fill="skyblue"
              className="stroke-black stroke-2"
              onClick={() => handleCircleClick(circle.name)}
              style={{ cursor: 'pointer' }}
              role="button"
              tabIndex="0"
            />
            <text
              x={circle.cx}
              y={circle.cy + circle.r + 20}
              textAnchor="middle"
              className="fill-black font-xs text-xs md:text-base"
              onClick={() => handleCircleClick(circle.name)}
              style={{ cursor: 'pointer' }}
              role="button"
              tabIndex="0"
            >
              {circle.name}
            </text>
          </React.Fragment>
        ))}
        {circles.map((circle, index) => {
          if (index === circles.length - 1) return null;
          const nextCircle = circles[index + 1];
          return (
            <path
              key={index}
              d={createPath(circle, nextCircle)}
              stroke="black"
              strokeWidth="2"
              fill="transparent"
            />
          );
        })}
      </svg>
      <img src={Vector} alt="Description" />
    </div>
  );
};

export default Startsite;
