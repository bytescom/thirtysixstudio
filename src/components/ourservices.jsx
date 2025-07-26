import React, { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

const categories = [
  {
    id: 1,
    title: "CREATIVE",
    skills: ["Art Direction", "Creative Director"],
  },
  {
    id: 2,
    title: "DESIGN",
    skills: [
      "Digital Design",
      "UX/UI Design",
      "Web Design",
      "Graphic Design",
      "3D Design",
      "Interactive Design",
      "Illustration Design",
      "Brand Design",
    ],
  },
  {
    id: 3,
    title: "ANIMATION",
    skills: [
      "2D Animation",
      "3D Animation",
      "Motion Graphics",
      "Experimental Animation",
      "Typography Animation",
    ],
  },
  {
    id: 4,
    title: "TECHNOLOGY",
    skills: [
      "Development",
      "Implementation",
      "Creative Coding",
      "Prototyping",
      "Quality Assurance",
      "Testing",
    ],
  },
  {
    id: 5,
    title: "PROJECT DELIVERY",
    skills: [
      "Production Strategy",
      "Project Management",
      "Team Direction",
    ],
  },
  {
    id: 6,
    title: "EXAMPLE PRODUCTS",
    skills: [
      "Display Ads (Html5, Static, Rich Media)",
      "Websites",
      "AR Filters and Experiences",
      "Social Ads",
      "Digital Out of Home",
      "Static and Animated Assets",
      "Digital Installations",
      "Design Toolkits",
    ],
  },
];

const OurServices = ({ isBgChange }) => {
  const [openCategories, setOpenCategories] = useState([]);
  const contentRefs = useRef([]);

  const handleToggle = (id) => {
    setOpenCategories(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id) // Close if already open
        : [...prev, id] // Open if closed
    );
  };

  // Initialize refs
  useEffect(() => {
    contentRefs.current = contentRefs.current.slice(0, categories.length);
  }, [categories]);

  return (
    <div className='max-w-[98%] m-auto tracking-tight leading-tight py-[6rem]'>
      <div className={`cursor-pointer border-b-[1px] ${!isBgChange ? 'border-black' : 'border-[#fd2c2a]'}`}>
        {categories.map((categoryItem, index) => {
          const isActive = openCategories.includes(categoryItem.id);
          return (
            <div key={categoryItem.id}>
              <div 
                onClick={() => handleToggle(categoryItem.id)}
                className='flex justify-between items-center border-b-[1px] border-[#292929] py-2 pl-[22.2rem] pr-[36rem]'
              >
                <h3>{categoryItem.title}</h3>
                <span className={`border-gray-700 hover:text-white hover:bg-black dark:hover:bg-white dark:hover:text-black border-[1px] rounded-2xl py-1 px-4 ${
                  !isBgChange ? 'hover:bg-black' : 'hover:bg-[#fd2c2a]'
                }`}>
                  {!isActive ? (
                    <FontAwesomeIcon icon={faPlus} />
                  ) : (
                    <FontAwesomeIcon icon={faMinus} />
                  )}
                </span>
              </div>
              <div
                className="transition-[max-height] duration-1000 ease-in-out overflow-hidden"
                style={{
                  maxHeight: isActive ? `${contentRefs.current[index]?.scrollHeight}px` : '0px'
                }}
                ref={el => contentRefs.current[index] = el}
              >
                {categoryItem.skills.map((skill, skillIndex) => (
                  <p 
                    key={skillIndex}
                    className="pl-[22.2rem] pr-[36rem] py-2 border-b border-[#292929] transition-all duration-300 ease-in-out hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black cursor-pointer"
                  >
                    {skill}
                  </p>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OurServices;