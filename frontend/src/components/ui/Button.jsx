import React from 'react'

export default function Button({ text, color = 'primary' }) {

    const baseClasses = 'capitalize py-2 px-6 rounded-sm';

    const variantClasses = color === 'primary'
        ? 'text-gray-800 bg-primary'
        : 'text-white bg-transparent border border-white';

    return (
        <button className={`${baseClasses} ${variantClasses}`}> {text}</ button >
    )
}
