import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "../src/componentes/NavBar";
import "./componentes/Style.css";
import ItemListContainer from "./componentes/ItemListContainer";
// import ItemCount from './componentes/ItemCount';
import ItemDetailContainer from "./componentes/ItemDetailContainer";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <ItemListContainer />
        </Route>
        <Route exact path="/item/:id">
          <ItemDetailContainer />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
