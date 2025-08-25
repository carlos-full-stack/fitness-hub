import React from 'react'
import Brand from './Brand'
import NavLinks from '../NavLinks'
import Legal from './Legal'
import CopyRight from './CopyRight'
import Section from '../ui/Section'

export default function Footer() {
    return (
        <Section className='pb-0' backgroundColor='dark'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0'>
                <Brand />
                <div className='flex flex-col gap-4 text-white text-center'>
                    <span className='text-2xl'>Quick links</span>
                    <NavLinks type='page' />
                </div>
                <Legal />
                <CopyRight className='md:col-span-3 md:mt-[20px] py-4' />
            </div>
        </Section>
    )
}
