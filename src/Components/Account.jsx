import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Account.css'; 

const Account = () => {
  const navigate = useNavigate();

  const handlesignout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  const handleloginout = () => {
    navigate('/login');
  };

  return (
    <div className="account-container">
      <div className="account-title">Account</div>
      <div className="account-buttons">
        <button onClick={handlesignout} className='signbtn'>SIGNOUT</button>
        <button onClick={handleloginout} className='loginbtn'>LOGIN</button>
      </div>
    </div>
  );
};

export default Account;
