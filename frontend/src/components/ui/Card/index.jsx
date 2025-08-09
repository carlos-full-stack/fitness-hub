import React, { useState } from 'react'
import styles from './Card.module.css'



export default function Card({ full = false, bgUrl }) {

    return (
        <div style={{ backgroundImage: `url(${bgUrl})` }} className={`${styles.cardBaseShapev} ${full && 'w-full'}`}>
        </div >
    )
}
