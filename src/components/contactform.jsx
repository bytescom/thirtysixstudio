import React from 'react'

const contactform = () => {
    return (

        <form className="space-y-[20px]">

            <div className="relative">
                <input
                    type="text"
                    placeholder="Name*"
                    className="w-full px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-black placeholder-black"
                    required></input>
            </div>


            <div className="relative">
                <input
                    type="email"
                    placeholder="Email*"
                    className="w-full px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-black placeholder-black"
                    required></input>
            </div>


            <div className="relative">
                <select
                    className="w-full px-4 py-3 border border-gray-300 rounded-full appearance-none focus:outline-none focus:ring-2 focus:ring-black placeholder-black">
                    <option>Topic*</option>
                    <option>General Inquiry</option>
                    <option>Support</option>
                    <option>Feedback</option>
                </select>
            </div>


            <div>
                <textarea
                    placeholder="Message"
                    className="w-full h-32 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black resize-none placeholder-black"></textarea>
            </div>


            <div className="text-left">
                <button type="submit" className="px-6 py-2 text-sm font-bold text-black border border-gray-300 rounded-full hover:bg-gray-100 focus:ring-2 focus:ring-black">
                    SEND
                </button>
            </div>
        </form>
    )
}

export default contactform
