import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ProtectedRoute from './components/ProtectedRoute';
import AnalysisPage from './pages/AnalysisPage';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route
        path='/analysis'
        element={<ProtectedRoute>
          <AnalysisPage />
          </ProtectedRoute>
        }
        />
      </Routes>
    </Router>
  )
}

export default App