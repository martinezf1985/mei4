import React, { useState, useContext } from "react";

import { Context } from "./Context";

const ItemCount = (props) => {
  const [context, setContext] = useContext(Context);
  const [count, setCount] = useState(props.initial);
  const [stockProd, setStockProd] = useState(props.stock);
  const [number, setNumber] = useState(props.number);
  

  

  const sum = () => {
    console.log("sum ", count, " ", stockProd);
    console.log("number", number);
    if (count < stockProd) {
      setCount(count + 1);
    }
  };

  const handlerAdd = (cant) => {
    // const carritoBorrador = [...carrito];
    // carritoBorrador.push(products[0]);
    // setCarrito(carritoBorrador);
    
    setContext(true)
    
    console.log('handlerAdd');
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
        <button className="but" onClick={() => sum()}>
          +
        </button>
        <button className="but" onClick={() => rest()}>
          -
        </button>
        <button className="but" onClick={() => handlerAdd(count)}>
          agregar
        </button>
        {/* <button onClick={() => setContext("New Value")}>
        Change Context Value
      </button> */}
        

        {/* <button
          className="but"
          onClick={() => (count < stock ? setCount(count + 1) : "")}
        >
          {" "}
          +{" "}
        </button>
        <button
          className="but"
          onClick={() => (count >= 1 ? setCount(count - 1) : "")}
        >
          {" "}
          -{" "}
        </button> */}
      </div>

      {/* <div>
        <button className="but" onClick={()=>onAdd(count)}>
          agregar
          {" "}
          Agregar{" "}
        </button>
      </div> */}
    </div>
  );
};
ItemCount.propTypes = {};

export default ItemCount;
