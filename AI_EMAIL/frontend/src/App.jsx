import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { AuthProvider } from "./context/auth.jsx";
import ProtectedRoutes from "./routes/ProtectedRoutes.jsx";
import Navbar from "./components/Navbar";
import Compose from "./pages/Compose";
import DashBoard from "./pages/DashBoard";
import Landing from "./components/Landing";
import Footer from "./components/Footer";

const App = () => {
  return (
    <AuthProvider>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            {/* Landing page accessible to all users */}
            <Route path="/" element={<Landing />} />
            
            {/* Protected Routes - Require authentication */}
            <Route element={<ProtectedRoutes />}>
              <Route path="/dashboard" element={<DashBoard />} />
              <Route path="/compose" element={<Compose />} />
            </Route>
            
            {/* Catch all route - redirect to landing page */}
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </AuthProvider>
  );
};

export default App;