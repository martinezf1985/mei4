import React, { useState } from "react";
  
const ItemCount = ({stock, initial, onAdd}) => {
    const [count, setCount] = useState(initial);
    return (
        <div >
            <div>
            <h1>contador: {count}</h1>
          {onAdd}
          <button className='but' text="sumar" onClick={() => count < stock ? setCount(count + 1) : ''} />
          <button className='but' text="restar" onClick={() => count >= 1? setCount(  count - 1) : ''  } />
            </div>

            <div>
              <button className='but' text="añadir al carrito" onClick={onAdd} />
                
            </div>
          
        </div>
      );
    }
ItemCount.propTypes = {
  

}

export default ItemCount
