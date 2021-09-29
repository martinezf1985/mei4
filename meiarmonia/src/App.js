import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./index.css";
// pages
import { CarritoProvider } from "./context/CartContext";
import ItemListContainer from "./componentes/ItemListContainer";
import ItemDetailContainer from "./componentes/ItemDetailContainer";
import Contact from "./componentes/Contact";
import AcercaDe from "./componentes/AcercaDe";
import Cart from "./componentes/Cart";
import NavBar from "./componentes/NavBar";
function App() {
	return (
		<BrowserRouter>
			<CarritoProvider>
			<NavBar />
			<main className="">
				<Switch>

					<Route exact path="/">
						<ItemListContainer />
					</Route>

					<Route exact path="/detail/:id">
						<ItemDetailContainer />
					</Route>

					<Route exact path="/categories/:categoryId">
						<ItemListContainer />
					</Route>

					<Route exact path="/acerca_de">
						<AcercaDe />
					</Route>

					<Route exact path="/contacto">
						<Contact />
					</Route>

					<Route exact path="/cart">
						<Cart />
					</Route>

				</Switch>
			</main>
			</CarritoProvider>
		</BrowserRouter>
	);
}

export default App;
