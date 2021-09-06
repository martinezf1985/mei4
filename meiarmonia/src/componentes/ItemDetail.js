import React, {useState} from 'react'
import ItemCount from './ItemCount';

function ItemDetail({ id, title, description, stock, pictureUrl, price }) {
  const [onAdd, setOnAdd]= useState (0);
  const NumberContext = React.createContext();
  return (
    <NumberContext.Provider value={42}>
        
      
    <div className={"item-list"}>
      <div className={"card"}>
        <ul>
          <li>Product Num: {id}</li>
          <li>{title}</li>
          <li>
            <img src={pictureUrl}></img>
          </li>
          <li>{description}</li>
          <li>$ {price}</li>
          <li>Available stock: {stock}</li>
          <ItemCount stock={0} initial={1} onAdd={console.log()} />
        </ul>
      </div>
    </div>
    </NumberContext.Provider>
  );
}

export default ItemDetail;
