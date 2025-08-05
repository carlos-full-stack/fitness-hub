import React from 'react'



export default function Heading({ level = 'h1', headingText, eyebrowText = false, subHeadingText }) {


    return (

        <div className='flex flex-col'>
            {eyebrowText && <span>{eyebrowText}</span>}
            {level === 'h1' ? <h1> {headingText}</h1> : <h2> {headingText}</h2>}
            {subHeadingText && <p>{eyebrowText}</p>}
        </div>

    )
}
