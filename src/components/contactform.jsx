import React from 'react'

const contactform = ({isBgChange}) => {
    return (

        <form className="space-y-[20px] ">

            <div className="relative">
                <input
                    type="text"
                    placeholder="Name*"
                    className={`w-full px-4 py-3 border-black rounded-full focus:outline-none focus:ring-1 focus:ring-black placeholder-black ${!isBgChange ? 'bg-[#fff]' : 'bg-[#f74c49]'}`}
                    required></input>
            </div>


            <div className="relative">
                <input
                    type="email"
                    placeholder="Email*"
                    className={`w-full px-4 py-3 border-black rounded-full focus:outline-none focus:ring-1 focus:ring-black placeholder-black ${!isBgChange ? 'bg-[#fff]' : 'bg-[#f74c49]'}`}
                    required></input>
            </div>


            <div className="relative">
                <select
                    className={`w-full px-4 py-3 border-black rounded-full focus:outline-none focus:ring-1 focus:ring-black placeholder-black ${!isBgChange ? 'bg-[#fff]' : 'bg-[#f74c49]'}`}>
                    <option>Topic*</option>
                    <option>General Inquiry</option>
                    <option>Support</option>
                    <option>Feedback</option>
                </select>
            </div>


            <div>
                <textarea
                    placeholder="Message"
                    className={`w-full px-4 py-3 border-black rounded-full focus:outline-none focus:ring-1 focus:ring-black placeholder-black ${!isBgChange ? 'bg-[#fff]' : 'bg-[#f74c49]'}`}>
                </textarea>
            </div>


            <div className="text-left">
                <button type="submit" className="px-6 py-2 text-sm font-bold text-black border-black cursor-pointer rounded-full hover:black focus:ring-1 focus:ring-black">
                    SEND
                </button>
            </div>
        </form>
    )
}

export default contactform
