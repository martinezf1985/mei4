import React, { useState, createContext } from "react";
import { addDoc, collection, Timestamp } from "firebase/firestore";
import { db } from "../firebase";

const carritoContext = createContext({});

export const CarritoProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);
  const [buyer, setBuyer] = useState({});

  const sessionCart = JSON.parse(localStorage.getItem("sessionCart"));

  const cartSession = () => {
    if (sessionCart !== null) {
      if (sessionCart.length !== 0) {
        let carritoDraft = sessionCart;
        setCarrito(carritoDraft);
      } else {
        localStorage.setItem("sessionCart", JSON.stringify(carrito));
      }
    } else {
      localStorage.setItem("sessionCart", JSON.stringify(carrito));
    }
  };

  const userInfo = (nombre, apellido, mail, telefono) => {
    const user = {
      nombre,
      apellido,
      mail,
      telefono,
    };
    setBuyer(user);
  };

  const finalizar = async () => {
    const items = carrito;
    const date = Timestamp.fromDate(new Date());
    const total = price();

    // Add a new document in collection "orders"
    await addDoc(collection(db, "orders"), {
      buyer,
      items,
      date,
      total,
    }).finally(clear(), console.log("FIN"));
  };

  // addItem(item, quantity)
  const addItem = (item, quantity) => {
    const carritoDraft = [...carrito];
    //isInCart=boolean
    const isInCart = carritoDraft.find((producto) => producto.id === item.id);
    let subtotal = item.price * quantity;

    if (isInCart) {
      isInCart.quantity += quantity;
      isInCart.subtotal += subtotal;
      setCarrito(carritoDraft);
      localStorage.setItem("sessionCart", JSON.stringify(carrito));
    } else {
      carritoDraft.push({
        ...item,
        quantity,
        subtotal,
      });
      setCarrito(carritoDraft);
      localStorage.setItem("sessionCart", JSON.stringify(carritoDraft));
    }
  };

  // //subtractItem(itemId)
  // const subtractItem = (item) =>{
  //     const carritoDraft = [...carrito];
  //     const isInCart = carritoDraft.find(producto => producto.id === item.id);
  //     let subtotal = item.price * quantity
  //     isInCart.quantity -= 1;
  //     isInCart.subtotal += subtotal

  // }

  // removeItem(itemId)
  const removeItem = (itemId) => {
    const carritoDraft = [...carrito];
    const newCarrito = carritoDraft.filter((item) => item.id !== itemId);
    setCarrito(newCarrito);
    localStorage.setItem("sessionCart", JSON.stringify(newCarrito));
  };

  // clear()(carrito y LocalStorage)
  const clear = () => {
    setCarrito([]);
    localStorage.clear();
  };

  // price()(total a pagar)
  const price = () => {
    let total = 0;
    carrito.map((producto) => (total += producto.subtotal));
    return total;
  };

  return (
    <carritoContext.Provider
      value={{
        carrito,
        cartSession,
        addItem,
        removeItem,
        clear,
        userInfo,
        price,
        finalizar,
      }}
    >
      {children}
    </carritoContext.Provider>
  );
};

export default carritoContext;
