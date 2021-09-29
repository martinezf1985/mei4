import React, { useContext } from "react";
import { Link } from "react-router-dom";
import carritoContext from "../context/CartContext";


export default function ItemCart({ id, title, price, pictureUrl, quantity }) {

    const { removeItem } = useContext(carritoContext)

    return (
        <div className="col mb-4">
            <div className="card h-50">
                <Link to={`/detail/${id}`} className="btn">
                    <div className="card-body">
                        <img src={pictureUrl} width="150px" height="auto" className="img-fluid" alt={title} />
                        <h5 className="card-title">{title}<span> ${price}</span></h5>
                        <div className="card-footer text-center">
                            <p className="card-text">{quantity} Unidad/es</p>
                        </div>
                    </div>
                </Link>

                <div>
                    <button className="btn btn-warning" onClick={(e) => { e.preventDefault(); removeItem(id) }}>Quitar producto</button>
                </div>

            </div>
        </div>
    )
}