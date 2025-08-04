"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useAuth } from "./AuthContext";

interface SignUpModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSkip: () => void;
}

const SignUpModal: React.FC<SignUpModalProps> = ({ isOpen, onClose, onSkip }) => {
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();

  const handleGoogleSignUp = async () => {
    setIsLoading(true);
    
    // Simulate Google sign-up process
    setTimeout(() => {
      // Create mock user data (in real app, this would come from Google OAuth)
      const mockUser = {
        id: `user_${Date.now()}`,
        name: "Demo User",
        email: "demo@example.com",
        avatar: "https://via.placeholder.com/150/FF5722/FFFFFF?text=U"
      };
      
      // Login the user
      login(mockUser);
      
      setIsLoading(false);
      onClose();
      console.log("User logged in:", mockUser);
    }, 2000);
  };

  const handleSkip = () => {
    onSkip();
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center pointer-events-none"
          onClick={onClose}
        >
          {/* Dark overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-opacity-50 backdrop-blur-sm pointer-events-auto"
            onClick={onClose}
          />
          
          {/* Modal content */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 30 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
            className="bg-white rounded-3xl shadow-2xl p-8 max-w-md w-full mx-4 relative transform hover:scale-105 transition-transform duration-300 pointer-events-auto z-10"
            onClick={(e) => e.stopPropagation()}
            style={{
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(255, 255, 255, 0.2), 0 0 40px rgba(0, 0, 0, 0.3)"
            }}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Header */}
            <div className="text-center mb-8">
              
              <motion.h2
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-3xl font-bold text-gray-900 mb-3 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
              >
                Welcome to Oitijjho Express
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-gray-600 text-base leading-relaxed"
              >
                Join our community and unlock exclusive content, personalized recommendations, and more.
              </motion.p>
            </div>

            {/* Sign up options */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="space-y-5"
            >
              {/* Google Sign Up Button */}
              <motion.button
                onClick={handleGoogleSignUp}
                disabled={isLoading}
                className="w-full flex items-center justify-center gap-3 bg-white border-2 border-gray-200 rounded-2xl px-6 py-4 text-gray-700 font-semibold hover:bg-gray-50 hover:border-gray-300 hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                style={{
                  boxShadow: "0 4px 15px -3px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(255, 255, 255, 0.8)"
                }}
              >
                {isLoading ? (
                  <div className="w-6 h-6 border-2 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
                ) : (
                  <svg className="w-6 h-6" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                )}
                <span className="text-lg">{isLoading ? "Signing up..." : "Continue with Google"}</span>
              </motion.button>

              {/* Skip Button */}
              <motion.button
                onClick={handleSkip}
                className="w-full text-gray-500 hover:text-gray-700 font-medium py-3 transition-all duration-300 hover:bg-gray-100 rounded-xl"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Skip for now
              </motion.button>
            </motion.div>

            {/* Footer */}
            {/* <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-8 text-center"
            >
              <p className="text-sm text-gray-500 leading-relaxed">
                By continuing, you agree to our{" "}
                <a href="#" className="text-blue-600 hover:text-blue-700 hover:underline font-medium transition-colors">Terms of Service</a>{" "}
                and{" "}
                <a href="#" className="text-blue-600 hover:text-blue-700 hover:underline font-medium transition-colors">Privacy Policy</a>
              </p>
            </motion.div> */}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SignUpModal; 