import React from 'react'
import Heading from '../../ui/Heading'

export default function LeftColumn() {

    const headingText = <div className='pt-2'><span>Stronger</span><br /><span className='text-stroke'>every day</span><br /><span>Fitter</span><br /><span className='text-stroke'>forever</span></div>;
    const eyebrowText = 'Sweat today. Shine torrorrow';
    const subHeadingText = 'Where fitness meets inpiration, and every drop of sweat tells a story of deterination.'

    return (
        <Heading level='h1' headingText={headingText} eyebrowText={eyebrowText} subHeadingText={subHeadingText} />
    )
}
