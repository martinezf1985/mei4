import { useContext } from "react";
import { Link } from "react-router-dom";
import carritoContext from "../context/CartContext";
import ItemCart from "./ItemCart";
import Buyer from "./Buyer";

export default function Cart() {
    const { carrito, clear, price } = useContext(carritoContext);
    return (
        <>
            {carrito.length > 0 && (
                <div className="jumbotron">
                    <h1 className="display-4">Carrito de compras</h1>
                    <p className="lead">El total de tu carrito es de: ${price()}</p>
                    <button className="btn btn-danger" onClick={(e) => { e.preventDefault(); clear() }}>Vaciar Carrito</button>
                    <hr className="my-4" />

                    {carrito.map((item) => (
                        <ItemCart {...item} key={item.id}></ItemCart>
                    ))}

                    <Buyer />

                </div>
            )}

            {carrito.length === 0 && (
                <div className="jumbotron">
                    <h1 className="display-4">Carrito de compras</h1>
                    <p className="lead">El carrito se encuentra vacio!!!</p>
                    <hr className="my-4" />
                    <p>It uses utility classNamees for typography and spacing to space content out within the larger container.</p>
                    <Link className="btn btn-primary btn-lg" to="/" role="button">Inicio</Link>
                </div>
            )}
        </>
    )
}