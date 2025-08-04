"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import { isSessionExpired, formatTimeRemaining } from '../lib/authUtils';

interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (userData: User) => void;
  logout: () => void;
  checkAuthStatus: () => boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Check if user session is valid
  const checkAuthStatus = (): boolean => {
    try {
      const authData = sessionStorage.getItem('auth_data');
      if (!authData) return false;

      const { user: storedUser, timestamp } = JSON.parse(authData);

      // Check if session has expired
      if (isSessionExpired(timestamp)) {
        // Session expired, clear storage
        sessionStorage.removeItem('auth_data');
        setUser(null);
        console.log('Session expired, user logged out');
        return false;
      }

      // Log session status for debugging
      console.log('Session valid, time remaining:', formatTimeRemaining(timestamp));

      // Session is valid
      setUser(storedUser);
      return true;
    } catch (error) {
      console.error('Error checking auth status:', error);
      sessionStorage.removeItem('auth_data');
      setUser(null);
      return false;
    }
  };

  // Login function
  const login = (userData: User) => {
    const authData = {
      user: userData,
      timestamp: Date.now()
    };
    
    sessionStorage.setItem('auth_data', JSON.stringify(authData));
    setUser(userData);
  };

  // Logout function
  const logout = () => {
    sessionStorage.removeItem('auth_data');
    setUser(null);
  };

  // Check auth status on mount
  useEffect(() => {
    checkAuthStatus();
    setIsLoading(false);
  }, []);

  // Check auth status periodically (every 5 minutes)
  useEffect(() => {
    const interval = setInterval(() => {
      checkAuthStatus();
    }, 5 * 60 * 1000); // 5 minutes

    return () => clearInterval(interval);
  }, []);

  const value: AuthContextType = {
    user,
    isAuthenticated: !!user,
    isLoading,
    login,
    logout,
    checkAuthStatus
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}; 