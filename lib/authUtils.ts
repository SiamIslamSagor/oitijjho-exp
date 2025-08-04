// Authentication utility functions

export const getSessionExpirationTime = (): number => {
  return 24 * 60 * 60 * 1000; // 1 day in milliseconds
};

export const isSessionExpired = (timestamp: number): boolean => {
  const now = Date.now();
  const expirationTime = getSessionExpirationTime();
  return now - timestamp > expirationTime;
};

export const formatTimeRemaining = (timestamp: number): string => {
  const now = Date.now();
  const expirationTime = getSessionExpirationTime();
  const timeRemaining = expirationTime - (now - timestamp);
  
  if (timeRemaining <= 0) {
    return 'Expired';
  }
  
  const hours = Math.floor(timeRemaining / (1000 * 60 * 60));
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  
  if (hours > 0) {
    return `${hours}h ${minutes}m remaining`;
  } else {
    return `${minutes}m remaining`;
  }
};

export const getAuthData = () => {
  try {
    const authData = sessionStorage.getItem('auth_data');
    if (!authData) return null;
    
    const parsed = JSON.parse(authData);
    return {
      user: parsed.user,
      timestamp: parsed.timestamp,
      isExpired: isSessionExpired(parsed.timestamp),
      timeRemaining: formatTimeRemaining(parsed.timestamp)
    };
  } catch (error) {
    console.error('Error parsing auth data:', error);
    return null;
  }
}; 