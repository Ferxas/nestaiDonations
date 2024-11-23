import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';
import { setToken } from '../utils/auth'


const LoginPage = () => {
    const [formData, setFormData] = useState({email: '', password: ''});
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({...prev, [name]: value}));
    }

    const handleSubmit = async(e) => {
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
        <div>
            <h2>Iniciar sesión</h2>
            <form onSubmit={handleSubmit}>
                <input type="email" name='email' onChange={handleChange} placeholder='E-mail' required  />
                <input type="password" name='password' onChange={handleChange} placeholder='Contraseña' required />
                <button type='submit'>Iniciar sesión</button>
            </form>
        </div>
    )
}

export default LoginPage