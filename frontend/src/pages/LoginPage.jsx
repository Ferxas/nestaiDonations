import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FaSignInAlt } from 'react-icons/fa';
import api from '../services/api';
import { isAuthenticated } from '../utils/auth';

const LoginPage = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated()) {
      navigate('/services/analysis');
    }
  }, [navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post('/auth/login', formData);
      localStorage.setItem('token', response.data.access_token);
      toast.success('Inicio de sesión exitoso.');
      navigate('/services/analysis');
    } catch (error) {
      toast.error('Error al iniciar sesión.');
    }
  };

  return (
    <div className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen flex items-center justify-center transition duration-300">
      <div className="bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 p-8 rounded-md shadow-md w-96 transition duration-300">
        <h2 className="text-2xl font-bold text-center mb-6 flex items-center justify-center space-x-2 text-blue-600 dark:text-blue-400">
          <FaSignInAlt />
          <span>Iniciar Sesión</span>
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            name="email"
            placeholder="Correo electrónico"
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
          />
          <input
            type="password"
            name="password"
            placeholder="Contraseña"
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800 transition"
          >
            Iniciar Sesión
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
