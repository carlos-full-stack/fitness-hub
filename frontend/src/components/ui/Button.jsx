import React from 'react'

export default function Button({ text, color = 'primary', type = 'button' }) {

    const baseClasses = 'capitalize cursor-pointer py-2 px-6 rounded-sm';

    const buttonColors = {
        primary: 'text-gray-800 bg-primary',
        light: 'text-white bg-gray-700',
        dark: 'text-white bg-gray-800',
        transparent: 'text-white bg-transparent border border-white'
    }

    const variantClasses = buttonColors[color];

    return (
        <button type={type} className={`${baseClasses} ${variantClasses}`}> {text}</ button >
    )
}
