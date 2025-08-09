import React from 'react'

const brands = [
    { id: 'brand-1', name: 'x', url: '/img' },
    { id: 'brand-2', name: 'y', url: '/img' },
    { id: 'brand-3', name: 'z', url: '/img' },
    { id: 'brand-4', name: 'n', url: '/img' },
]

export default function Brands() {
    return (
        <div className='flex flex-row gap-4 justify-center bg-primary w-full p-4'>
            <ul className='inline-flex flex-wrap gap-2'>
                {brands.map((brand) => (
                    <li key={brand.id}>
                        <img src={brand.url} alt={brand.name} />
                    </li>

                ))}
            </ul>
        </div>
    )
}
