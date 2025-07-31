import React, { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import Divider from './divider';

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
    <div>
      {/* OurService */}
      <div className='flex lg:justify-center lg:items-center py-[8rem]'>
        <div className='flex flex-col lg:w-[50rem] gap-[4rem] leading-tight tracking-tighter pl-3 lg:pl-[3rem] lg:py-[5m]'>
          <h2 className='text-xl'>OUR SERVICES</h2>
          <p className='flex flex-col gap-[3rem] text-[2rem]  '>
            We provide you with captivating design, interactive animations, reliable code, and seamless project coordination. Whether you need a campaign built from scratch or assistance at a specific phase, we’ve got you covered.
          </p>
        </div>
      </div>

      <Divider isBgChange={isBgChange} />

      {/* Accordion */}
      <div className='max-w-[96.5%] lg:max-w-[98%] m-auto tracking-tight leading-tight py-[6m]'>
        {/* Parent Container with border */}
        <div className='cursor-pointer border-b border-[#292929]'>
          {categories.map((categoryItem, index) => {
            const isActive = openCategories.includes(categoryItem.id);
            return (
              <div
                key={categoryItem.id}
                className={`cursor-pointer border-b ${!isBgChange ? 'border-[#292929]' : 'border-[#fd2c2a]'
                  }`}
              >
                <div className='border-b border-[#B9B9BA] border-opacity-30'>
                  <div
                    onClick={() => handleToggle(categoryItem.id)}
                    className='flex justify-between items-center lg:w-[44rem] lg:mx-auto lg:pr-[12rem] py-4 lg:py-2  '
                  >
                    <h3>{categoryItem.title}</h3>
                    {/* Toggle Button (Plus/Minus Icon) */}
                    <span
                      className={`border border-gray-700 rounded-2xl py-1 px-4 
                  hover:text-white hover:bg-black dark:hover:bg-white dark:hover:text-black
                  ${isBgChange ? 'hover:bg-[#fd2c2a]' : 'hover:bg-black'}`}
                    >
                      {!isActive ? (
                        <FontAwesomeIcon icon={faPlus} />
                      ) : (
                        <FontAwesomeIcon icon={faMinus} />
                      )}
                    </span>
                  </div>
                </div>
                {/* Collapsible Skill List */}
                <div
                  className='transition-[max-height] duration-1000 ease-in-out overflow-hidden'
                  style={{
                    maxHeight: isActive
                      ? `${contentRefs.current[index]?.scrollHeight}px`
                      : '0px',
                  }}
                  ref={(el) => (contentRefs.current[index] = el)}
                >
                  {categoryItem.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className='border-b border-[#B9B9BA] border-opacity-30  transition-all duration-300 ease-in-out
                    hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black cursor-pointer'
                    >
                      <p
                        className='lg:w-[44rem] lg:mx-auto lg:pr-[12rem] py-2'
                      >
                        {skill}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* btnhover are used from index.css as utility. */}
      <div className='flex justify-start lg:justify-center w-[100%] px-3 py-[6rem]'>
        <div className='flex flex-col gap-[2rem] w-[44rem] leading-tight tracking-tight'>
          <div className='lg:w-[21rem] gap-12 flex flex-col'>
          <p>Our SS36 work includes community-centric projects for local marginalized groups, as well as career initiatives for marginalized industry talent.</p>
          <p>As a client, the most impactful way you can assist us in reaching our social sustainability goals is by collaborating with our team on a project. We warmly welcome partner- and sponsorships from like-minded individuals and organizations.
          </p>
          <button className='text-left'>
            <span className='text-sm underline border-[1px] border-[#ebe5e5] rounded-[25px] px-[35px] py-[8px] btnhover'>
              TALK TO US
            </span>
          </button>
        </div>
        </div>
      </div>

      <Divider isBgChange={isBgChange} />
    </div>
  );
};

export default OurServices;
