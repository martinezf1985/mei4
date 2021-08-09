import React, { useState } from "react";
  
const ItemCount = ({stock, initial, onAdd}) => {
    const [count, setCount] = useState(initial);
    return (
        <div >
            <div>
            <h1>contador: {count}</h1>
          {onAdd}
          <button className='but'  onClick={() => count < stock ? setCount(count + 1) : ''}> + </button>
          <button className='but'  onClick={() => count >= 1? setCount(  count - 1) : ''  } > - </button> 
            </div>

            <div>
              <button className='but'  onClick={onAdd}> añadir al carrito </button> 
                
            </div>
          
        </div>
      );
    }
ItemCount.propTypes = {
  

}

export default ItemCount
