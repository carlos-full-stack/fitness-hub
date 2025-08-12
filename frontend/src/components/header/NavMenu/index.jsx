import React from 'react'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import MenuIcon from './MenuIcon'
import CloseIcon from './CloseIcon'
import NavLinks from '../../NavLinks'

export default function NavMenu() {
  return (
    <Disclosure>
      <DisclosureButton className="py-2"><MenuIcon /></DisclosureButton>
      <DisclosurePanel transition className='fixed z-1 right-0 top-0 opacity-95 h-full w-3/4 sm:w-2/4 md:w-1/4 bg-gray-700 px-6 py-3 transition duration-200 ease-in data-closed:translate-x-full data-closed:opacity-0'>
        <div className="flex w-full justify-end">
          <DisclosureButton className="py-2"><CloseIcon /></DisclosureButton>
        </div>
        <ul className='flex flex-col gap-4 p-3 text-white'>
          <NavLinks direction='vertical' textSize='xl' />
        </ul>
      </DisclosurePanel>
    </Disclosure>
  )
}
