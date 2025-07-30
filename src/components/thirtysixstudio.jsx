import React from 'react'

const Thirtysixstudio = ({ clickText, handleClick }) => {
    return (
        <div>
            <div
                ref={clickText}
                onClick={handleClick}
            >
                {/* for small devices */}
                <div className='text-[5.5rem] md:text-[8.5rem] text-start cursor-pointer select-none tracking-[-0.02em] leading-[0.8] px-3 block lg:hidden'>
                    <div>Thirty</div>
                    <div className='flex items-center'>
                        six
                        <img
                            src='/pepper.png'
                            alt='pepper'
                            className='w-32 h-32'
                        />
                    </div>
                    <div>studio</div>
                </div>

                {/* for desktop */}
                <div 
                className='text-[15vw] text-center cursor-pointer select-none hidden lg:block'
                style={{
                    cursor: `url('/pepper.png') 48 48, pointer`
                }}
                >
                    Thirtysixstudio
                </div>
            </div>
        </div>
    )
}

export default Thirtysixstudio
