import React from 'react';

function FirstPage() {
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <section className="section-timeline">
        <div className="container mx-auto px-4">
          <ul className="timeline flex flex-col items-center space-y-8 md:space-y-12">
            {/* Timeline Item */}
            <li className="w-full flex justify-center relative">
              {/* <div className="content bg-white p-4 rounded-lg shadow-md text-center"> */}
                {/* <div className="circle bg-skyblue rounded-full h-16 w-16 mx-auto flex items-center justify-center">
                  <span className="text-white font-bold">1</span> {/* Text inside the circle */}
                {/* </div> */}
                <h3 className="mt-4 text-lg font-semibold">Auslöser & Symptome</h3>
              {/* </div> */}
              {/* Line connecting to next */}
              <div className="absolute h-24 w-1 bg-gray-400 top-full left-1/2 transform -translate-x-1/2"></div>
            </li>

            <li className="w-full flex justify-center relative">
              {/* <div className="content bg-white p-4 rounded-lg shadow-md text-center">
                <div className="circle bg-skyblue rounded-full h-16 w-16 mx-auto flex items-center justify-center">
                  <span className="text-white font-bold">2</span> {/* Text inside the circle */}
                {/* </div> */} 
                <h3 className="mt-4 text-lg font-semibold">Diagnose</h3>
              {/* </div> */}
             
              {/* <div className="absolute h-24 w-1 bg-gray-400 top-full left-1/2 transform -translate-x-1/2"></div> */}
            </li>

            <li className="w-full flex justify-center relative">
              {/* <div className="content bg-white p-4 rounded-lg shadow-md text-center"> */}
                {/* <div className="circle bg-skyblue rounded-full h-16 w-16 mx-auto flex items-center justify-center"> */}
                  {/* <span className="text-white font-bold">3</span> Text inside the circle */}
                {/* </div> */}
                <h3 className="mt-4 text-lg font-semibold">Pflegegrad Beantragen</h3>
              {/* </div> */}
              {/* Line connecting to next */}
              <div className="absolute h-24 w-1 bg-gray-400 top-full left-1/2 transform -translate-x-1/2"></div>
            </li>

            <li className="w-full flex justify-center relative">
              {/* <div className="content bg-white p-4 rounded-lg shadow-md text-center"> */}
                {/* <div className="circle bg-skyblue rounded-full h-16 w-16 mx-auto flex items-center justify-center"> */}
                  {/* <span className="text-white font-bold">4</span> Text inside the circle */}
                {/* </div> */}
                <h3 className="mt-4 text-lg font-semibold">Pflegeplanung</h3>
              {/* </div> */}
              {/* Line connecting to next */}
              <div className="absolute h-24 w-1 bg-gray-400 top-full left-1/2 transform -translate-x-1/2"></div>
            </li>

            <li className="w-full flex justify-center relative">
              {/* <div className="content bg-white p-4 rounded-lg shadow-md text-center">
                <div className="circle bg-skyblue rounded-full h-16 w-16 mx-auto flex items-center justify-center">
                  <span className="text-white font-bold">5</span> {/* Text inside the circle */}
                {/* </div>  */}
                <h3 className="mt-4 text-lg font-semibold">Praktische Pflege</h3>
              {/* </div> */}
              {/* Line connecting to next */}
              <div className="absolute h-24 w-1 bg-gray-400 top-full left-1/2 transform -translate-x-1/2"></div>
            </li>

            <li className="w-full flex justify-center relative">
              {/* <div className="content bg-white p-4 rounded-lg shadow-md text-center">
                <div className="circle bg-skyblue rounded-full h-16 w-16 mx-auto flex items-center justify-center">
                  <span className="text-white font-bold">6</span> {/* Text inside the circle */}
                {/* </div>  */}
                <h3 className="mt-4 text-lg font-semibold">Selbstpflege</h3>
              {/* </div> */}
              {/* Line connecting to next */}
              <div className="absolute h-24 w-1 bg-gray-400 top-full left-1/2 transform -translate-x-1/2"></div>
            </li>

            <li className="w-full flex justify-center relative">
              {/* <div className="content bg-white p-4 rounded-lg shadow-md text-center">
                <div className="circle bg-skyblue rounded-full h-16 w-16 mx-auto flex items-center justify-center">
                  <span className="text-white font-bold">7</span> {/* Text inside the circle */}
                {/* </div>  */}
                <h3 className="mt-4 text-lg font-semibold">Pflege</h3>
              {/* </div> */}
              {/* Line connecting to next */}
              <div className="absolute h-24 w-1 bg-gray-400 top-full left-1/2 transform -translate-x-1/2"></div>
            </li>

            <li className="w-full flex justify-center relative">
              {/* <div className="content bg-white p-4 rounded-lg shadow-md text-center">
                <div className="circle bg-skyblue rounded-full h-16 w-16 mx-auto flex items-center justify-center">
                  <span className="text-white font-bold">8</span> {/* Text inside the circle */}
                {/* </div>  */}
                <h3 className="mt-4 text-lg font-semibold">Umgang mit Herausforderung</h3>
              {/* </div> */}
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default FirstPage;
