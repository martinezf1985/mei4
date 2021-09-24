import React, { useState, useContext } from "react";
import ItemDetail from "./ItemDetail";
import { CarritoProvider } from './CartContext'; 


const ItemList = ({ items }) => {
  const [object, setObject] = useState([]);
  return (
    <div className={"item-list"}>
      {items.map((item) => (
        <div className={"card"} key={item.id}>
          
          <CarritoProvider.Provider value={[object,setObject]}>
            <ItemDetail item={item} />
          </CarritoProvider.Provider>
          
        </div>
      ))}
    </div>
  );
};
export default ItemList;