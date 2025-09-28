import { Navigate, Outlet  } from "react-router-dom";

import {useAuth} from '../context/AuthProvider'

export default function ProtectedRoutes({ children }) {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />; 
}