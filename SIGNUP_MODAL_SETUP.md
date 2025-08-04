# Sign-Up Modal Implementation

## Overview
A professional sign-up modal has been implemented that appears 3 seconds after the website loads. The modal includes Google sign-up functionality and a skip option.

## Features
- **Timed Display**: Modal appears after 3 seconds of page load
- **Always Show**: Modal appears on every page reload/refresh
- **Google Sign-Up**: Ready for Google OAuth integration
- **Skip Option**: Users can skip the sign-up process
- **Professional Design**: Modern UI with smooth animations using Framer Motion
- **Responsive**: Works on all device sizes

## Components

### SignUpModal.tsx
The main modal component with:
- Professional styling with gradient backgrounds
- Google sign-up button with loading state
- Skip option
- Terms of Service and Privacy Policy links
- Smooth animations using Framer Motion

### SignUpModalWrapper.tsx
Handles the timing logic and modal state:
- 3-second delay before showing modal
- Shows modal on every page reload/refresh
- State management for modal visibility

## Integration

The modal is automatically integrated into the website layout (`app/layout.tsx`) and will appear on all pages.

## Google OAuth Integration

To integrate actual Google OAuth functionality:

1. **Install Google OAuth library**:
   ```bash
   npm install @auth/google-provider
   ```

2. **Set up Google OAuth credentials**:
   - Go to Google Cloud Console
   - Create a new project or select existing one
   - Enable Google+ API
   - Create OAuth 2.0 credentials
   - Add your domain to authorized origins

3. **Update the handleGoogleSignUp function** in `SignUpModal.tsx`:
   ```typescript
   const handleGoogleSignUp = async () => {
     setIsLoading(true);
     try {
       // Implement your Google OAuth logic here
       // Example with NextAuth.js:
       // await signIn('google', { callbackUrl: '/' });
     } catch (error) {
       console.error('Google sign-up failed:', error);
     } finally {
       setIsLoading(false);
       onClose();
     }
   };
   ```

4. **Environment Variables**:
   Create a `.env.local` file:
   ```
   GOOGLE_CLIENT_ID=your_google_client_id
   GOOGLE_CLIENT_SECRET=your_google_client_secret
   NEXTAUTH_URL=http://localhost:3000
   NEXTAUTH_SECRET=your_nextauth_secret
   ```

## Customization

### Styling
The modal uses Tailwind CSS classes and can be easily customized by modifying the className props in `SignUpModal.tsx`.

### Timing
To change the delay, modify the timeout value in `SignUpModalWrapper.tsx`:
```typescript
setTimeout(() => {
  setShowModal(true);
  // ... other code
}, 3000); // Change this value (in milliseconds)
```

### Content
Update the text content in `SignUpModal.tsx` to match your brand and messaging.

## Dependencies
- Framer Motion (already installed)
- React (already installed)
- TypeScript (already installed)

## Browser Compatibility
- Modern browsers with ES6+ support
- SessionStorage API support
- CSS backdrop-filter support (for backdrop blur effect) 