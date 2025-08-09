import React from 'react'
import Card from './index'

// const cardImages = [
//     { id: 1, bgUrl: 'url.jpg' },
//     { id: 1, bgUrl: 'url.jpg' },
//     { id: 1, bgUrl: 'url.jpg' }
// ]

export default function CardWithImage({ bgUrl }) {
    return (
        <Card bgUrl={bgUrl} />
    )
}
