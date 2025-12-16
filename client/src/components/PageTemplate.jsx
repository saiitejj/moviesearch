import React from "react";
import { Link } from "react-router-dom";
const PageTemplate = ({ title, buttons ,showNavigator}) => {

  return (
    <div className="min-h-screen bg-[url('/movie.jpg')] bg-cover bg-center bg-no-repeat flex items-center justify-center">
      <div className="w-96 p-8 text-center bg-white/30 backdrop-blur-md shadow-lg rounded-lg">
        <div className="flex flex-col space-y-4 p-2">
          <h1 className="text-xl font-bold text-gray-900">
            {title}
          </h1>

          <div className="flex justify-center space-x-3">
            {buttons.map((btn, index) => (
              <button
                key={index}
                type="button"
                onClick={btn.onClick}
                className="
                  border p-2 rounded-sm cursor-pointer
                  ring-0 hover:ring-2 hover:ring-[#213448]
                  focus:outline-none border-transparent shadow-md
                "
              >
                {btn.label}
              </button>
            ))}
          </div>
        </div>
        {showNavigator && (
            <Link to="/"> ← Main Menu</Link>
        )}
      </div>
    </div>
  );
};

export default PageTemplate;
