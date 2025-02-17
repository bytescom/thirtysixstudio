import React from 'react'

const header = ({isBgChange}) => {
  return (
    <div className={`h-[3rem] w-[100%] px-[12px] flex justify-between items-center ${!isBgChange? 'bg-[#fffafa]': 'bg-[#fd2c2a]'}`}>
      <div>
        <a href='#'>Thirtysixstudio</a>
      </div>
      <div className='flex justify-center items-center tracking-tight gap-[2rem]'>
        <a href='#'>What we do</a>
        <a href='#'>Who we are</a>
        <a href='#'>How we give back</a>
        <a href='#'>Talk to us</a>
        <img className='ml-[80px] cursor-pointer select-none' src="threedot.svg" alt="loading..." />
      </div>
    </div>
  )
}

export default header
