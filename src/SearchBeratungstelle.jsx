import React, { useState, useEffect } from 'react';

const SearchBeratungstelle = () => {
  const [postalCode, setPostalCode] = useState('');
  const [results, setResults] = useState([]);
  const [originalData, setOriginalData] = useState([]);

  useEffect(() => {
    fetch('/beratungstelle.json')
      .then(response => response.json())
      .then(data => {
        setOriginalData(data);
        console.log("Fetched data:", data); // Log fetched data
      })
      .catch(error => console.error('Error loading JSON:', error));
  }, []);

//   const handleSearch = () => {
//     const trimmedPostalCode = postalCode.trim(); // Trim the input
//     console.log("Searching for postal code:", trimmedPostalCode); // Log the input postal code
  
//     const foundCenters = originalData.filter(center => {
//       console.log("Comparing with:", center.postalCode); // Log each postal code being compared
//       const isMatch = center.postalCode.startsWith(trimmedPostalCode);
//       console.log(`Does ${center.postalCode} start with ${trimmedPostalCode}?`, isMatch); // Log comparison result
//       return isMatch;
//     });
  
//     setResults(foundCenters);
//   };
  const handleSearch = () => {
    const trimmedPostalCode = postalCode.trim(); // Trim the input
    console.log("Searching for postal code:", trimmedPostalCode); // Log the input postal code
    const foundCenters = originalData.filter(center =>
      center.postalCode.startsWith(trimmedPostalCode)
    );
    setResults(foundCenters);
  };
  return (
    <div>
        <div className="flex flex-col items-center justify-center bg-white-500 text-4xl font-bold font-sans text-gray-800 pt-24 pb-16">
        {/* <div className=" bg-white-500 text-4xl font-bold font-sans text-gray-800  top-190 left-0 w-full z-10 pt-16 pb-16"> */}
      <br />    
      <h2>Beratungsstelle für Angehörige</h2>
      <br />
      <input
        type="text"
        placeholder="Enter postal code"
        value={postalCode}
        onChange={(e) => setPostalCode(e.target.value)}
        className="border-2 border-blue-500 rounded-lg px-4 py-2 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-blue-700 transition duration-300 text-sm md:text-base"
      />
      <br />
      <button onClick={handleSearch}
      className="border-2 border-blue-500 text-grey-500 bg-blue rounded-lg px-4 py-2 hover:bg-blue-500 hover:text-white transition duration-300"
      >Search</button>
      <br />

      {results.length > 0 && (
        <ul>
          {results.map((center) => (
            <li key={center.id} className="mb-4 p-4 border rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-1">{center.name}</h3>
              <p className="text-gray-600">{center.address}</p>
              {/* <p>Postal Code: {center.postalCode}</p> */}
            </li>
          ))}
        </ul>
      )}
      {results.length === 0 && postalCode && (
        <p>No counseling centers found for postal code {postalCode}</p>
      )}
    </div>
    </div>
  );
};

export default SearchBeratungstelle;
