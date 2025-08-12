import React from 'react'
import FacebookIcon from './FacebookIcon'
import InstagramIcon from './InstagramIcon'
import YoutubeIcon from './YoutubeIcon'
import Logo from '../../header/Logo'
import SocialIcons from './SocialIcons'


export default function Brand() {
    return (
        <div className='flex flex-col gap-5'>
            <Logo />
            <SocialIcons color='white' />
        </div>
    )
}
