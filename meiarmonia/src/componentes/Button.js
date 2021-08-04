import React, { useState  } from "react"

export default function Button(props ) {
  const [text, setText] = useState();
    return (
     
     <div className='Button'>
       <button className='but3'   tex ="Guardar" onClick={() => props.cuandohagoClick("hola soy el hijo")}>
     {props.text}
   </button>
   </div>
      
    );
  }
  