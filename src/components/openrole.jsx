import React, { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';


const roles = [
    "Project Managers",
    "Digital Producers",
    "Designers",
    "Illustrators",
    "Animators",
    "3D Artists",
    "Motion Designers",
    "Developers and Coders",
    "Creative Technologists",
    "Sound Engineers",
];

const OpenRole = ({ isBgChange }) => {
    const [isOpen, setIsOpen] = useState(true);
    const [height, setHeight] = useState(0);
    const contentRef = useRef(null);


    useEffect(() => {
        if (isOpen) {
            setHeight(contentRef.current.scrollHeight);
        } else {
            setHeight(0);
        }
    }, [isOpen]);



    return (
        <div className='max-w-[98%] m-auto tracking-tight leading-tight my-[6rem]'>
            <div className={`cursor-pointer border-b-[1px] ${!isBgChange ? 'border-black' : 'border-[#fd2c2a]'}`}>
                <div
                    onClick={() => setIsOpen(!isOpen)}
                    className='flex justify-between items-center border-b-[1px] border-[#292929] py-2 pl-[22.2rem] pr-[36rem]'
                >
                    <h3>ROLES OPEN</h3>
                    <span className='border-gray-700 hover:text-white hover:bg-black dark:hover:bg-white dark:hover:text-black border-[1px] rounded-2xl py-1 px-4'>
                        {!isOpen ? (
                            <FontAwesomeIcon icon={faPlus} />
                        ) : (
                            <FontAwesomeIcon icon={faMinus} />
                        )}
                    </span>
                </div>
                <div
                    className="transition-[max-height] duration-1000 ease-in-out overflow-hidden"
                    style={{ maxHeight: `${height}px` }}
                    ref={contentRef}
                >
                    {roles.map((rolesItem, index) => (
                        <p
                            key={index}
                            className="pl-[22.2rem] pr-[36rem] py-2 border-b border-[#292929]  transition-all duration-300 ease-in-out hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black cursor-pointer"
                        >
                            {rolesItem}
                        </p>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default OpenRole;