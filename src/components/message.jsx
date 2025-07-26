import React from 'react'

const Message = ({isBgChange, isVisible, setIsVisible}) => {

  return (
    <>
    {isVisible && (
      <div className={`fixed h-[42px] top-0 left-0 w-full text-sm px-4 py-2 text-center font-medium shadow-md z-50 transition-opacity duration-500
            ${isBgChange ? 'bg-[#000000] text-white' : 'bg-yellow-400 text-black'}`}>
        <div className="flex items-center justify-center gap-2">
          <span>⚠️</span>
          <span>For learning purpose only!</span>
          <button
            onClick={() => setIsVisible(false)}
            className={`ml-4 font-bold text-lg transition hover:opacity-70 ${isBgChange ? 'text-white' : 'text-black'
              }`}
            aria-label="Close notification"
          >
            ×
          </button>
        </div>
      </div>)}
    </>
  )
}

export default Message;
