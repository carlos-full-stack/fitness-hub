import React from 'react'

export default function StatisticsItem({ number, text }) {
    return (
        <div className='flex flex-col gap-2'>
            {number && <span className='text-5xl text-stroke'>{number}</span>}
            {text && <span className='text-lg capitalize'>{text}</span>}
        </div>
    )
}
