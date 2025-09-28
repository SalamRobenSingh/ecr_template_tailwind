import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import Settings from "../pages/Settings";
import ProtectedRoutes from "./ProtectedRoutes";
import MainLayout from "../layouts/MainLayout";

export default function AppRoutes() {
  return (
        <Routes>
          {/* Public Routes */}
          <Route path="/login" element={<Login />} />

          {/* Protected Routes */}
          <Route element={<ProtectedRoutes />}>
            <Route element={<MainLayout />}>
                <Route path="/" element={<Dashboard />} />
                <Route path="/settings" element={<Settings />} />
            </Route>
          </Route>
        </Routes>
  );
}
