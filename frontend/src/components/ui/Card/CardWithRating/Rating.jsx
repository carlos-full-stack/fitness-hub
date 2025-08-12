import React from 'react'
import StarIcon from './StarIcon'

export default function Rating({ stars }) {

    return (
        <div className='flex gap-1'>
            {Array.from({ length: stars }).map((_, index) => (
                <span key={index}><StarIcon /></span>
            ))}
        </div>
    )
}
