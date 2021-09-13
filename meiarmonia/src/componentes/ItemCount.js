import React, { useState } from "react";

const ItemCount = (props) => {
  const [count, setCount] = useState(props.initial);
  const[stockProd, setStockProd]=useState(props.stock);
  const NumberContext = React.createContext();

  const sum = ()=>{
    if (count< stockProd){
      setCount(count + 1);
    }
  }

  const rest=()=>{
    if (count> 1){
      setCount(count - 1);
    }
  }
  

  return (
    <div>
      <NumberContext.Consumer>
        {(value) => <div>count {count}</div>}
      </NumberContext.Consumer>
      <div>
        <div>
          {count} {props.onClick}{" "}
        </div>
        {/* <h1>contador: </h1> */}
        <button className="but" onclick={()=> sum()}>+</button>
        <button className="but" onclick={()=> rest()}>-</button>
        <button className="but" onClick={()=>props.onClick(count)}>agregar</button>

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
