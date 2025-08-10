import React from 'react'
import Heading from '../../ui/Heading'
import Button from '../../ui/Button';
import Statistics from '../../ui/Statistics';

export default function LeftColumn() {

    return (
        <>
            <Heading
                level='h1'
                headingText={<div><div><span>Stronger</span><span className='text-stroke pl-2'>every day</span></div><div className='pt-2'><span>Fitter</span><span className='text-stroke pl-2'>forever</span></div></div>}
                eyebrowText='Sweat today. Shine torrorrow'
                subHeadingText='Where fitness meets inpiration, and every drop of sweat tells a story of deterination.'
            />
            <div className="flex flex-row gap-3 pt-6">
                <Button color='primary' text='Get Started' />
                <Button color='secondary' text='How it works' />
            </div>
            <div className='py-9'>
                <Statistics />
            </div>
        </>
    )
}
