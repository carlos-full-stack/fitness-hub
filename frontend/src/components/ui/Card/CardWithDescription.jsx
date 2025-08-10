import React from 'react'
import Card from './'

export default function CardWithDescription({ title, subtitle }) {

  const children = <div className='flex flex-col gap-2 p-6'>
    <h3 className='text-xl'>{title}</h3>
    <p>{subtitle}</p>
  </div>

  return (
    <Card children={children} />
  )
}
