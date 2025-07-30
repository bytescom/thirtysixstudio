import React, { useEffect, useState } from 'react';
import ChangeMode from './changemode';
import Divider from './divider';

const Navbar = ({ isBgChange, isMessageVisible }) => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        // Scrolling down
        setShowNavbar(false);
      } else {
        // Scrolling up
        setShowNavbar(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div className={`transition-transform duration-500 fixed z-50 w-full ${showNavbar ? 'translate-y-0' : '-translate-y-full'}  ${isMessageVisible ? 'top-[42px]' : 'top-0'}`}>
      <div className={`h-[3rem] w-full px-[12px] flex justify-between items-center ${!isBgChange ? 'bg-[#fffafa] dark:bg-black dark:text-white' : 'bg-[#fd2c2a] dark:text-black'}`}>
        <div>
          <a href='#'>Thirtysixstudio</a>
        </div>
        <div>
          <ChangeMode />
        </div>
        <div className='flex justify-center items-center tracking-tight gap-[2rem]'>
          {/* <a href='#'>What we do</a>
          <a href='#'>Who we are</a>
          <a href='#'>How we give back</a>
          <a href='#'>Talk to us</a> */}
          <img
            className='ml-[80px] cursor-pointer select-none'
            src={isBgChange ? 'darkdot.svg' : 'lightdot.svg'}
            alt="dot"
          />
        </div>
      </div>
      <Divider isBgChange={isBgChange} />
    </div>
  );
};

export default Navbar;
