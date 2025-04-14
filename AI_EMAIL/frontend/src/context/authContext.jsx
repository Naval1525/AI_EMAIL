import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// Create context
const AuthContext = createContext(null);

// Get API URL from environment variables in Vite
const API_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000';

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Check for token in URL (after Google OAuth redirect)
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('token');
    
    if (token) {
      // Store token in localStorage
      localStorage.setItem('authToken', token);
      // Store the token as a cookie for API requests
      document.cookie = `token=${token}; path=/; max-age=86400`;
      // Clean up URL
      window.history.replaceState({}, document.title, window.location.pathname);
      // Fetch user profile with the new token
      fetchUserProfile(token);
    } else {
      // Check if user is already logged in
      const authToken = localStorage.getItem('authToken');
      if (authToken) {
        fetchUserProfile(authToken);
      } else {
        setLoading(false);
      }
    }
  }, [navigate]);

  const fetchUserProfile = async (token) => {
    try {
      setLoading(true);
      // Make API call to fetch user profile using the token
      console.log(`Fetching user profile from: ${API_URL}/api/auth/profile`);
      
      const response = await fetch(`${API_URL}/api/auth/profile`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        credentials: 'include' // Include cookies
      });
      
      if (response.ok) {
        const userData = await response.json();
        console.log('User data received:', userData);
        
        // Store user data in localStorage for offline access
        localStorage.setItem('userData', JSON.stringify(userData));
        
        setUser(userData);
        
      } else {
        console.error('Error response:', response.status, response.statusText);
        // Try to get error details
        try {
          const errorData = await response.json();
          console.error('Error details:', errorData);
          setError(errorData.message || 'Authentication failed');
        } catch (error) {
          setError('Authentication failed. Please try again.',error);
        }
        
        // If token is invalid, clear it
        localStorage.removeItem('authToken');
        localStorage.removeItem('userData');
        document.cookie = 'token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT';
      }
    } catch (error) {
      console.error('Error fetching user profile:', error);
      setError('Network error. Please check your connection.');
      
      // Check if we have cached user data to show in offline mode
      const cachedUserData = localStorage.getItem('userData');
      if (cachedUserData) {
        try {
          setUser(JSON.parse(cachedUserData));
          setError('Working in offline mode. Some features may be limited.');
        } catch (e) {
          localStorage.removeItem('userData',e);
        }
      } else {
        localStorage.removeItem('authToken');
      }
    } finally {
      setLoading(false);
    }
  };

  const login = () => {
    // Redirect to backend Google login route
    window.location.href = `${API_URL}/api/auth/google`;
  };

  const logout = () => {
    // Clear both localStorage and cookie
    localStorage.removeItem('authToken');
    localStorage.removeItem('userData');
    document.cookie = 'token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT';
    
    setUser(null);
    setError(null);
    navigate('/');
  };

  // Context value
  const value = {
    user,
    loading,
    error,
    isAuthenticated: !!user,
    login,
    logout,
    fetchUserProfile
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook for using auth context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export default AuthContext;