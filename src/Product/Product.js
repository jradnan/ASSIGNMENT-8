import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = (props) => {
  
    return (
        
        <div className='product'>
            
         
         <img src={props.img} alt="" />
         <h4 className='product-name'>{props.name}</h4>
         <h5 className='product-name'>Price: ${props.price}</h5>
        <button  onClick={()=>props.handleCart(props.watch)} className='btn-cart'><p className='btn-text' style={{color:'white'}}>Add to Cart</p>
        <FontAwesomeIcon className='icon' icon={faShoppingCart }></FontAwesomeIcon>
        </button>
       
        </div>
        
    );
};

export default Product;