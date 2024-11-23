import { Link, useNavigate } from 'react-router-dom';
import { getToken, isAuthenticanted, removeToken, setToken } from '../utils/auth';


const Navbar = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        removeToken();
        navigate('/login');
    }

    return (
        <nav>
            <Link to='/login'></Link>
            {isAuthenticanted() ? (
                <>
                <Link to={"/analysis"}>Análisis</Link>
                <button onClick={handleLogout}>Cerrar sesión</button>
                </>
            ) : (
                <>
                <Link to={"/login"}>Iniciar sesión</Link>
                <Link to={"/register"}>Registrarse</Link>
                </>
            )}
        </nav>
    )
}

export default Navbar