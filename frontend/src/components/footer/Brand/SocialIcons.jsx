import React from 'react'
import FacebookIcon from './FacebookIcon'
import InstagramIcon from './InstagramIcon'
import YoutubeIcon from './YoutubeIcon'

const socialIcons = [FacebookIcon, InstagramIcon, YoutubeIcon]


export default function SocialIcons({ color }) {

    return (
        <ul className='inline-flex justify-center md:justify-start gap-6'>
            {socialIcons.map((Icon, index) => (<li key={index}><Icon color={`text-${color}`} /></li>))}
        </ul>
    )
}
