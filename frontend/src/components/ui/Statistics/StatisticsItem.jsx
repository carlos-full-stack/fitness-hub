import React from 'react'

export default function StatisticsItem({ number, text }) {
    return (
        <div className='flex flex-col gap-2'>
            {number && <span className='text-3xl md:text-5xl lg:text-3xl xl:text-5xl text-stroke'>{number}</span>}
            {text && <span className='text-lg capitalize'>{text}</span>}
        </div>
    )
}
