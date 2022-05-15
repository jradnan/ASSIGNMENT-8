import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {cart} = props;
 let name = [];
 
 for (const products of cart){
    name = name + products.name;
    
 }
    return (
        <div className='products'>
           
             <h4>Order Details</h4>
               <p>Selected Items: {cart.length}</p>
               
               <h4>Product: {name}</h4>
        </div>
    );
};

export default Cart;