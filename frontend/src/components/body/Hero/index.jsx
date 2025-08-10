import React from 'react'
import LeftColumn from './LeftColumn';
import RightColumn from './RightColumn';

export default function Hero() {
    return (
        <div className='flex flex-col gap-6 lg:gap-0 lg:flex-row bg-gray-800 px-8 pt-8  md:px-16 md:pt-16'>
            <div className='lg:w-[60%] text-white'><LeftColumn /></div>
            <div className='lg:w-[40%] flex flex-col justify-end'><RightColumn /></div>
        </div>
    )
}
