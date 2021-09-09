import Item from "./Item";
import ItemCount from "./ItemCount";

const ItemList = ({ items }) => {
  return (
    <div className={"item-list"} >
      {items.map((item) => (
        <div className={"card"} key={item.id} >
          <Item item={item} />
          <ItemCount stock={item.stock} initial={1} onAdd={console.log()} />
        </div>
      ))}
    </div>
  );
};

export default ItemList;
