import React from "react";

import { Link } from "react-router-dom";

export default function Item({ id, title, description, price, pictureUrl, stock }) {

	return (
		<div className="col mb-4">
			<div className="card h-100">
				<Link to={`/detail/${id}`}>
					<img src={pictureUrl} className="card-img-top" alt="..." />
				</Link>
				<div className="card-body">
					<h5 className="card-title">{title}<span> ${price}</span></h5>
					<p className="card-text">{description}</p>
				</div>
				<div className="card-footer text-center">
					<Link type="button" className="btn btn-primary m-2" to={`/detail/${id}`}>
						Ver Producto
					</Link>
				</div>
			</div>
		</div>
	)
}