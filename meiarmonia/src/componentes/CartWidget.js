import carrito from './imagenes/carrito.jpg'
import React from 'react'

 const CartWidget = () => {
    return (
        <div>
             <img className = 'img ' src ={ carrito   } alt=""/>
        </div>
    )
}


export default CartWidget

