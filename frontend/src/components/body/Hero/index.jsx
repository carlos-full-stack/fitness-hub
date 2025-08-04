import React from 'react'
import LeftColumn from './LeftColumn';
import RightColumn from './RightColumn';

export default function Hero() {
    return (
        <div className='flex flex-col lg:flex-row bg-gray-800 pt-16'>
            <div className='lg:w-1/2 text-center text-white'><LeftColumn /></div>
            <div className='lg:w-1/2 text-center'><RightColumn /></div>
        </div>
    )
}
