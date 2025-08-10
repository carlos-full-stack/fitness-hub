import React from 'react'

export default function Section({ backgroundColor, children }) {


    return (
        <div className={`${backgroundColor === 'default' ? 'bg-gray-800' : 'bg-primary'} p-8 md:px-16 flex flex-col gap-3`}>
            {children}
        </div >
    )
}
