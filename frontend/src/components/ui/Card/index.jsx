import React, { useState } from 'react'
import styles from './card.module.css'


export default function Card({ bgUrl = 'none', bgColor = 'default', children = null }) {

    const backgroundImage = bgUrl !== 'none'
        ? `url(${bgUrl})`
        : 'none';

    const bgColorClasses = {
        light: 'bg-gray-700',
        dark: 'bg-gray-800',
        primary: 'bg-primary',
        default: 'bg-gray-800'
    }

    const CardBgColor = bgColorClasses[bgColor]

    const textColor = bgColor !== 'primary'
        ? 'text-white'
        : 'text-black'

    return (
        <div style={{ backgroundImage: ` ${backgroundImage}`, backgroundSize: 'cover' }} className={`${styles.cardBaseShape} ${CardBgColor} ${textColor} md:h-[350px] relative`}>
            {children}
        </div >
    )
}
