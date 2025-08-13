import React from 'react'

const navigationLinks = [
    { id: 1, text: 'Home', url: '#' },
    { id: 2, text: 'Plans', url: '#' },
    { id: 3, text: 'Articles', url: '#' },
    { id: 3, text: 'Suscribe', url: '#' },
]

export default function NavLinks({ direction, textSize }) {


    const directionClasses = {
        horizontal: 'flex-col lg:flex-row',
        vertical: 'flex-col'
    }

    const sizeClasses = {
        base: 'text-base',
        xl: 'text-5xl'
    }

    return (
        <ul className={`flex ${directionClasses[direction]} gap-3 text-white justify-center`}>
            {
                navigationLinks.map((item, index) =>
                    <li key={index}><a className={sizeClasses[textSize]} href={item.url}>{item.text}</a></li>
                )
            }
        </ ul>
    )
}
