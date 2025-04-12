import React from 'react';
import { User, LayoutDashboard, PenSquare } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  
  return (
    <nav className="bg-gray-900 text-white py-4 px-6 flex justify-between items-center shadow-lg">
      {/* Company Logo/Name */}
      <div className="flex items-center">
        <Link to="/" className="flex items-center">
          <span className="text-xl font-bold text-blue-400">AI</span>
          <span className="text-xl font-bold ml-1">EMAIL</span>
        </Link>
      </div>
      
      {/* Navigation Items */}
      <div className="flex items-center space-x-6">
        <NavItem 
          icon={<LayoutDashboard size={18} />} 
          label="Dashboard" 
          to="/dashboard" 
          active={location.pathname === "/dashboard"}
        />
        <NavItem 
          icon={<PenSquare size={18} />} 
          label="Compose" 
          to="/compose" 
          active={location.pathname === "/compose"}
        />
        
        {/* User Profile Icon */}
        <div className="ml-6 cursor-pointer p-2 rounded-full hover:bg-gray-700 transition-colors">
          <User size={20} />
        </div>
      </div>
    </nav>
  );
};

// Helper component for navigation items
const NavItem = ({ icon, label, to, active }) => {
  return (
    <Link to={to} className={`flex items-center cursor-pointer transition-colors ${active ? 'text-blue-400' : 'text-white hover:text-blue-400'}`}>
      <div className="mr-1">{icon}</div>
      <span>{label}</span>
    </Link>
  );
};

export default Navbar;