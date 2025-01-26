import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import { headerConstants } from "../../data/headerConstants";
import { useNavigate } from "react-router-dom";

function Header() {
  const [isMonthly, setIsMonthly] = useState(true); // Initial state is 'Monthly'
  const navigate = useNavigate();

  const togglePricing = () => {
    setIsMonthly(!isMonthly); // Toggle between 'Monthly' and 'Annual'
  };

  return (
    <header className="bg-gray-900 text-white py-6">
      <div className="container mx-auto flex justify-between items-center">
        {/* Plans Label */}
        <div className="flex">
             {/* <img src="https://via.placeholder.com/150x50.png?text=Your+Logo" alt="Bamboo App" /> */}
          <span className="text-xl font-bold px-2 border-gray-300 ml-2">
            {headerConstants.plans}
          </span>
        </div>

        {/* Toggle Buttons */}
        <div className="justify-center p-2 flex space-x-4 rounded-full border border-white">
          {headerConstants.period.map((item) => (
            <button
              key={item}
              className={`text-xs px-4 py-2 rounded-full ${
                (isMonthly && item === "Monthly") || (!isMonthly && item === "Annual")
                  ? "bg-gray-500 text-white"
                  : "bg-transparent text-white border border-gray-400"
              }`}
              onClick={togglePricing}
              aria-pressed={isMonthly && item === "Monthly"}
            >
              {item}
            </button>
          ))}
        </div>

        {/* Close Button */}
        <div className="flex px-6 py-2 bg-gray-500 rounded-full items-center">
          <MdClose className="text-white ml-4" size={14} />
          <button
            className="px-1 text-xs text-white bg-transparent"
            onClick={() => navigate("/about")}
          >
            Close
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
