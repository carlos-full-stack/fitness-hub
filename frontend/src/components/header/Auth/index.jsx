import Button from '../../ui/Button';
import Login from './Login';
import Register from './Register';

export default function Auth() {

    return (
        <div className='flex items-center gap-6'>
            <Login />
            <Register />
        </div>
    )
}
