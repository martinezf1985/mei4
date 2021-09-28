import React, { useContext } from "react";

import { useState } from 'react'
import { CartContext } from './CartContext'


const CartWidget = () => {
  const [carrito, setCarrito] = useContext(CartContext);
  return (


    <div >
      {/* {carrito === 0 ? <div>sin elementos</div> :
        carrito.map((item) => (
          <div key={item.id}>

            item.name

          </div>
        ))
      } */}
      {carrito}
    </div>

  );
};

export default CartWidget;
