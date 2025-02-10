import {React,useEffect} from 'react';
import axios from 'axios'
import Productlist from './Productlist';
import './Productcard.css'
import Catagory from './catagory';
import { useSelector } from 'react-redux';
import {useDispatch} from 'react-redux';
import { setproducts } from '../redux/productSlice';
import Categoryselect from './Categoryselect';
import Header from './Header';

const Productcard = () => {
  const dispatch = useDispatch();
  const furnitures=useSelector((state)=>state.search.furniture)
  console.log(furnitures);

  useEffect(()=>{
    getproducts();
  },[]);
  const getproducts=async()=>{
    const response=await axios.get('https://ecommerce-backend-1-hgz7.onrender.com/products')
  
    dispatch(setproducts(response.data));
    }
    if(furnitures=='')
      return <div> <h3>product not found</h3></div>
    

  return (
    <>
     <Header />
     <Categoryselect />
     <Catagory />
    <div className='furniturecon'>
      {furnitures.map(furniture => (
        <Productlist key={furniture.id} furniture={furniture} />
      ))}
      </div>
    </>
  );
}

export default Productcard;
