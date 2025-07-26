import React, { useEffect, useRef, useState } from 'react'
import Navbar from './components/Navbar'
import Canvas from './components/canvas/canvas'
import data from './components/canvas/data'
import LocomotiveScroll from 'locomotive-scroll';
import Divider from './components/divider';
import OurService from './components/ourservices';
import OpenRole from './components/openrole';
import ContactForm from './components/contactform';
import TextAnimation from './components/textanimation';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import Message from './components/message';


const App = () => {
  const rotateImg = useRef(null);
  const clickText = useRef(null);
  const [showCanvas, setshowCanvas] = useState(false);
  const [isBgChange, setIsBgchange] = useState(false);
  const [isMessageVisible, setIsMessageVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsMessageVisible(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);


  useGSAP(() => {
    gsap.to(rotateImg.current, {
      rotation: 360,
      duration: 10,
      repeat: -1,
      ease: "linear"
    });
  });


  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll();
    return () => locomotiveScroll.destroy();
  }, []);

  const handleClick = () => {
    setshowCanvas((prev) => !prev);
    setIsBgchange((prev) => !prev);
  };



  return (
    <>
      <Message isBgChange={isBgChange} isVisible={isMessageVisible} setIsVisible={setIsMessageVisible} />

      
      <div className={`relative h-full w-full select ${!isBgChange ? 'bg-[#fffafa] dark:bg-black dark:text-white' : 'bg-[#fd2c2a] dark:text-black'} `}>
        {showCanvas && showCanvas && data[0].map((canvasdetails, index) => (
          <Canvas key={index} details={canvasdetails} />
        ))}
        <Navbar isBgChange={isBgChange} isMessageVisible={isMessageVisible} />
        <Divider isBgChange={isBgChange} />
        <div className={`relative flex justify-center align-baseline h-[580px] ${isMessageVisible ? 'pt-[13rem]' : 'pt-[8rem]'}`}>
          <div className='flex flex-col w-[25%] leading-tight tracking-tight gap-8'>
            <p className='text-[2rem]'>At Thirtysixstudio, we build immersive digital experiences for brands with a purpose.</p>
            <p>We’re a boutique production studio focused on design, motion, and creative technology, constantly reimagining what digital craft can do for present-time ads and campaigns.</p>
          </div>
          <div className='w-[13%] mt-[5rem] ml-[9rem] select-none'>
            <img ref={rotateImg} src="rotatecircle.png" alt="Rotating Circle" />
          </div>
        </div>
        <div
          ref={clickText}
          onClick={handleClick}
          className='text-[15vw] text-center cursor-pointer select-none'
          style={{
            cursor: `url('/pepper.png') 32 32, pointer`
          }}
        >
          Thirtysixstudio
        </div>
        <Divider isBgChange={isBgChange} />
      </div>


      <div className={`relative h-full w-full select ${!isBgChange ? ' dark:bg-black dark:text-white' : 'bg-[#fd2c2a] dark:text-black'} `}>
        <div className='flex justify-center tracking-tight leading-tight pt-[5rem] pb-[12.5rem]'>
          {showCanvas && data[1].map((canvasdetails, index) => (
            <Canvas key={index} details={canvasdetails} />
          ))}
          <div className='text-xl p-[2px] ml-[6rem]'>01 - WHAT WE DO</div>
          <div className='flex flex-col gap-[10rem] w-[25%] ml-[16rem]'>
            <p className='text-[2rem]'>We aim to revolutionize digital production in the advertising space, bringing your ideas to life.</p>
            <div className='flex flex-col gap-[2rem]'>
              <p>As a contemporary studio, we use cutting-edge design practices and the latest technologies to deliver seamless digital work.</p>
              <p>Our commitment to creativity, innovation, and simplicity, paired with our agile approach, ensures your journey with us is smooth and enjoyable from start to finish.</p>
            </div>
          </div>
        </div>
        <Divider isBgChange={isBgChange} />
        <div>
          {showCanvas && data[2].map((canvasdetails, index) => (
            <Canvas key={index} details={canvasdetails} />
          ))}
          <OurService isBgChange={isBgChange} />
        </div>
        <Divider isBgChange={isBgChange} />
      </div>


      <div className={`relative h-full w-full select ${!isBgChange ? 'bg-[#fffafa] dark:bg-black dark:text-white' : 'bg-[#fd2c2a] dark:text-black'} `}>
        {showCanvas && data[3].map((canvasdetails, index) => (
          <Canvas key={index} details={canvasdetails} />
        ))}
        <div className='flex justify-center tracking-tight leading-tight py-[5rem]'>
          <div className='text-xl p-[2px] ml-[6rem]'>02 - WHO ARE WE</div>
          <div className='flex flex-col w-[25%] ml-[16rem]'>
            <p className='text-[2rem]'>Our vision is to simplify digital production while creating social impact and opportunity.</p>
          </div>
        </div>
        <TextAnimation isBgChange={isBgChange} />
        <div className='flex flex-col gap-[6rem] w-[25%] ml-[56%] tracking-tight leading-tight pt-[8rem] pb-[15rem]'>
          <p className='text-[2rem]'>We represent today's world: progressive and engaged.</p>
          <div className='flex flex-col gap-[4rem]'>
            <p >Thirtysixstudio is founded by Gita Jagessar, a queer person of color and seasoned production director from Amsterdam. With over 12 years of experience in digital advertising, Gita has worked with renowned global brands such as Netflix, Converse, Travis Scott, Ben & Jerry’s, and Cash App.</p>
            <button className='text-left'>
              <span className='text-sm underline border-[1px] border-[#ebe5e5] rounded-[25px] px-[35px] py-[10px] btnhover'>LEARN MORE</span>
            </button>
          </div>
        </div>
        <Divider isBgChange={isBgChange} />
      </div>


      <div className={`relative h-full w-full select ${!isBgChange ? 'bg-[#fffafa] dark:bg-black dark:text-white' : 'bg-[#fd2c2a] dark:text-black'} `}>
        <div className='flex flex-col gap-[4rem] max-w-[55%] ml-[26%] leading-tight tracking-tighter py-[5rem]'>
          {showCanvas && data[4].map((canvasdetails, index) => (
            <Canvas key={index} details={canvasdetails} />
          ))}
          <div className='text-xl'>03 - HOW TO GIVE BACK</div>
          <div className='flex flex-col gap-[3rem] text-[2rem]'>
            <p>At Thirtysix Studio, we recognize that our industry can perpetuate harm. We believe we have to try and reverse some of these imbalances. That’s why we’re launching SS36, our local social sustainability hub.</p>
            <p className='relative z-[1]'>Through SS36, we reinvest some of our revenue and expertise into the communities that shape the culture and trends our field so heavily relies on. Our main focus is on bridging gaps for those affected by systemic obstacles related to race, sexuality, wealth, and gender identity.</p>
          </div>
        </div>
        <Divider isBgChange={isBgChange} />
        <div className='flex flex-col gap-[2rem] max-w-[25%] ml-[26%] leading-tight tracking-tight pt-[5rem] pb-[10rem]'>
          {showCanvas && data[5].map((canvasdetails, index) => (
            <Canvas key={index} details={canvasdetails} />
          ))}
          <p>Our SS36 work includes community-centric projects for local marginalized groups, as well as career initiatives for marginalized industry talent.</p>
          <p>As a client, the most impactful way you can assist us in reaching our social sustainability goals is by collaborating with our team on a project. We warmly welcome partner- and sponsorships from like-minded individuals and organizations.</p>
          <button className='text-left'>
            <span className='text-sm underline border-[1px] border-black rounded-[25px] px-[25px] py-[6px] btnhover'>GET IN TOUCH</span>
          </button>
        </div>
        <Divider isBgChange={isBgChange} />
      </div>


      <div className={`relative h-full w-full select ${!isBgChange ? 'bg-[#fffafa] dark:bg-black dark:text-white' : 'bg-[#fd2c2a] dark:text-black'} `}>
        <div className='flex justify-center tracking-tight leading-tight pt-[5rem] pb-[10rem]'>
          {showCanvas && data[6].map((canvasdetails, index) => (
            <Canvas key={index} details={canvasdetails} />
          ))}
          <div className='text-xl p-[2px] ml-[6rem]'>04 - TALK TO US</div>
          <div className='flex flex-col gap-[3rem] w-[25%] ml-[16rem]'>
            <p >TALENT</p>
            <p className='text-[2rem]' >Thirtysixstudio is seeking talented collaborators.</p>
            <div className='relative z-[1] flex flex-col gap-[3rem] mt-[5rem]'>
              <p>If you are a multi-talented individual with exceptional communication skills, eager to elevate your digital craft together with us, we want to hear from you.</p>
              <p>We specifically welcome progressive people who value high-quality work and workplace well-being equally. At Thirtysixstudio, we believe that one can only exist in the presence of the other.</p>
              <button className='text-left'>
                <span className='text-sm underline border-[1px] border-[#ebe5e5] rounded-[25px] px-[35px] py-[10px] btnhover'>
                  DROP US A LINE
                </span>
              </button>
            </div>
          </div>
        </div>

        <Divider isBgChange={isBgChange} />
        <div>
          {showCanvas && data[7].map((canvasdetails, index) => (
            <Canvas key={index} details={canvasdetails} />
          ))}
          <OpenRole />
          <Divider isBgChange={isBgChange} />
          <div className='flex flex-col gap-[2rem] max-w-[24%] ml-[26%] leading-tight tracking-tight py-[5rem]'>
            <div className='text-xl'>CLIENTS</div>
            <div className='flex flex-col gap-[3rem]'>
              <p className='text-[2rem]'>Ready to get your project off the ground?</p>
              <p >We’re currently accepting new clients and are excited to hear from you. Get in touch by sending an email to hello@thirtysixstudio.com or fill out the form below to start your journey with us.</p>
            </div>
          </div>
        </div>
        <Divider isBgChange={isBgChange} />

        <div>
          {showCanvas && data[8].map((canvasdetails, index) => (
            <Canvas key={index} details={canvasdetails} />
          ))}
          <div className='max-w-[55%] ml-[26%] py-[5rem]'>
            <ContactForm isBgChange={isBgChange} />
          </div>
          <Divider isBgChange={isBgChange} />
          <div className='relative z-[1] flex flex-col gap-[2rem] max-w-[24%] ml-[26%] leading-tight tracking-tight py-[5rem]'>
            <div className='flex flex-col gap-[3rem]'>
              <p className='text-[2rem]'>Pssst. Looking for something spicy?</p>
              <p >Find the floating adjuma pepper or click the big red button below to unlock our fiery alter ego. Be warned, it’s hot in there! Don’t forget to turn on your sound.</p>
              <button className='text-left'>
                <span className='text-sm underline bg-[#fd2c2a] border-[1px] border-[#ebe5e5] rounded-[25px] px-[35px] py-[10px] btnhover'>BRING THE HEAT!</span>
              </button>
            </div>
          </div>
        </div>
        <Divider isBgChange={isBgChange} />
      </div>




      <div className={`relative h-[475px] w-full select ${!isBgChange ? 'bg-[#fffafa] dark:bg-black dark:text-white' : 'bg-[#fd2c2a] dark:text-black'} `}>
        {showCanvas && data[9].map((canvasdetails, index) => (
          <Canvas key={index} details={canvasdetails} />
        ))}
        <div className='flex justify-center tracking-tight leading-tight py-[5rem]'>
          <div className='flex flex-col mr-[15rem] gap-[5rem]'>
            <div className='flex gap-[4rem]'>
              <a href="#">Linkedin</a>
              <a href="#">Instagram</a>
            </div>
            <div className='flex flex-col'>
              <p>All Rights Reserved © 2024</p>
            </div>
          </div>
          <div className='flex flex-col mr-[3rem] gap-[5rem]'>
            <div className='pl-3'>hello@thirtysixstudio.com</div>
            <div className='flex '>
              <button className='text-left '>
                <span className='text-sm underline border-[1px] border-[#ebe5e5] rounded-[25px] px-[35px] py-[10px] btnhover'>PRIVACY STATEMENT</span>
              </button>
            </div>
          </div>
        </div>
        {/* make this half alphabet effect */}
        <div className="h-40 z-[0] mt-[34px] overflow-hidden bg-transparent relative">
          <h1 className="text-[15vw] text-center leading-tight">Thirtysixstudio</h1>
        </div>
      </div>

    </>
  )
}

export default App

