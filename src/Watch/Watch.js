import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Watches.css'
import '../Cart/Cart'
import Cart from '../Cart/Cart';

const Watch = () => {
    const [watches, setWatches] =useState ([]);
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=> setWatches(data))
        
    },[])
    const [cart, setCart] =useState([]);

    const handleCart =(watch)=>{
        const newCart = [...cart, watch]
        setCart (newCart)
    }
    
    
    
    return (

        <div>
             <div className='products-container'>
           <div className="watches-conatiner">
               <h2 className='watch-name'>Watches Gallery</h2>
           </div>
           <div className="cart-container">
              <Cart watch={watches} cart={cart}></Cart>
               
           </div>
        </div>


            <div className='watch-gallery'>
            {
                watches.map(watch => <Product 
                    handleCart={handleCart}
                    key={watch.id}
                    id={watch.id}
                    watch={watch}
                    price={watch.price}
                    img={watch.img}
                    name={watch.name}>
                 </Product>)
            }
            </div>
           
        </div>
    );
};

export default Watch;