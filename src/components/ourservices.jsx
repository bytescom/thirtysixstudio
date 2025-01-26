import React, { useState } from 'react'
import Divider from './divider'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

const categories = [
  {
    id: 1,
    title: "CREATIVE",
    skills: ["Art Direction",
      "Creative Director"],
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

const ourservices = ({isBgChange}) => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className='flex flex-col gap-[3rem] max-w-[55%] ml-[26%] leading-tight tracking-tight py-[5rem]'>
        <div >OUR SERVICES</div>
        <div className='flex flex-col gap-[3rem] text-[2rem]'>
          We provide captivating design, interactive animations, advanced usability, reliable code, and immaculate project coordination. Whether you need a campaign built from scratch or assistance at a specific phase, we’ve got you covered.
        </div>
      </div>
      <Divider isBgChange={isBgChange} />

      <div></div>

      <Divider isBgChange={isBgChange} />

      <div className='flex flex-col gap-[2rem] max-w-[24%] ml-[26%] leading-tight tracking-tight pt-[5rem] pb-[15rem]'>
        <div className='flex flex-col gap-[3rem]'>
          <p>Got a project in mind? Drop us a line at hello@thirtysixstudio.com or use the form below.</p>
          <p>Not sure what you need? We’re here to help you define the undefined. Let’s explore all creative and technical possibilities together through one of our tailored labs, where we champion future-forward thinking within an ethical framework.</p>
          <button className='text-left'>
            <span className='text-sm underline border-[1px] border-[#ebe5e5] rounded-[25px] px-[35px] py-[10px]'>BRING THE HEAT!</span>
          </button>
        </div>
      </div>
      <Divider isBgChange={isBgChange} />
    </div>
  )
}

export default ourservices

