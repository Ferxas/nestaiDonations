import React, {useState} from 'react'
import api from '../services/api';

const RegisterPage = () => {
    const [formData, setFormData] = useState({name: '', email: '', password: ''});

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData((prev) => ({...prev, [name]: value}));
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
            await api.post('/auth/register', formData);
            alert("Registro exitoso. Por favor inicia sesión");
        } catch (error) {
            alert("Error en el registro");
            console.error(error.message);
        }
    };

  return (
    <div>
        <h2>Registro</h2>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Nombre" name="name" value={formData.name} onChange={handleChange} required />
            <input type="email" placeholder="Correo electrónico" name="email" value={formData.email} onChange={handleChange} required />
            <input type="password" placeholder="Contraseña" name="password" value={formData.password} onChange={handleChange} required />

            <button type="submit">Registrarse</button>
        </form>
    </div>
  )
}

export default RegisterPage