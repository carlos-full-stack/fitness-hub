import React from 'react'

export default function Section({ backgroundColor = 'default', children }) {

    const backgroundClasses = {
        light: 'bg-gray-700',
        dark: 'bg-gray-800',
        default: 'bg-gray-800'
    }

    const bgColor = backgroundClasses[backgroundColor]

    return (
        <div className={`${bgColor} p-8 md:px-16 flex flex-col gap-3`}>
            {children}
        </div >
    )
}
