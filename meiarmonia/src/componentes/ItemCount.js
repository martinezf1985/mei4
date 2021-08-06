import React, { useState } from "react";
import Button from "./button";


  
const ItemCount = props => {
    const [count, setCount] = useState(0);
    return (
        <div>
            <div>
            <h1>contador: {count}</h1>
          {props.count2}
          <Button text="sumar" cuandohagoClick={() => setCount(count + 1)} />
          <Button text="restar" cuandohagoClick={() => setCount(count - 1)} />
            </div>
            <div>
                <Button text="agregar producto" cuandohagoClick={() => setCount(count + 1)} />
            </div>
          
        </div>
      );
    }
ItemCount.propTypes = {

}

export default ItemCount
