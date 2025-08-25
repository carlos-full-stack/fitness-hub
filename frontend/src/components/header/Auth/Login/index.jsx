import { useState } from 'react'
import { Description, Dialog, DialogPanel, DialogTitle } from '@headlessui/react';
import LoginForm from './LoginForm'
import SuccessIcon from './SuccessIcon';

const loginFormFields = [

    { id: 1, type: 'email', name: 'email', label: 'Email',  placeholder: 'Enter your email' },
    { id: 2, type: 'password', name: 'password', label: 'Password', placeholder: 'Enter your password' },

]

export default function Login() {

    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [loginState, setLoginState] = useState('initial');

    const closeDialogWithDelay = () => {
    setTimeout(() => setIsDialogOpen(false), 2000);
    }


    return (
        <>
            <span className="hover:text-primary cursor-pointer" onClick={() => setIsDialogOpen(true)}>Login</span>
            <Dialog open={isDialogOpen} onClose={() => setIsDialogOpen(false)} className="relative z-50">
                <div className="fixed inset-0 bg-black opacity-50" aria-hidden="true" />
                <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
                    <DialogPanel className="max-w-lg space-y-4 border bg-white opacity-100 p-12">
                    {(loginState === 'initial' || loginState === 'error') &&
                    <>
                    <DialogTitle className="text-5xl text-gray-800 font-Druk tracking-wide uppercase">Welcome back!</DialogTitle>
                    <Description>Please enter your credentials</Description>
                    <LoginForm loginFormFields={loginFormFields} onLoginResult={setLoginState} onLoginSuccess={closeDialogWithDelay} />
                    </>}

                    {loginState === 'success' && <div className='flex items-center w-full gap-3 text-3xl'> <SuccessIcon /><span>You got it!</span></div>}
                    </DialogPanel>
                </div>
            </Dialog >
        </>
    )
}
