import { useContext } from "react";
import { Link } from "react-router-dom";
import {CartContext} from "./CartContext";
import Item from "./Item";
// import Buyer from "./Buyer";

export default function Cart(props) {
    // const { carrito , price } = useContext(CartContext);
    return (
        <>
            {/* {carrito.length > 0 && (
                <div className="jumbotron">
                    <h1 className="display-4">Carrito de compras</h1>
                    <p className="lead">El total de tu carrito es de: ${price()}</p>
                    <button className="btn btn-danger" onClick={(e) => { e.preventDefault();  }}>Vaciar Carrito</button>
                    <hr className="my-4" />

                    {carrito.map((item) => (
                        <Item {...item} key={item.id}></Item>
                    ))} */}

                    {/* <Buyer /> */}

                {/* </div>
            )}

            {carrito.length === 0 && (
                <div className="jumbotron">
                    <h1 className="display-4">Carrito de compras</h1>
                    <p className="lead">El carrito se encuentra vacio!!!</p>
                    <hr className="my-4" />
                    <p>It uses utility classNamees for typography and spacing to space content out within the larger container.</p>
                    <Link className="btn btn-primary btn-lg" to="/" role="button">Inicio</Link>
                </div>
            )} */}
            aqui va el carrito
        </>
    )
}