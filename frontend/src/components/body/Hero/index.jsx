import React from 'react'
import LeftColumn from './LeftColumn';
import RightColumn from './RightColumn';

export default function Hero() {
    return ( 
        <div className='flex flex-col gap-6 lg:gap-0 lg:flex-row bg-gray-800 pt-16'>
            <div className='lg:w-1/2 text-white pl-16'><LeftColumn /></div>
            <div className='lg:w-1/2'><RightColumn /></div>
        </div>
    )
}
