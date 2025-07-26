import React, { useContext } from "react";
import ThemeContext from "./ThemeContext";

const ChangeMode = ({ isBgChange }) => {
    const { isDark, setIsDark } = useContext(ThemeContext);

    return (
        <div>
            <div
                aria-label="Toggle theme"
                className={`border-[0.5px] rounded-2xl flex cursor-pointer trans-changemode ${isBgChange ? 'border-black' : 'border-[#B9B9BA]'}`}
                onClick={() => setIsDark(prev => !prev)}
            >
                {isDark ?
                    <>
                        <img className='rounded-2xl px-[10px] py-[5px]' src="lightmode.svg" alt="" />
                        <img className='bg-white text-black  rounded-2xl px-[14px] py-[5px]' src="darkmode.svg" alt="" />
                    </>
                    :
                    <>
                        <img className='bg-black text-white rounded-2xl px-[14px] py-[5px]' src="lightmode.svg" alt="" />
                        <img className='rounded-xl px-[10px] py-[5px]' src="darkmode.svg" alt="" />
                    </>
                }
            </div>
        </div>
    );
};

export default ChangeMode;