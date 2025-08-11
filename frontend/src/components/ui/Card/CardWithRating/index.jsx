import React from 'react'
import Card from '..'
import Rating from './Rating'

export default function CardWithRating({ rating, feedback, userImgUrl }) {
    const children = <div className='flex flex-col justify-between gap-2 p-6 h-full'>
        <div>
            <Rating stars={rating} />
            <p className='pt-3'>{feedback}</p>
        </div>
        <img width={20} height={20} src={userImgUrl} />
    </div>

    return (
        <Card children={children} bgColor='light' />
    )
}
