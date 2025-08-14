import React from 'react'
import Card from '..'

export default function CardWithDescription({ title, subtitle, Icon }) {

  const children = <div className='flex flex-col gap-2 p-6'>
    <Icon />
    <h3 className='text-xl'>{title}</h3>
    <p>{subtitle}</p>
  </div>

  return (
    <Card children={children} bgColor='primary' />
  )
}
