import React, { useState } from 'react'
import styles from './card.module.css'


export default function Card({ bgUrl = 'none', children = null }) {

    const backgroundImage = bgUrl !== 'none'
        ? `url(${bgUrl})`
        : 'none';

    return (
        <div style={{ backgroundImage: ` ${backgroundImage}`, backgroundSize: 'cover' }} className={`${styles.cardBaseShape} h-[350px] relative`}>
            {children}
        </div >
    )
}
