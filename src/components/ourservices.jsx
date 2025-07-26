import React, { useState } from 'react';
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

const OurServices = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div >
      <div 
      onClick={() => setIsOpen(!isOpen)}
        >
        {categories.map((categoryItem) => (
          <div key={categoryItem.id}>
            <div className='accordion_title'>
              <h3>{categoryItem.title}</h3>
              <span className='border-gray-700 hover:border-white border-[1px] rounded-2xl py-1 px-4'>
                {!isOpen ? (
                  <FontAwesomeIcon icon={faPlus} />
                ) : (
                  <FontAwesomeIcon icon={faMinus} />
                )}
              </span>
            </div>
            {isOpen && (
              <div>
                {categoryItem.skills.map((skill, index) => (
                  <p key={index}>{skill}</p>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurServices;