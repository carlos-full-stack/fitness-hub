import React from 'react'
import Card from './index'

export default function CardWithImage({ variant = 'image', bgUrl = 'none', text = '' }) {

    const children = <span className='absolute left-[20px] bottom-[20px] font-Druk uppercase text-3xl text-white tracking-wider text-shadow-lg'>{text}</span>

    return (
        <Card variant='image' bgUrl={bgUrl} children={children} />
    )
}
