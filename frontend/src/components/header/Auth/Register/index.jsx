import {useState } from 'react'
import { Dialog, DialogPanel, DialogTitle, Description } from '@headlessui/react'
import Button from '../../../ui/Button';
import RegisterForm from './RegisterForm';
import SuccessIcon from '../Login/SuccessIcon';


const registerFormFields = [
    {id: 1, type: 'text', name: 'name', label:'Name', placeholder: 'Enter your name'},
    {id: 2, type: 'text', name: 'last_name', label:'Last name', placeholder: 'Enter your last name'},
    {id: 3, type: 'email', name: 'email', label:'Email', placeholder: 'Enter your e-mail'},
    {id: 4, type: 'password', name: 'password', label:'Password', placeholder: 'Enter your password'},
    {id: 5, type: 'password', name: 'password_confirmation', label:'Repeat password', placeholder: 'Re-enter your password'},
]

export default function Register() {

    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [registerState, setRegisterState] = useState('initial');

    const closeDialogWithDelay = () => {
        setTimeout(() => setIsDialogOpen(false), 2000);
    }

    return (
        <>
            <Button text='Sign up' onClick={() => setIsDialogOpen(true)} />
            <Dialog open={isDialogOpen} onClose={() => setIsDialogOpen(false)} className="relative z-50">
                <div className="fixed inset-0 bg-black opacity-50" aria-hidden="true" />
                <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
                    <DialogPanel className="max-w-lg space-y-4 border bg-white opacity-100 p-12">
                    {(registerState === 'initial' || registerState === 'error') &&
                    <>
                    <DialogTitle className="text-5xl text-gray-800 font-Druk tracking-wide uppercase">Join us</DialogTitle>
                    <Description>Please complete the form:</Description>
                    <RegisterForm registerFormFields={registerFormFields} onRegisterResult={setRegisterState} onRegisterSuccess={closeDialogWithDelay} />
                    </>}

                    {registerState === 'success' && <div className='flex items-center w-full gap-3 text-3xl'> <SuccessIcon /><span>You got it!</span></div>}
                    </DialogPanel>
                </div>
            </Dialog >

        </>
    )
}
