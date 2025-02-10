import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './orderForm.css'

const Order = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [useraddress, setUserAddress] = useState('');
    const [userphoneno, setUserPhoneNo] = useState('');

    const handlePlaceOrder = async (e) => {
        e.preventDefault();

        const token = localStorage.getItem("token");
        console.log("Sending token:", token);
        if (!token) {
            navigate("/login");
            return;
        }

        const orderDetails = {
            username,
            useraddress,
            userphoneno,
        };

        try {
            const response = await axios.post('https://ecommerce-backend-1-hgz7.onrender.com/orders', orderDetails, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            });
            console.log(response.data);

            if (response.status === 200) {
                console.log("Order placed successfully!");
               navigate("/home");
            } else {
                console.error("Failed to place order");
            }
         
        } catch (error) {
            console.error("Error:", error);
        }
    };

    return (
        <div className="user-info-form">
            <h2>Order Information</h2>
            <form onSubmit={handlePlaceOrder}>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="useraddress">Address</label>
                    <textarea
                        id="useraddress"
                        value={useraddress}
                        onChange={(e) => setUserAddress(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="userphoneno">Phone Number</label>
                    <input
                        type="tel"
                        id="userphoneno"
                        value={userphoneno}
                        onChange={(e) => setUserPhoneNo(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className='placeorder'>Place Order</button>
            </form>
        </div>
    );
};

export default Order;
