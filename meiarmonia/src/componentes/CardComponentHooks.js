import React, { useState, useEffect } from "react";
import Button from "./Button";





export default function CardComponentHooks(props) {
  const [count, setCount] = useState(0);
  
  // const [name, setName] = useState("");
  // const [lastName, setLastName] = useState("");

  // useEffect(() => {
  //   console.log("holaaaaaaaaaaaaaa", count);
  //   return () => {
  //     console.log('vamesss');
  //   };
  // }, [count]); 
  // console.log("se esta renderizando", new Date());
  return (
    <>
      <h1 className ='h1' >contador: {count}</h1>
      {props.count2}
      <div className= 'but3' > 
        <Button   text="restar" cuandohagoClick={() => setCount(count - 1)} />
      <Button  text="sumar" cuandohagoClick={() => setCount(count + 1)} />
      </div>  
     
      
    </>
  );
}


