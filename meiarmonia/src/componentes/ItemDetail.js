import React, { useState, useContext } from "react";
import ItemCount from "./ItemCount";
import { Context } from "./Context";
import { CarritoProvider } from './CartContext';

function ItemDetail({ item }) {
  const [compra, setCompra] = useState(0);
  const carritoContext = React.createContext();
  let [terminar, setTerminar] = useState(false);
  const [context, setContext] = useState(false);
  const [object, setObject] = useContext(CarritoProvider);

  const onAdd = () => {
    console.log("onAdd");
    console.log("context ", context);
    terminar = context;
    setTerminar(!terminar);
    console.log("cantidad", compra);
  };
  const handleFinalizar= ()=>{
    console.log('handleFinalizar')
    setContext({item:item, quantity:item.stock })
  }

 

  return (
    <carritoContext.Provider value={terminar}>
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

            {context ? (
              <button onClick={()=>handleFinalizar()} > Finalizar compra</button>
            ) : (
              <ItemCount
                stock={item.stock}
                initial={1}
                onAdd={item.description}
                onClick={onAdd}
              />
            )}
          </ul>
        </div>
      </div>
      //{" "}
      </Context.Provider>
    </carritoContext.Provider>
  );
}

export default ItemDetail;
