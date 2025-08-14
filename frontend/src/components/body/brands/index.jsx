import React from 'react'

const brands = [
    { id: 'brand-1', name: 'ELEIKO', url: 'img/gym-brands/ELEIKO.png' },
    { id: 'brand-2', name: 'gym80', url: 'img/gym-brands/gym80-1.png' },
    { id: 'brand-3', name: 'HAMMER', url: 'img/gym-brands/HAMMER.png' },
    { id: 'brand-4', name: 'Technogym', url: 'img/gym-brands/Technogym.png' },
]

export default function Brands() {
    return (
        <div className='flex flex-row gap-4 justify-center bg-primary w-full p-4'>
            <ul className='inline-flex flex-wrap gap-x-12 gap-y-3 justify-center'>
                {brands.map((brand) => (
                    <li key={brand.id}>
                        <img src={brand.url} alt={brand.name} className='w-24 h-auto' />
                    </li>

                ))}
            </ul>
        </div>
    )
}
