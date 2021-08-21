import { Link } from "react-router-dom";

const Item = ({ item }) => {
    return (
      <ul>
        <li>Product Num: {item.id}</li>
        <li>{item.title}</li>
        <li>
          <img src={item.pictureUrl}></img>
        </li>
        <li>{item.description}</li>
        <li>$ {item.price}</li>
        <li>Available stock: {item.stock}</li>
      </ul>
    );
  };
  
  export default Item;
  