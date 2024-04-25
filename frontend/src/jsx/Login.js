import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import '../css/Login.css';

const Login = () => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    // Update the credentials state with the new value
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Send POST request to login endpoint with credentials
      const response = await axios.post('http://localhost:4000/api/users/login', credentials);
      
      console.log("Response from server:", response.data.fname);
      const fname = response.data.fname

      // Check if login was successful (customize this based on your backend response)
      if (response.status === 200 && fname !== undefined  ) {
        // Assuming response.data contains user information
        const user = response.data;
        localStorage.setItem('fname', user.fname); // Save user's first name in local storage
        navigate('/dashboard');
      } else {
        setError('Invalid email or password');
      }
    } catch (error) {
      console.error('Login failed', error);
      setError('An error occurred while logging in');
    }
  };

  return (
    <div className="container-fluid">
      <h1 className="text-danger text-center">Happy Journey</h1>
      <div className="row mx-auto d-flex justify-item-center">
        <h1 className="login" id="login">
          Login
        </h1>
        <div className="col-sm-12 p-5 mx-auto d-flex align-items-center" id="text">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email" style={{ color: 'black' }}>
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                value={credentials.email}
                onChange={handleChange}
              />
              <small id="emailHelp" className="form-text text-dark">
                We'll never share your email with anyone else.
              </small>
            </div>
            <div className="form-group">
              <label htmlFor="password" style={{ color: 'black' }}>
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                placeholder="Password"
                value={credentials.password}
                onChange={handleChange}
              />
            </div>
            {error && <div style={{ color: 'red' }}>{error}</div>}
            <button type="submit" className="btn btn-dark mt-2">
              Submit
            </button>
            <p style={{ color: 'black' }}>Don't have an account?</p>
            <Link to="/signup" className="nav-link text-dark text-sm">
              Sign up
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
