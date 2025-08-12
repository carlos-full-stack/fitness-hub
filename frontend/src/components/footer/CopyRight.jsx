import React from 'react'

const copyRightText = <span>FitnessHub 2025 - <a href="https://github.com/carlos-full-stack" target='_blank'>Carlos</a></span>

export default function CopyRight({ className }) {
    return (
        <div className={`${className} flex flex-col justify-center text-center text-white`}>{copyRightText}</div>
    )
}
