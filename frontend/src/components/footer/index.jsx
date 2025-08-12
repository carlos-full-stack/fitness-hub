import React from 'react'
import Brand from './Brand'
import NavLinks from '../NavLinks'
import Legal from './Legal'
import CopyRight from './CopyRight'
import Section from '../ui/Section'

export default function Footer() {
    return (
        <Section backgroundColor='dark'>
            <div className='grid grid-cols-1 grid-rows-3 md:grid-cols-3 md:grid-rows-2 gap-8 md:gap-0'>
                <Brand />
                <div className='flex flex-col gap-2 text-white text-center'>
                    <span className='text-2xl'>Quick links</span>
                    <NavLinks direction='horizontal' textSize='base' />
                </div>
                <Legal />
                <CopyRight className='md:col-span-3' />
            </div>
        </Section>
    )
}
