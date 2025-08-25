import React from 'react'
import { Link } from 'react-router-dom';

export default function Logo() {
    return (
        <div className='font-Druk text-5xl text-center md:text-start tracking-wide uppercase'>
            <Link to='/'>
                <span className='text-white'>Fitness</span><span className='text-primary'>Hub</span>
            </Link>
        </div>
    )
}
