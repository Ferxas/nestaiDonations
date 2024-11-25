
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import api from '../services/api';

const RegisterPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post('/auth/register', formData);
      toast.success('¡Registro exitoso! Por favor, inicia sesión.');
      navigate('/login');
    } catch (error) {
      toast.error('Error al registrarse. Intenta nuevamente.');
      console.error(error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition duration-300">
      <div className="p-8 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 shadow-md rounded-md w-96 transition duration-300">
        <h2 className="text-2xl font-bold mb-6 text-center">Registro</h2>
        <p className="text-sm text-gray-600 dark:text-gray-400 m-5">
          Regístrate para ver las estadísticas y donar.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Nombre completo"
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
          />
          <input
            type="email"
            name="email"
            placeholder="Correo electrónico"
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
          />
          <input
            type="password"
            name="password"
            placeholder="Contraseña"
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800 transition"
          >
            Registrarse
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;

