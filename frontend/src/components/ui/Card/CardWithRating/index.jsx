import React from 'react'
import Card from '..'
import Rating from './Rating'

export default function CardWithRating({ rating, feedback, userImgUrl, userName, userRole }) {
    const children = <div className='flex flex-col justify-between gap-2 p-7 h-full'>
        <div>
            <Rating stars={rating} />
            <p className='pt-3'>{feedback}</p>
        </div>
        <div className='flex w-full pl-1 gap-2'>
            <img width={20} height={20} src={userImgUrl} />
            <div className='flex flex-col gap-2'>
                <span className='font-bold'>{userName}</span>
                <span>{userRole}</span>
            </div>
        </div>
    </div>

    return (
        <Card children={children} bgColor='light' />
    )
}
