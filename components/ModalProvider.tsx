"use client";

import React, { useState, useEffect, createContext, useContext } from "react";
import SignUpModal from "./SignUpModal";

// Create context for modal control
interface ModalContextType {
  showSignUpModal: () => void;
  hideSignUpModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const useModal = () => {
  const context = useContext(ModalContext);
  if (context === undefined) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
};

interface ModalProviderProps {
  children: React.ReactNode;
}

export const ModalProvider: React.FC<ModalProviderProps> = ({ children }) => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Show modal after 3 seconds on every page reload
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const showSignUpModal = () => {
    setShowModal(true);
  };

  const hideSignUpModal = () => {
    setShowModal(false);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const handleSkip = () => {
    // Handle skip logic here
    console.log("User skipped sign up");
  };

  return (
    <ModalContext.Provider value={{ showSignUpModal, hideSignUpModal }}>
      {children}
      <SignUpModal
        isOpen={showModal}
        onClose={handleClose}
        onSkip={handleSkip}
      />
    </ModalContext.Provider>
  );
}; 