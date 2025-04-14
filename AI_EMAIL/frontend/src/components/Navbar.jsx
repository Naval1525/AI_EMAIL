// import React, { useState, useRef, useEffect } from "react";
// import { User, LayoutDashboard, PenSquare, LogOut } from "lucide-react";
// import { Link, useLocation } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";

// const Navbar = () => {
//   const location = useLocation();
//   const { user, isAuthenticated, login, logout } = useAuth();
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const dropdownRef = useRef(null);

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setDropdownOpen(false);
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   const handleUserIconClick = () => {
//     if (!isAuthenticated) {
//       login();
//     } else {
//       setDropdownOpen(!dropdownOpen);
//     }
//   };

//   return (
//     <nav className="bg-black text-white py-4 px-6 flex justify-between items-center shadow-lg">
//       {/* Company Logo/Name */}
//       <div className="flex items-center">
//         <Link to="/" className="flex items-center">
//           <span className="text-2xl font-bold text-white">AI</span>
//           <span className="text-2xl font-bold ml-1 text-blue-400">EMAIL</span>
//         </Link>
//       </div>

//       {/* Navigation Items - Only show for authenticated users */}
//       <div className="flex items-center space-x-6">
//         {isAuthenticated && (
//           <>
//             <NavItem
//               icon={<LayoutDashboard size={18} />}
//               label="Dashboard"
//               to="/dashboard"
//               active={location.pathname === "/dashboard"}
//             />
//             <NavItem
//               icon={<PenSquare size={18} />}
//               label="Compose"
//               to="/compose"
//               active={location.pathname === "/compose"}
//             />
//           </>
//         )}

//         {/* User Profile Icon */}
//         <div className="relative" ref={dropdownRef}>
//           <div
//             className="ml-6 cursor-pointer p-2 rounded-full hover:bg-gray-800 transition-colors flex items-center"
//             onClick={handleUserIconClick}
//           >
//             {isAuthenticated && user?.avatar ? (
//               <img
//                 src={user.avatar}
//                 alt={user.name}
//                 className="w-6 h-6 rounded-full"
//               />
//             ) : (
//               <User size={20} />
//             )}
//           </div>

//           {/* Dropdown Menu */}
//           {isAuthenticated && dropdownOpen && (
//             <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
//               <div className="px-4 py-3 border-b border-gray-200">
//                 <p className="text-sm text-black font-medium">{user.name}</p>
//                 <p className="text-xs text-gray-600 truncate">{user.email}</p>
//               </div>
//               <button
//                 onClick={logout}
//                 className="flex items-center w-full px-4 py-2 text-sm text-black hover:bg-gray-100"
//               >
//                 <LogOut size={16} className="mr-2" />
//                 Sign out
//               </button>
//             </div>
//           )}
//         </div>
//       </div>
//     </nav>
//   );
// };

// const NavItem = ({ icon, label, to, active }) => {
//   return (
//     <Link
//       to={to}
//       className={`flex items-center cursor-pointer transition-colors ${
//         active ? "text-blue-400 font-medium" : "text-white hover:text-blue-400"
//       }`}
//     >
//       <div className="mr-1">{icon}</div>
//       <span>{label}</span>
//     </Link>
//   );
// };

// export default Navbar;
import React, { useState, useRef, useEffect } from "react";
import { User, LayoutDashboard, PenSquare, LogOut } from "lucide-react";
import { Link, useLocation,useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const location = useLocation();
  const { user, isAuthenticated, login, logout } = useAuth();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  const landing = () => {
    navigate('/');
  };

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
    <nav className="fixed w-full bg-white shadow-md backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo on left */}
          <div onClick={landing} className="flex-shrink-0 group">
            <span className="text-2xl font-bold tracking-tight">
              <span className="text-black transition-all duration-300 group-hover:text-pink-300">AI</span>
              <span className="mx-1 text-black opacity-60">×</span>
              <span className="text-black transition-all duration-300 group-hover:text-blue-300">EMAIL</span>
            </span>
            <div className="h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-pink-200 via-purple-200 to-blue-200 transition-all duration-500"></div>
          </div>

          {/* Navigation and User Profile on right */}
          <div className="flex items-center space-x-6">
            {/* Navigation Items */}
            {isAuthenticated && (
              <div className="flex items-center space-x-5">
                <NavItem
                  icon={<LayoutDashboard className="mr-2" />}
                  label="Dashboard"
                  to="/dashboard"
                  active={location.pathname === "/dashboard"}
                />
                <NavItem
                  icon={<PenSquare className="mr-2" />}
                  label="Compose"
                  to="/compose"
                  active={location.pathname === "/compose"}
                />
              </div>
            )}

            {/* User Profile Icon */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={handleUserIconClick}
                className="flex items-center justify-center h-10 w-10 rounded-full bg-gray-100 hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 focus:outline-none border-2 hover:border-purple-200"
              >
                {isAuthenticated && user?.avatar ? (
                  <img src={user.avatar} alt="User" className="h-8 w-8 rounded-full" />
                ) : (
                  <User className="h-5 w-5 text-gray-700" />
                )}
              </button>

              {/* Dropdown Menu with Animation */}
              {isAuthenticated && dropdownOpen && (
                <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg py-1 text-gray-700 border border-gray-100 overflow-hidden dropdown-animation">
                  <div className="px-4 py-2 border-b border-gray-100">
                    <p className="text-sm font-semibold text-gray-800">{user.name}</p>
                    <p className="text-xs text-gray-500 truncate">{user.email}</p>
                  </div>
                  <button
                    onClick={logout}
                    className="flex items-center w-full px-4 py-2 text-sm hover:bg-gray-50 transition-colors duration-200 group"
                  >
                    <LogOut className="h-4 w-4 mr-2 text-gray-400 group-hover:text-pink-300 transition-colors duration-200" />
                    <span className="group-hover:text-pink-500 transition-colors duration-200">Sign out</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .dropdown-animation {
          animation: dropIn 0.3s ease-out forwards;
          transform-origin: top right;
        }

        @keyframes dropIn {
          0% {
            opacity: 0;
            transform: translateY(-8px) scale(0.98);
          }
          70% {
            opacity: 1;
            transform: translateY(2px) scale(1.01);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes fadeWidth {
          from { width: 0%; }
          to { width: 100%; }
        }
      `}</style>
    </nav>
  );
};

const NavItem = ({ icon, label, to, active }) => {
  return (
    <Link
      to={to}
      className="group flex items-center px-3 py-2 rounded-md text-sm font-medium relative"
    >
      <span className={`flex items-center transition-all duration-300 ${
        active ? "text-purple-400" : "text-gray-700 group-hover:text-pink-400"
      }`}>
        <span className="transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
          {icon}
        </span>
        <span>{label}</span>
      </span>
      <span className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-pink-200 to-blue-200 transition-all duration-300 ${
        active ? "w-full" : "w-0 group-hover:w-full"
      }`}></span>
    </Link>
  );
};

export default Navbar;