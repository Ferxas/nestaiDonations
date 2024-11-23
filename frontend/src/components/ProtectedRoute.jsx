import {Navigate} from 'react-router-dom';
import {isAuthenticanted} from '../utils/auth';

const ProtectedRoute = ({children}) => {
  if (!isAuthenticanted()) {
    return <Navigate to={"/login"} />
  }

  return children;
}   

export default ProtectedRoute;