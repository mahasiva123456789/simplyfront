import React, { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import axios from 'axios';
import './signup.css';

const SignUp = () => {
  const navigator = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleUser = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://ecommerce-backend-1-hgz7.onrender.com/users', {
        name: formData.name,
        email: formData.email,
        password: formData.password,
      });
      navigator('/login');
      alert('Please login into your account');
      console.log('User created the account successfully');
      console.log(response.data);
    } catch (err) {
      console.log('Error occurred while creating account', err);
    }
  };

  return (
    <div className='useraccount-conatiner'>
      <div className="login-signup-container">
        <div className='login-image-con'></div>
        <div className="login-signup-box-login-signup-left">
          <h2 className="login-signup-h2">Create Account</h2>
          <form onSubmit={handleSubmit}>
            <div className="login-signup-input-container">
              <label htmlFor="username" className="login-signup-label">Username</label>
              <input
                type="text"
                id="name"
                placeholder="Username"
                required
                value={formData.name}
                onChange={handleUser}
                className="login-signup-input"
              />
            </div>

            <div className="login-signup-input-container">
              <label htmlFor="email" className="login-signup-label">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleUser}
                required
                className="login-signup-input"
              />
            </div>

            <div className="login-signup-input-container">
              <label htmlFor="password" className="login-signup-label">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Password"
                required
                value={formData.password}
                onChange={handleUser}
                className="login-signup-input"
              />
            </div>
            <button type="submit" className="login-signup-button">Sign Up</button>
          </form>
          <div className='already-have-account'>
            <p className="login-signup-p">Already have an account?</p>
            <Link to="/login">
              <p className="login-signup-p"><span>Login</span></p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
