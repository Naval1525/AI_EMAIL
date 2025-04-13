import React, { useState, useRef, useEffect } from "react";
import { User, LayoutDashboard, PenSquare, LogOut } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const location = useLocation();
  const { user, isAuthenticated, login, logout } = useAuth();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleUserIconClick = () => {
    if (!isAuthenticated) {
      login();
    } else {
      setDropdownOpen(!dropdownOpen);
    }
  };

  return (
    <nav className="bg-gray-900 text-white py-4 px-6 flex justify-between items-center shadow-lg">
      {/* Company Logo/Name */}
      <div className="flex items-center">
        <Link to="/" className="flex items-center">
          <span className="text-xl font-bold text-blue-400">AI</span>
          <span className="text-xl font-bold ml-1">EMAIL</span>
        </Link>
      </div>

      {/* Navigation Items - Only show for authenticated users */}
      <div className="flex items-center space-x-6">
        {isAuthenticated && (
          <>
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
          </>
        )}

        {/* User Profile Icon */}
        <div className="relative" ref={dropdownRef}>
          <div
            className="ml-6 cursor-pointer p-2 rounded-full hover:bg-gray-700 transition-colors flex items-center"
            onClick={handleUserIconClick}
          >
            {isAuthenticated && user?.avatar ? (
              <img
                src={user.avatar}
                alt={user.name}
                className="w-6 h-6 rounded-full"
              />
            ) : (
              <User size={20} />
            )}
          </div>

          {/* Dropdown Menu */}
          {isAuthenticated && dropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-gray-800 rounded-md shadow-lg py-1 z-10">
              <div className="px-4 py-3 border-b border-gray-700">
                <p className="text-sm font-medium">{user.name}</p>
                <p className="text-xs text-gray-400 truncate">{user.email}</p>
              </div>
              <button
                onClick={logout}
                className="flex items-center w-full px-4 py-2 text-sm text-white hover:bg-gray-700"
              >
                <LogOut size={16} className="mr-2" />
                Sign out
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

const NavItem = ({ icon, label, to, active }) => {
  return (
    <Link
      to={to}
      className={`flex items-center cursor-pointer transition-colors ${
        active ? "text-blue-400" : "text-white hover:text-blue-400"
      }`}
    >
      <div className="mr-1">{icon}</div>
      <span>{label}</span>
    </Link>
  );
};

export default Navbar;
