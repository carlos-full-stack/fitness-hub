import React from 'react'
import LeftColumn from './LeftColumn';
import RightColumn from './RightColumn';

export default function Hero() {
    return (
        <div className='flex flex-col gap-6 lg:gap-0 lg:flex-row bg-gradient px-8 pt-8  md:px-16 md:pt-16 bg-gradient-to-r from-gray-800 to-gray-700'>
            <div className='lg:w-[60%] text-white'><LeftColumn /></div>
            <div className='lg:w-[40%] flex flex-col justify-end'><RightColumn /></div>
        </div >
    )
}
