import React from 'react'



export default function Heading({ level = 'h1', headingText, eyebrowText, subHeadingText }) {


    return (

        <div className='flex flex-col'>
            {eyebrowText && <span className='text-primary text-sm'>{eyebrowText}</span>}
            {level === 'h1' ? <h1 className=' text-6xl md:text-8xl uppercase font-Druk tracking-wider leading-20'> {headingText}</h1> : <h2> {headingText}</h2>}
            {subHeadingText && <p className='pt-6'>{subHeadingText}</p>}
        </div>

    )
}
