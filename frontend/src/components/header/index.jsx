import Logo from './Logo';
import NavMenu from './NavMenu';
import Auth from './Auth'
import { useAuth } from '../../context/AuthContext';

export default function Header() {

    const { user } = useAuth();

    return (
        <div className='flex justify-between items-center px-8 md:px-14 h-20 bg-gray-600 text-white flex-shrink-0'>
            <Logo />
            <div className='flex items-center gap-6'>
                 {!user ? <Auth /> : <NavMenu />}
            </div>
        </div>
    )
}
