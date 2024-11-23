import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';
import { setToken } from '../utils/auth'


const LoginPage = () => {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await api.post('/auth/login', formData);
            setToken(response.data.access_token);
            navigate('/analysis');
        } catch (error) {
            alert("An error occurred")
            console.error(error);
        }
    }

    return (
        <div className='flex justify-center items-center h-screen bg-gray-100'>
            <div className='p-8 bg-white shadow-md rounded-md w-96'>
                <h2 className='text-2xl font-bold mb-6'>Iniciar sesión</h2>
                <form onSubmit={handleSubmit} className='space-y-4'>
                    <input type="email" name='email' onChange={handleChange} placeholder='E-mail' required className='w-full p-2 border border-gray-300 rounded-md' />
                    <input type="password" name='password' onChange={handleChange} placeholder='Contraseña' required className='w-full p-2 border border-gray-300 rounded-md' />
                    <button type='submit' className='w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700'>Iniciar sesión</button>
                </form>
            </div>
        </div>
    )
}

export default LoginPage