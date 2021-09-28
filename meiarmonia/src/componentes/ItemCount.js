import React, { useState, useContext } from "react";

import { Context } from "./Context";

const ItemCount = (props) => {
  const [context, setContext] = useContext(Context);
  const [count, setCount] = useState(props.initial);
  const [number, setNumber] = useState(props.number);

  const sum = () => {

    if (count < props.stock) {
      setCount(count + 1);
    }
  };

  const handlerAdd = (cant) => {
    setContext({ finalizar: true, cantidad: cant });

    console.log("handlerAdd");
  };

  const rest = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <div>
      <div>count {count}</div>

      <div>
        {/* <h1>contador: </h1> */}
        <button className="" onClick={() => sum()}>
          +
        </button>
        <button className="" onClick={() => rest()}>
          -
        </button>
        <button className="" onClick={() => handlerAdd(count)}>
          agregar
        </button>

      </div>


    </div>
  );
};
ItemCount.propTypes = {};

export default ItemCount;
