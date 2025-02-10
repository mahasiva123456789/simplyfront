import React from 'react'
import Productcard from './Components/Productcard'
import Cart from './Components/Cart'
import Productdetails from './Components/Productdetails'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import SignUp from './Components/SignUp'
import Login from './Components/Login'
import Home from './Components/Home'
import Order from './Components/OrderForm'
import Account from './Components/Account'
const App = () => {
  return (
   <>
   <BrowserRouter>
   <ToastContainer />  
   <Routes>
    <Route path='/' element={<Home />} />
    <Route path="/product" element={<Productcard />} />
    <Route path="/furniture/:uuid" element={<Productdetails />} />
    <Route path='/signup' element={<SignUp />} />
    <Route path="/cart" element={<Cart />} />
    <Route path="/order" element={<Order />} />
    <Route path="/account" element={<Account />} />
    <Route path='/login' element={<Login />} />
   </Routes>
   </BrowserRouter>
   </>
  )
}

export default App