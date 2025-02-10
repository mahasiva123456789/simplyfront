import React from 'react'
import { useNavigate } from 'react-router-dom'

const Account = () => {
    const navigate = useNavigate()
    const handlesignout=()=>{
        localStorage.removeItem('token');
        navigate('/login')

    }
    const handleloginout=()=>{
      navigate('/login')
    }
  return (
    <>
    <div>Account</div>
    <button onClick={handlesignout} style={{marginRight:"10px"}}>SIGNOUT</button>
    <button onClick={handleloginout}>login</button>
    </>
  )
}

export default Account