import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useState } from "react"
import NavBar from "../src/componentes/NavBar";
import "./componentes/Style.css";
import ItemListContainer from "./componentes/ItemListContainer";
// import ItemCount from './componentes/ItemCount';
import ItemDetailContainer from "./componentes/ItemDetailContainer";
import { CartContext } from "./componentes/CartContext.js";

function App() {
  const [cart, setCart] = useState([]);
  return (
    <BrowserRouter>
      <CartContext.Provider value={[cart, setCart]}>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <ItemListContainer />
          </Route>
          <Route exact path="/detail/:id">
            <ItemDetailContainer />
          </Route>
        </Switch>
      </CartContext.Provider>
    </BrowserRouter>
  );
}

export default App;
