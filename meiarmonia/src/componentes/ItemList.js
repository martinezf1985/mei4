import React, { useState } from "react";
import ItemDetail from "./ItemDetail";


const ItemList = ({ items }) => {
  const [object, setObject] = useState([]);
  return (
    <div className={"item-list"}>
      {items.map((item) => (
        <div className={"card"} key={item.id}>


          <ItemDetail item={item} />


        </div>
      ))}
    </div>
  );
};
export default ItemList;