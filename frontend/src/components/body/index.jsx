import React from 'react'
import Hero from './Hero'
import Brands from './brands'
import Section from '../ui/Section'
import Heading from '../ui/Heading'
import CardGallery from '../ui/Card/CardGallery'
import Card from '../ui/Card'
import CardWithImage from '../ui/Card/CardWithImage'

const section1cards = [

    { id: 1, bgUrl: 'img/slider/1.png', text: 'Strength' },
    { id: 2, bgUrl: 'img/slider/2.png', text: 'Build' },
    { id: 3, bgUrl: 'img/slider/3.png', text: 'Endurance' }
]
const section2cards = [

    { id: 1, icon: 'Dumbbell', title: 'CUTTING-EDGE EQUIPMENT', subtitle: 'A top-notch gym should boast a diverse array of cutting-edge fitness equipment catering to various workout styles.' },
    { id: 2, icon: 'Dumbbell', title: 'XPERT GUIDANCE AND PERSONALIZED', subtitle: 'A top-notch gym should boast a diverse array of cutting-edge fitness equipment catering to various workout styles.' },
    { id: 3, icon: 'Dumbbell', title: 'ATMOSPHERE AND COMMUNITY', subtitle: 'A top-notch gym should boast a diverse array of cutting-edge fitness equipment catering to various workout styles.' },
    { id: 4, icon: 'Dumbbell', title: 'XPERT GUIDANCE AND PERSONALIZED', subtitle: 'A top-notch gym should boast a diverse array of cutting-edge fitness equipment catering to various workout styles.' },
]

export default function Body() {
    return (
        <>
            <Hero />
            <Brands />
            <Section backgroundColor='default'>
                <Heading
                    eyebrowText='Our Featured'
                    headingText={<div><div><span className='text-stroke'>Transform</span> your body</div><div>Transform <span className='text-stroke'>your life</span></div></div>}
                    level='h2'
                    textAlign='center' />
                <CardGallery type='image' cards={section1cards} />
            </Section>
            <Section backgroundColor='default'>
                <div className='flex flex-col md:flex-row'>
                    <div className='md:flex-[60%]'>
                        <Heading
                            eyebrowText='Our Featured'
                            headingText={<div><div><span className='text-stroke'>Elevate</span> your fitness</div><div>journey <span className='text-stroke'>with us</span></div></div>}
                            level='h2'
                            textAlign='left'
                        />
                    </div>
                    <p className='md:flex-[40%] pt-2 text-white'>Step into a community dedicated to transforming bodies and lives. At FitnessHub, we believe in the power of your journey, and our state-of-the-art facilities are here to support you every step, lift, and sprint of the way. From invigorating group classes to personalized training programs, we cater to all fitness levels, making wellness accessible and enjoyable.</p>
                </div>
                <div className='pt-8'>
                    <CardWithImage bgUrl='img/banner.png' />
                </div>
            </Section>
            <Section backgroundColor='default'>
                <Heading
                    eyebrowText='Why choose us'
                    headingText={<div><div><span className='text-stroke'>Fuel</span> your ambition</div><div>Ignite <span className='text-stroke'>your passion</span></div></div>}
                    level='h2'
                    textAlign='center' />
                <CardGallery type='description' cards={section2cards} />
            </Section>
        </>
    )
}
