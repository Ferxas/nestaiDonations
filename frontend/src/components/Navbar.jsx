import { Link, useNavigate } from 'react-router-dom';
import { getToken, isAuthenticanted, removeToken, setToken } from '../utils/auth';


const Navbar = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        removeToken();
        navigate('/login');
    }

    return (
        <nav className='bg-blue-600 text-white p-4 flex justify-between'>
            <div className='flex space-x-4'>

                <Link to='/login' className='hover:underline'>Inicio</Link>
                {isAuthenticanted() ? (
                    <>
                        <Link to={"/analysis"} className='hover:underline'>Análisis</Link>
                        <button onClick={handleLogout}>Cerrar sesión</button>
                    </>
                ) : (
                    <>
                        <div className='flex space-x-4'>
                            <Link to={"/login"} className='hover:underline'>Iniciar sesión</Link>
                            <Link to={"/register"} className='hover:underline'>Registrarse</Link>
                        </div>
                    </>
                )}
            </div>
        </nav>
    )
}

export default Navbar