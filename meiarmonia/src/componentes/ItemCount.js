import React, { useState } from "react";


const ItemCount = ({ stock, initial, onAdd }) => {
  const [count, setCount] = useState(initial);
  const NumberContext = React.createContext();
  return (
    
    <div>
      <NumberContext.Consumer>
      {value => <div>count {count}.</div>}
    </NumberContext.Consumer>
      <div>
        <div>
          {count} {onAdd}{" "}
        </div>
        {/* <h1>contador: </h1> */}

        <button
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
        </button>
      </div>

      <div>
        <button className="but" onClick={onAdd}>
          {" "}
          Add{" "}
        </button>
      </div>
      
    </div>
  );
};
ItemCount.propTypes = {};

export default ItemCount;
