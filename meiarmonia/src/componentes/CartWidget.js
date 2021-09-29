import React, { useContext } from "react";
import Cart from './Cart';
import { useState } from "react";
import { CartContext } from "./CartContext";
import { Link } from 'react-router-dom'

const CartWidget = () => {
  const [carrito, setCarrito] = useContext(CartContext);
  const handleClick=()=>{
    console.log('handleClick')
    Cart(carrito)
    
  }
  return (
    
    <>
    <li className='nav-item iconCart'>
        <Link to='/cart' className='nav-link'>
          <i className='fa fa-shopping-cart' aria-hidden='true'></i>
          <span className='badge badge-dark badge-pill'>{carrito}</span>
        </Link>
      </li>
    </>
      
  );
};

export default CartWidget;
