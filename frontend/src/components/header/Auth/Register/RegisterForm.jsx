import { useState } from 'react'
import axios from 'axios';
import Button from '../../../ui/Button';
import { useAuth } from '../../../../context/AuthContext';


export default function RegisterForm({ registerFormFields, onRegisterResult, onRegisterSuccess }) {
    
    const [formValues, setFormValues] = useState({});
    const [registerErrors, setRegisterErrors] = useState({});

    const { login } = useAuth();
    
    const handleImputChange = (e) => {
        setFormValues({...formValues, [e.target.name]: e.target.value });
    } 

    const handleSubmit = async (event) => {
        
        event.preventDefault();
        
        try {

            const response = await axios.post('/api/register', formValues)

            if (response.data && response.data.user)  {
                onRegisterResult('success');
                onRegisterSuccess();

            setTimeout(() => {
                login(response.data.user)
            }, 2000);
            }
            
        } catch (error) {

            const fieldErrors = error.response.data.errors;

            onRegisterResult('error');
            fieldErrors && setRegisterErrors(fieldErrors);
        }
    }
    

    return (
        <form onSubmit={handleSubmit} className='grid grid-cols-2 justify-center gap-3'>
            {registerFormFields.map((field, index) => (
                <div key={index} className={`flex flex-col w-full md:size-auto ${field.id === 3? 'col-span-2' : '' } `}>
                    <label htmlFor={field.id}>{field.label}</label>
                    <input
                        type={field.type}
                        name={field.name}
                        placeholder={field.placeholder}
                        value={formValues[field.name] || ''}
                        onChange={handleImputChange}
                        className={`w-full md:size-auto border ${registerErrors[field.name] ? 'border-red-500' : 'border-gray-800'} py-2 pr-3 pl-2 focus:outline-none`} />
                <span className="text-sm pt-2">{registerErrors[field.name] && registerErrors[field.name][0]}</span>
                </div>
            ))}
            <div className='pt-3'>
                <Button text='Send' color='dark' type='submit' />
            </div>
        </form>
    )
}
