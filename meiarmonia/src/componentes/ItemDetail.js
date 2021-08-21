function ItemDetail({ id, title, description, stock, pictureUrl, price }) {
  return (
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
        </ul>
      </div>
    </div>
  );
}

export default ItemDetail;
