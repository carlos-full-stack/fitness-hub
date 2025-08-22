import { useState } from 'react';
import Button from '../../../ui/Button';
import axios from 'axios';


export default function LoginForm({ loginFormFields, onLoginResult = 'initial', onLoginSuccess }) {
    
    const [formValues, setFormValues] = useState({});
    const [fieldErrors, setFieldErrors] = useState({});
    
    const handleImputChange = (e) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post('api/login', formValues)

            if (response.data && response.data.token) {
                onLoginResult('success');
                onLoginSuccess();
            }

        } catch (error) {

            const fieldErrors = error.response.data.errors;

            onLoginResult('error');
            fieldErrors && setFieldErrors(fieldErrors);

        }
    }


    return (
        <form onSubmit={handleSubmit} className='flex flex-col justify-center gap-3'>
            {loginFormFields.map((field, index) => (
                <div key={index} className=' flex flex-col w-full md:size-auto'>
                    <label htmlFor={field.name}></label>
                    <input
                        type={field.type}
                        name={field.name}
                        placeholder={field.placeholder}
                        value={formValues[field.name] || ''}
                        onChange={handleImputChange}
                        className={`w-full md:size-auto border ${fieldErrors[field.name] ? 'border-red-500' : 'border-gray-800'} py-2 pr-3 pl-2 focus:outline-none`} />
                    <span className="text-sm pt-2">{fieldErrors[field.name] && fieldErrors[field.name][0]}</span>
                </div>
            ))}
            <div className='pt-3'>
                <Button text='Login' color='dark' type='submit' />
            </div>
        </form>
    )
}
