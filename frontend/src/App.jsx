import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Compose from "./pages/Compose";
import Reply from "./pages/Reply";
import DashBoard from "./pages/DashBoard";
import Read from "./pages/Read";

import Landing from "./components/Landing";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        {/* Redirect root path to dashboard */}
        <Route path="/" element={<Landing />} />
        <Route path="/compose" element={<Compose />} />
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/read" element={<Read />} />
      </Routes>
      <Footer/>
    </div>
  );
};

export default App;
