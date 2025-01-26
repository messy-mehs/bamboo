import React from 'react';
import { useNavigate } from 'react-router-dom'; // Assuming you're using react-router-dom for routing
import { subHeaderConstants } from '../../data/subHeaderConstants.js';

function Navigation() {
    const navigate = useNavigate();

  return (
    <header className="w-4/5 bg-gray-900 text-white py-6">
    <div className="container mx-auto flex justify-between items-center">

      <button 
        onClick={() => navigate("/about")} 
        className={`font-bold text-xs px-4 py-3 rounded-full ${'bg-white text-black'}`} 
      >
          Start with free tier
        </button>
      

      <div className="justify-center  p-2 flex space-x-4 rounded-full border border-white"> {/* Add this div */}
      {subHeaderConstants.map((item, index) => (
             <button 
             onClick={() => navigate("/about")}
             className={`text-xs togleWd px-4 py-2 rounded-full ${index==0 ? 'bg-gray-500 text-white  ' : 'bg-black-100 text-white'} `} 
           >
                {item}
            </button>
            ))}
      </div>

      <button 
          className={`font-bold text-xs px-4 py-3 rounded-full ${'bg-white text-black'}`} 
          onClick={() => navigate("/about")}
        >
          Contact for Customer Plan
        </button>


    </div>

  </header>
  );
}

export default Navigation;