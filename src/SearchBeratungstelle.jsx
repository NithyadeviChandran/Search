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
      })
      .catch(error => console.error('Error loading JSON:', error));
  }, []);

  const handleSearch = (e) => {
    e.preventDefault(); 
    const trimmedPostalCode = postalCode.trim(); 
    if (!trimmedPostalCode) {
      console.error("Postal code is empty.");
      return; 
    }
    console.log("Redirecting to pflegefinder:", trimmedPostalCode); 
    const pflegefinderUrl = `https://pflegefinder.bayern.recaresolutions.com/providersearch/bavaria?return_url=%2Fprovidersearch%2Fbavaria%2Flisting&plz=${trimmedPostalCode}`;
        window.location.href = pflegefinderUrl;  
};
const handlePostalCodeChange = (e) => {
 
  setPostalCode(e.target.value);
};
  return (
    <div>
        <div className="flex flex-col items-center justify-center bg-white-500 text-4xl font-bold font-sans text-gray-800 pt-24 pb-16">
      <br />    
      <h2>Beratungsstelle für Angehörige</h2>
      <br />
      <form onSubmit={handleSearch}>
    <label htmlFor="postalCode">Enter your postal code:
      <input
      type="text" 
      id="postalCode" 
      name="postalCode" 
      value={postalCode} 
      onChange={handlePostalCodeChange}
      required
        className="border-2 border-blue-500 rounded-lg px-4 py-2 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-blue-700 transition duration-300 text-sm md:text-base"
      />
      </label>
      <br />
      <button onClick={handleSearch}
      className="border-2 border-blue-500 text-grey-500 bg-blue rounded-lg px-4 py-2 hover:bg-blue-500 hover:text-white transition duration-300"
      >Search</button>
      <br />
      </form>
  
    </div>
    </div>
  );
};

export default SearchBeratungstelle;
