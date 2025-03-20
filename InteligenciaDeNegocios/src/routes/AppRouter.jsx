import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from '../context/AuthContext';
import Login from '../components/Login';
import Home from '../components/Home';

const PrivateRoute = ({ children }) => {
    const { isAuthenticated } = useAuth();
    return isAuthenticated ? children : <Navigate to="/login" />;
};

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<PrivateRoute><Home /></PrivateRoute>} />
            <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
    );
};

export default AppRouter;
