import React from "react";
import { CarritoProvider } from "./CartContext";
import {useState} from 'react'
const CartWidget = () => {
  const [carrito, setCarrito] = useState({ item: null, quantity: 0 });
  return (
    <CarritoProvider.Provider value={(carrito, setCarrito)}>
      <div>
        <div>{carrito}</div>
      </div>
    </CarritoProvider.Provider>
  );
};

export default CartWidget;
