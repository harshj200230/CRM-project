//Login

import React, { useState } from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode'; // Correct import

const Login = ({ onLogin }) => {
  const [user, setUser] = useState(null);

  const handleLoginSuccess = (credentialResponse) => {
    const { credential } = credentialResponse;
    const decodedToken = jwtDecode(credential); // Correct usage
    console.log('Login successful:', decodedToken);
    setUser({
      name: decodedToken.name,
      email: decodedToken.email,
      picture: decodedToken.picture,
    });
    onLogin(); // Call onLogin callback
  };

  const handleLoginFailure = (error) => {
    console.error('Login failed:', error);
  };

  const handleLogout = () => {
    setUser(null);
    // Clear the Google session and disable auto-select
    if (window.google && window.google.accounts.id) {
      window.google.accounts.id.disableAutoSelect();
      window.google.accounts.id.revoke(user.email, () => {
        console.log('User signed out.');
      });
    }
  };

  return (
    <GoogleOAuthProvider clientId="1096973741225-8l112dpubr2a0fncn0l4n3louo70s05f.apps.googleusercontent.com">
      <div>
        <h2>Login with Google</h2>
        {!user ? (
          <GoogleLogin
            onSuccess={handleLoginSuccess}
            onError={handleLoginFailure}
          />
        ) : (
          <div>
            <h3>Welcome, {user.name}</h3>
            <p>Email: {user.email}</p>
            <img src={user.picture} alt={user.name} />
            <button onClick={handleLogout}>Sign Out</button>
          </div>
        )}
      </div>
    </GoogleOAuthProvider>
  );
};

export default Login;