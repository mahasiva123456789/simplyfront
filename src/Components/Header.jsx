import React, { useEffect, useState } from 'react'
import './Header.css'
import { useSelector } from 'react-redux'
import { Link,useNavigate} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import { searchProduct } from '../redux/productSlice'


const Header = () => {
  const navigate = useNavigate();
  const dispatch=useDispatch();
  const[search,setsearch]=useState('');
  const count=useSelector((state)=>state.cart.cartitems)
  
  const handlesearchinput=(e)=>{
    setsearch(e.target.value);
  }
  const handlesearch=()=>{
    dispatch(searchProduct(search));
    navigate('/product');
  }
  return (
    <> 
     <div className='headercon'>
       <Link to='/'><h1 className='logo'>Home</h1></Link>
       
       <div className='headeright'>
       <input type="text" placeholder='search' className='searchbar' value={search} onChange={handlesearchinput}/>
         <Link to='/product'> <button className='searchbtn' onClick={handlesearch}>search</button></Link>
          <Link to='/product'><h1>Products</h1></Link>
          <Link to='/account'>
          <h1>Account</h1></Link>
          <Link to='/cart'><h1>Cart: <span className='ordercount'>{count.length}</span></h1></Link>
       </div>
     </div>
    </>
   
  )
}

export default Header