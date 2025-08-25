import React from 'react'



export default function Heading({ level = 'h1', id = '', headingText, eyebrowText, subHeadingText = '', textAlign = 'left' }) {


    const headingAlign = textAlign === 'left'
        ? 'text-left'
        : 'text-center';

    return (

        <div className={`${headingAlign} flex flex-col text-white`} id={id}>
            {eyebrowText && <span className='text-primary text-sm py-2'>{eyebrowText}</span>}
            {level === 'h1' ? <h1 className='text-5xl md:text-8xl lg:text-6xl xl:text-8xl uppercase font-Druk tracking-wider leading-10 md:leading-20 lg:leading-12 xl:leading-20'> {headingText}</h1> : <h2 className='text-2xl md:text-5xl uppercase'> {headingText}</h2>}
            {subHeadingText && <p className='pt-6'>{subHeadingText}</p>}
        </div>

    )
}
