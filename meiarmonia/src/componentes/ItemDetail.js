import React, { useState, useContext } from "react";
import ItemCount from "./ItemCount";
import { Context } from "./Context";
import { CartContext } from "./CartContext";
import Cart from "./Cart";

function ItemDetail({ item }) {
  // const [compra, setCompra] = useState(0);

  const [context, setContext] = useState({ finalizar: false, cantidad: 0 });
  const [cart, setCart] = useContext(CartContext);

  const onAdd = () => {
    console.log("onAdd");
    console.log("context ", context);

    // console.log("cantidad", compra);
  };
  const handleFinalizar = () => {
    setCart([...cart, item]);
    console.log("item", item);
    console.log("context ", context);
    console.log("handleFinalizar");
  };

  return (
    <Context.Provider value={[context, setContext]}>
      <div className={"item-list"}>
        <div className={"card"} key={item.id}>
          <ul>
            <li>Product Num: {item.id}</li>
            <li>{item.title}</li>
            <li>
              <img alt={item.title} src={item.pictureUrl}></img>
            </li>
            <li>{item.description}</li>
            <li>$ {item.price}</li>
            <li>Available stock: {item.stock}</li>

            {context.finalizar ? (
              <button onClick={() => handleFinalizar()}>
                {" "}
                Finalizar compra
              </button>
            ) : (
              <ItemCount stock={item.stock} initial={1} onClick={onAdd} />
            )}
          </ul>
        </div>
      </div>
    </Context.Provider>
  );
}

export default ItemDetail;
