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
        <div className='max-w-[96.5%] lg:max-w-[98%] m-auto tracking-tight leading-tight py-[6rem]'>
            {/* Parent Container with border */}
            <div className='cursor-pointer border-b border-[#292929]'>
                <div
                    className={`cursor-pointer border-b ${!isBgChange ? 'border-[#292929]' : 'border-[#fd2c2a]'
                        }`}
                >
                    <div className='border-b border-[#B9B9BA] border-opacity-30'>
                        <div
                            onClick={() => setIsOpen(!isOpen)}
                            className='flex justify-between items-center lg:w-[44rem] lg:mx-auto lg:pr-[12rem] py-4 lg:py-2'
                        >
                            <h3>ROLES OPEN</h3>
                            {/* Toggle Button (Plus/Minus Icon) */}
                            <span
                                className={`border border-gray-700 rounded-2xl py-1 px-4 hover:text-white hover:bg-black dark:hover:bg-white dark:hover:text-black${isBgChange ? 'hover:bg-[#fd2c2a]' : 'hover:bg-black'}`}
                            >
                                {!isOpen ? (
                                    <FontAwesomeIcon icon={faPlus} />
                                ) : (
                                    <FontAwesomeIcon icon={faMinus} />
                                )}
                            </span>
                        </div>
                    </div>
                    {/* Collapsible Role List */}
                    <div
                        className='transition-[max-height] duration-1000 ease-in-out overflow-hidden'
                        style={{
                            maxHeight: isOpen ? `${contentRef.current?.scrollHeight}px` : '0px',
                        }}
                        ref={contentRef}
                    >
                        {roles.map((rolesItem, index) => (
                            <div
                                key={index}
                                className='border-b border-[#B9B9BA] border-opacity-30 transition-all duration-300 ease-in-out hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black cursor-pointer'
                            >
                                <p
                                    className='lg:w-[44rem] lg:mx-auto lg:pr-[12rem] py-2'>
                                    {rolesItem}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OpenRole;