import React from 'react'
import Heading from '../../ui/Heading'
import Button from '../../ui/Button';
import Statistics from '../../ui/Statistics';

export default function LeftColumn() {

    const headingText = <div className='pt-2'><div><span>Stronger</span><span className='text-stroke pl-2'>every day</span></div><div className='pt-2'><span>Fitter</span><span className='text-stroke pl-2'>forever</span></div></div>;
    const eyebrowText = 'Sweat today. Shine torrorrow';
    const subHeadingText = 'Where fitness meets inpiration, and every drop of sweat tells a story of deterination.'

    return (
        <>
            <Heading level='h1' headingText={headingText} eyebrowText={eyebrowText} subHeadingText={subHeadingText} />
            <div className="flex flex-row gap-3 pt-6">
                <Button color='primary' text='Get Started' />
                <Button color='secondary' text='How it works' />
            </div>
            <div className='pt-12'>
                <Statistics />
            </div>
        </>
    )
}
