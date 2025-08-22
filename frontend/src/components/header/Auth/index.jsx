import Button from '../../ui/Button';
import Login from './Login';
import Signup from './Signup'

export default function Auth() {

    return (
        <div className='flex items-center gap-6'>
            <Login />
            <Signup />
        </div>
    )
}
