import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import CloseIcon from './CloseIcon'
import NavLinks from '../../NavLinks'
import UserIcon from './UserIcon'
import { useAuth } from '../../../context/AuthContext'


export default function NavMenu() {
  const { user } = useAuth();

  return (
    <Disclosure>
      <DisclosureButton className="flex items-center gap-2 py-2 text-2xl hover:text-gray-200 capitalize cursor-pointer"><UserIcon />{ user && user }</DisclosureButton>
      <DisclosurePanel transition className='fixed z-1 right-0 top-0 border-l border-l-gray-500 opacity-95 h-full w-3/4 sm:w-2/4 md:w-1/4 bg-gray-700 px-6 py-3 transition duration-200 ease-in data-closed:translate-x-full data-closed:opacity-0'>
        <div className="flex w-full justify-end">
          <DisclosureButton className="py-2 cursor-pointer"><CloseIcon /></DisclosureButton>
        </div>
          <NavLinks type='user' />
      </DisclosurePanel>
    </Disclosure>
  )
}
