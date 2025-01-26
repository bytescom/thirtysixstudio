import React from 'react'
import Divider from './divider'

const textanimation = ({isBgChange}) => {
    return (
        <div>
            <Divider isBgChange={isBgChange} />
            <div className='flex justify-start items-center gap-[26rem]'>
                <div className='text-[11.2vw] ml-6'>Agile</div>
                <div className='flex flex-col w-[25%]'>
                    <p className='tracking-tight leading-tight'>
                        We live and breathe efficiency and are not limited by geography. Based in Amsterdam with hubs in London, Paris, Johannesburg, New York, and beyond, we curate the right team for each project and get moving swiftly.
                    </p>
                </div>
            </div>
            <Divider isBgChange={isBgChange} />
            <div className='flex justify-start items-center gap-12'>
                <div className='text-[11.2vw] ml-4'>Innovative</div>
                <div className='flex flex-col w-[25%]'>
                    <p className='tracking-tight leading-tight'>
                        We use innovative digital processes and technology to ensure our initiatives run smoothly, allowing our young, lean, and international team to focus on what matters and maximize momentum and opportunity.
                    </p>
                </div>
            </div>
            <Divider isBgChange={isBgChange} />
            <div className='flex justify-start items-center gap-[10.5rem]'>
                <div className='text-[11.2vw] ml-5'>Cultured</div>
                <div className='flex flex-col w-[25%]'>
                    <p className='tracking-tight leading-tight'>
                        We are progressive and community-focused, and don’t believe in maintaining the status quo or sticking to the old way. Our people reflect today’s realities and stay connected to culture.
                    </p>
                </div>
            </div>
            <Divider isBgChange={isBgChange} />
        </div>
    )
}

export default textanimation
