import React from 'react'
import Logo from './Logo';
import NavMenu from './NavMenu';
import Button from '../ui/Button';

export default function Header() {
    return (
        <div className='flex justify-between items-center px-5 h-16 bg-gray-600 text-white flex-shrink-0'>
            <Logo />
            <NavMenu />
            <Button color='primary' text='Login' />
        </div>
    )
}
