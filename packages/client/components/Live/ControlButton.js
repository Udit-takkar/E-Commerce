import React from 'react';

function ControlButton({ active, text, children, onClick, className = '' }) {
  return (
    <div className="flex flex-col items-center ">
      <button
        onClick={onClick}
        type="button"
        className={`flex items-center justify-center w-11 h-11 rounded-full border-solid border-2 bg-white ${
          active ? 'border-gray-200' : 'border-gray-base'
        } focus:outline-none  ${className}`}
      >
        {children}
      </button>
      <span className="text-xxs mt-1">{text}</span>
    </div>
  );
}

export default ControlButton;
