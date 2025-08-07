import React from 'react'



export default function Heading({ level = 'h1', headingText, eyebrowText, subHeadingText }) {


    return (

        <div className='flex flex-col'>
            {eyebrowText && <span className='text-primary text-sm'>{eyebrowText}</span>}
            {level === 'h1' ? <h1 className=' text-5xl md:text-6xl uppercase'> {headingText}</h1> : <h2> {headingText}</h2>}
            {subHeadingText && <p className='pt-6'>{subHeadingText}</p>}
        </div>

    )
}
