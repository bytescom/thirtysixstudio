import React from 'react'

const divider = ({isBgChange}) => {
  return (
    <div className={`opacity-20 h-[1px] max-w-[98%] m-auto ${!isBgChange? 'bg-[#B9B9BA]': 'bg-black'}`}></div>
  )
}

export default divider
