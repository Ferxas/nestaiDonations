import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import {
    FaMoon,
    FaSun,
    FaBars,
    FaTimes,
    FaSignInAlt,
    FaSignOutAlt,
    FaHome,
    FaChartBar,
    FaRobot,
    FaBullhorn,
} from 'react-icons/fa';
import { PiStrategy } from 'react-icons/pi'
import { ThemeContext } from '../context/ThemeContext';
import { removeToken, isAuthenticated } from '../utils/auth';

const Navbar = () => {
    const navigate = useNavigate();
    const { theme, toggleTheme } = useContext(ThemeContext);
    const [showServicesMenu, setShowServicesMenu] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    const handleLogout = () => {
        removeToken();
        toast.success('Cierre de sesión exitoso.');
        navigate('/login');
    };

    const toggleMenu = () => setMenuOpen(!menuOpen);

    return (
        <nav className="bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 p-4 shadow-md fixed top-0 w-full z-50 transition duration-300">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo / Inicio */}
                <div>
                    <Link to="/" className="text-xl font-bold flex items-center space-x-2 hover:underline">
                        <FaHome />
                        <span>Inicio</span>
                    </Link>
                </div>

                {/* Menú de Escritorio */}
                <div className="hidden md:flex space-x-4 items-center">
                    {isAuthenticated() && (
                        <div className="relative">
                            <button
                                onClick={() => setShowServicesMenu(!showServicesMenu)}
                                className="hover:underline flex items-center space-x-2"
                            >
                                <FaChartBar />
                                <span>Servicios</span>
                            </button>
                            <div
                                className={`absolute bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 mt-2 p-2 rounded-md shadow-md transition-all duration-300 ease-in-out transform ${showServicesMenu ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                                    }`}
                            >
                                <Link
                                    to="/services/analysis"
                                    className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-md flex items-center space-x-2"
                                    onClick={() => setShowServicesMenu(false)}
                                >
                                    <FaChartBar />
                                    <span>Análisis</span>
                                </Link>
                                <Link
                                    to="/services/ai"
                                    className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-md flex items-center space-x-2"
                                    onClick={() => setShowServicesMenu(false)}
                                >
                                    <FaRobot />
                                    <span>Inteligencia Artificial</span>
                                </Link>
                                <Link
                                    to="/services/digital-marketing"
                                    className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-md flex items-center space-x-2"
                                    onClick={() => setShowServicesMenu(false)}
                                >
                                    <FaBullhorn />
                                    <span>Marketing Digital</span>
                                </Link>
                                <Link
                                    to="/services/digital-strategy"
                                    className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-md flex items-center space-x-2"
                                    onClick={() => setShowServicesMenu(false)}
                                >
                                    <PiStrategy />
                                    <span>Estrategia Digital</span>
                                </Link>
                            </div>
                        </div>
                    )}
                    <button
                        onClick={toggleTheme}
                        className="hover:underline flex items-center space-x-2"
                    >
                        {theme === 'dark' ? (
                            <>
                                <FaSun className="text-yellow-500" />
                                <span>Modo Claro</span>
                            </>
                        ) : (
                            <>
                                <FaMoon className="text-gray-300" />
                                <span>Modo Oscuro</span>
                            </>
                        )}
                    </button>
                    {!isAuthenticated() ? (
                        <>
                            <Link to="/login" className="hover:underline flex items-center space-x-2">
                                <FaSignInAlt />
                                <span>Iniciar Sesión</span>
                            </Link>
                        </>
                    ) : (
                        <button onClick={handleLogout} className="hover:underline flex items-center space-x-2">
                            <FaSignOutAlt />
                            <span>Cerrar Sesión</span>
                        </button>
                    )}
                </div>

                {/* Menú Hamburguesa */}
                <button className="md:hidden" onClick={toggleMenu}>
                    {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                </button>
            </div>

            {/* Menú Móvil */}
            {menuOpen && (
                <div className="md:hidden bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 p-4 space-y-4 shadow-md">
                    {isAuthenticated() && (
                        <>
                            <Link to="/services/analysis" className="block hover:underline flex items-center space-x-2">
                                <FaChartBar />
                                <span>Análisis</span>
                            </Link>
                            <Link to="/services/ai" className="block hover:underline flex items-center space-x-2">
                                <FaRobot />
                                <span>Inteligencia Artificial</span>
                            </Link>
                            <Link to="/services/digital-marketing" className="block hover:underline flex items-center space-x-2">
                                <FaBullhorn />
                                <span>Marketing Digital</span>
                            </Link>
                            <Link to="/services/digital-strategy" className="block hover:underline flex items-center space-x-2">
                                <PiStrategy />
                                <span>Estrategia Digital</span>
                            </Link>
                        </>
                    )}
                    <button
                        onClick={toggleTheme}
                        className="hover:underline flex items-center space-x-2"
                    >
                        {theme === 'dark' ? (
                            <>
                                <FaSun className="text-yellow-500" />
                                <span>Modo Claro</span>
                            </>
                        ) : (
                            <>
                                <FaMoon className="text-gray-300" />
                                <span>Modo Oscuro</span>
                            </>
                        )}
                    </button>
                    {!isAuthenticated() ? (
                        <Link to="/login" className="hover:underline flex items-center space-x-2">
                            <FaSignInAlt />
                            <span>Iniciar Sesión</span>
                        </Link>
                    ) : (
                        <button onClick={handleLogout} className="hover:underline flex items-center space-x-2">
                            <FaSignOutAlt />
                            <span>Cerrar Sesión</span>
                        </button>
                    )}
                </div>
            )}
        </nav>
    );
};

export default Navbar;