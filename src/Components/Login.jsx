import React, { useState } from "react";
import './signup.css'
import axios from 'axios'
import { useNavigate,Link } from 'react-router-dom'
const Login = () => {

  const navigator = useNavigate();
    const [email,setEmail] = useState("");
    const [password,setpassword] = useState("");
    const handleEmail = (e) => {
        setEmail(e.target.value)
    };
    const handlePassword = (e) => {
      setpassword(e.target.value)
      };

      const handleLogin = async (e) => {
        e.preventDefault();
        const payload = {
          email,
          password
        }
        console.log(email);
        console.log(payload);
        try{
          const res = await axios.post("https://ecommerce-backend-1-hgz7.onrender.com/users/login",payload)
          console.log('from db',res.data);
          localStorage.setItem("token",res.data);
          navigator('/');
        } 
       catch (err) {
        if (err.response) {
          console.error("Response error:", err.response.data);
        } else if (err.request) {
          console.error("No response:", err.request);
        } else {
          console.error("Error:", err.message);
        }
      }
      
      }

  return (

    <div className='useraccount-conatiner'>
    <div className="login-signup-container">
      <div className='login-image-con1'>
       
      </div>
        
      <div className="login-signup-box-login-signup-left">
        <h2 className="login-signup-h2">Login</h2>
        <form onSubmit={handleLogin}>

          <div className="login-signup-input-container">
            <label htmlFor="email" className="login-signup-label">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Email"
              value={email}
               onChange={handleEmail}
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
              value={password} 
                onChange={handlePassword}
              className="login-signup-input"
            />
          </div>
           <button type="accountsubmit" className="login-signup-button">Sign Up</button>
        </form>
        <div className='already-have-account'>
        <p className="login-signup-p">Don't have an account?</p>
        <Link to="/signup">
          <p className="login-signup-p"><span>Sign Up</span></p>
        </Link>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Login;
