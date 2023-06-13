import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    // Simulated database login check
    const dbLogin = {
      username: 'admin',
      password: 'admin',
    };

    if (username === dbLogin.username && password === dbLogin.password) {
      setLoggedIn(true);
      alert('Login successful!');
      navigate('/');
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    <div className="bg-teal-200 min-h-screen flex justify-center items-center">
      <div className="login-form bg-white p-8 rounded shadow-lg">
        {loggedIn ? (
          <h2 className="text-2xl mb-4">Welcome, {username}!</h2>
        ) : (
          <form onSubmit={handleLogin}>
            <label className="block mb-4">
              Username:
              <input
                type="text"
                value={username}
                onChange={handleUsernameChange}
                className="border border-gray-300 px-2 py-1 rounded w-full"
              />
            </label>
            <label className="block mb-4">
              Password:
              <input
                type="password"
                value={password}
                onChange={handlePasswordChange}
                className="border border-gray-300 px-2 py-1 rounded w-full"
              />
            </label>
            <button
              type="submit"
              className="bg-teal-500 text-white py-2 px-4 rounded"
            >
              Login
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default SignIn;
