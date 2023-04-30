import React, { useState } from "react";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          id="menu-button"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-haspopup="true"
        >
          Opciones
          <svg
            className="-mr-1 ml-2 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M10 12a2 2 0 100-4 2 2 0 000 4z"
            />
            <path
              fillRule="evenodd"
              d="M2 6a2 2 0 114 0 2 2 0 01-4 0zM14 6a2 2 0 114 0 2 2 0 01-4 0zM2 14a2 2 0 114 0 2 2 0 01-4 0zM14 14a2 2 0 114 0 2 2 0 01-4 0z"
            />
          </svg>
        </button>
      </div>

      {/* Dropdown panel, hidden by default */}
      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1">
            <a href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem" tabIndex="-1" id="menu-item-0">
              Opción 1
            </a>
            <a href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem" tabIndex="-1" id="menu-item-1">
              Opción 2
            </a>
            <a href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem" tabIndex="-1" id="menu-item-2">
              Opción 3
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
