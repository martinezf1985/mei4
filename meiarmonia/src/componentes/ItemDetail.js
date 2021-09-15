import React, { useState } from "react";
import ItemCount from "./ItemCount";

function ItemDetail(props) {
  const [compra, setCompra] = useState(0);
  const NumberContext = React.createContext();
  const [terminar, setTerminar] = useState(false);

  const onAdd = (cantidad) => {
    setCompra(cantidad);
    setTerminar(!terminar);
    console.log('cantidad', cantidad)
  };
  console.log('esto tiene el estado', onAdd)

  return (
    <NumberContext.Provider value={compra}>
      <div className={"item-list"}>
        <div className={"card"} key={props.id}>
          <ul>
            <li>Product Num: {props.id}</li>
            <li>{props.title}</li>
            <li>
              <img alt={props.title} src={props.pictureUrl}></img>
            </li>
            <li>{props.description}</li>
            <li>$ {props.price}</li>
            <li>Available stock: {props.stock}</li>
            {terminar ? (
              <button>Finalizar compra</button>
            ) : (
              <ItemCount
                stock={"stock"}
                numero={1}
                initial={0}
                onClick={(cant) => onAdd(cant)}
                
              />
              
            )}
            
          </ul>
        </div>
      </div>
    // </NumberContext.Provider>
  );
}

export default ItemDetail;
