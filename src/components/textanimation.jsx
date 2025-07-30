import React from 'react'
import Divider from './divider'

const textanimation = ({ isBgChange }) => {
    return (
        <div>
            <Divider isBgChange={isBgChange} />
            <div className='flex flex-col lg:flex-row lg:items-center pb-6 px-3'>
                <div className='text-[10vw] lg:text-[12.5vw] lg:w-[50vw]'>
                    <h2 className='tracking-tight leading-tight'>Agile</h2>
                </div>
                <div className='lg:w-[50vw] lg:pl-[7.5rem]'>
                    <p className='tracking-tight leading-tight lg:w-[21rem]'>
                        We live and breathe efficiency and are not limited by geography. Based in Amsterdam with hubs in London, Paris, Johannesburg, New York, and beyond, we curate the right team for each project and get moving swiftly.
                    </p>
                </div>
            </div>
            <Divider isBgChange={isBgChange} />
            <div className='flex flex-col lg:flex-row lg:items-center pb-6 px-3'>
                <div className='text-[10vw] lg:text-[12.5vw] lg:w-[50vw]'>
                    <h2 className='tracking-tight leading-tight'>Innovative</h2>
                </div>
                <div className='lg:w-[50vw] lg:pl-[6.5rem]'>
                    <p className='tracking-tight leading-tight lg:w-[21rem]'>
                        We use innovative digital processes and technology to ensure our initiatives run smoothly, allowing our young, lean, and international team to focus on what matters and maximize momentum and opportunity.
                    </p>
                </div>
            </div>
            <Divider isBgChange={isBgChange} />
            <div className='flex flex-col lg:flex-row lg:items-center pb-6 px-3'>
                <div className='text-[10vw] lg:text-[12.5vw] lg:w-[50vw]'>
                    <h2 className='tracking-tight leading-tight'>Cultured</h2>
                </div>
                <div className='lg:w-[50vw] lg:pl-[7rem]'>
                    <p className='tracking-tight leading-tight lg:w-[21rem]'>
                        We are progressive and community-focused, and don't believe in maintaining the status quo or sticking to the old way. Our people reflect today's realities and stay connected to culture.
                    </p>
                </div>
            </div>
            <Divider isBgChange={isBgChange} />
        </div>
    )
}

export default textanimation
