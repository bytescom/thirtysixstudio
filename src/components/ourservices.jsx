import React from 'react'
import Divider from './divider'

const ourservices = () => {
  return (
    <div>
      <div className='flex flex-col gap-[3rem] max-w-[55%] ml-[26%] leading-tight tracking-tight py-[5rem]'>
        <div >OUR SERVICES</div>
        <div className='flex flex-col gap-[3rem] text-[2rem]'>
          We provide captivating design, interactive animations, advanced usability, reliable code, and immaculate project coordination. Whether you need a campaign built from scratch or assistance at a specific phase, we’ve got you covered.
        </div>
      </div>
      <Divider />
      <div class="bg-[#fffafa] flex items-center justify-center h-full pt-[5rem]">
        <div class="w-full max-w-2xl">
          <div class="border-b border-gray-300">
            <button class="w-full flex justify-between items-center px-4 py-3 focus:outline-none hover:bg-gray-100">
              <span class="font-medium">CREATIVE</span>
              <span class="text-xl font-bold text-gray-500">+</span>
            </button>
          </div>
          <div class="border-b border-gray-300">
            <button class="w-full flex justify-between items-center px-4 py-3 focus:outline-none hover:bg-gray-100">
              <span class="font-medium">DESIGN</span>
              <span class="text-xl font-bold text-gray-500">+</span>
            </button>
          </div>
          <div class="border-b border-gray-300">
            <button class="w-full flex justify-between items-center px-4 py-3 focus:outline-none hover:bg-gray-100">
              <span class="font-medium">ANIMATION</span>
              <span class="text-xl font-bold text-gray-500">+</span>
            </button>
          </div>
          <div class="border-b border-gray-300">
            <button class="w-full flex justify-between items-center px-4 py-3 focus:outline-none hover:bg-gray-100">
              <span class="font-medium">TECHNOLOGY</span>
              <span class="text-xl font-bold text-gray-500">+</span>
            </button>
          </div>
          <div class="border-b border-gray-300">
            <button class="w-full flex justify-between items-center px-4 py-3 focus:outline-none hover:bg-gray-100">
              <span class="font-medium">PROJECT DELIVERY</span>
              <span class="text-xl font-bold text-gray-500">+</span>
            </button>
          </div>
          <div class="border-b border-gray-300">
            <button class="w-full flex justify-between items-center px-4 py-3 focus:outline-none hover:bg-gray-100">
              <span class="font-medium">EXAMPLE PRODUCTS</span>
              <span class="text-xl font-bold text-gray-500">+</span>
            </button>
          </div>
        </div>
      </div>
      <div className='flex flex-col gap-[2rem] max-w-[24%] ml-[26%] leading-tight tracking-tight pt-[5rem] pb-[15rem]'>
        <div className='flex flex-col gap-[3rem]'>
          <p>Got a project in mind? Drop us a line at hello@thirtysixstudio.com or use the form below.</p>
          <p>Not sure what you need? We’re here to help you define the undefined. Let’s explore all creative and technical possibilities together through one of our tailored labs, where we champion future-forward thinking within an ethical framework.</p>
          <button className='text-left'>
            <span className='text-sm underline border-[1px] border-[#ebe5e5] rounded-[25px] px-[35px] py-[10px]'>BRING THE HEAT!</span>
          </button>
        </div>
      </div>
      <Divider/>
    </div>
  )
}

export default ourservices

