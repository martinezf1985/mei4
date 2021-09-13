import React, { useState } from "react";
import ItemCount from "./ItemCount";

function ItemDetail({ id, title, description, stock, pictureUrl, price }) {
  const [onAdd, setOnAdd] = useState(0);
  const NumberContext = React.createContext();

  const onClick = (cantidad) => {
    setOnAdd(cantidad );
  };

  return (
    <NumberContext.Provider value={onAdd}>
      <div className={"item-list"}>
        <div className={"card"} key={id}>
          <ul>
            <li>Product Num: {id}</li>
            <li>{title}</li>
            <li>
              <img alt={title} src={pictureUrl}></img>
            </li>
            <li>{description}</li>
            <li>$ {price}</li>
            <li>Available stock: {stock}</li>
            <ItemCount
              stock={stock}
              initial={0}
              onAdd={(cant) => onClick(cant)}
            />
          </ul>
        </div>
      </div>
    </NumberContext.Provider>
  );
}

export default ItemDetail;
