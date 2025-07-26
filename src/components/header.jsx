import React, { useState, useEffect } from 'react';

const Header = ({ isBgChange }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isVisible && (
        <div
          className={`fixed top-0 left-0 w-full text-sm px-4 py-2 text-center font-medium shadow-md z-50 transition-opacity duration-500
            ${isBgChange ? 'bg-black text-white': 'bg-yellow-400 text-black'}
          `}
        >
          <div className="flex items-center justify-center gap-2">
            <span>⚠️</span>
            <span>Cloned website for learning purpose only</span>
            <button
              onClick={() => setIsVisible(false)}
              className={`ml-4 font-bold text-lg transition hover:opacity-70 ${
                isBgChange ? 'text-white': 'text-black'
              }`}
              aria-label="Close notification"
            >
              ×
            </button>
          </div>
        </div>
      )}

      <div
        className={`h-[3rem] w-full px-[12px] flex justify-between items-center ${
          !isBgChange ? 'bg-[#fffafa]' : 'bg-[#fd2c2a]'
        }`}
        style={{ marginTop: isVisible? '3rem': '0' }}
      >
        <div>
          <a href="#" className="font-semibold tracking-wide">Thirtysixstudio</a>
        </div>

        <div className="flex justify-center items-center tracking-tight gap-[2rem]">
          <a href="#">What we do</a>
          <a href="#">Who we are</a>
          <a href="#">How we give back</a>
          <a href="#">Talk to us</a>
          <img
            className="ml-[80px] cursor-pointer select-none"
            src="threedot.svg"
            alt="loading..."
          />
        </div>
      </div>
    </>
  );
};

export default Header;

