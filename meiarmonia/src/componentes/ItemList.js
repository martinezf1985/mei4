import React from "react";
import Item from "./Item"


export default function ItemList({ productos }) {
	return (
		<div className="row row-cols-1 row-cols-md-3">
			{productos.map((item) => (
				<Item {...item} key={item.id}></Item>
			))}
		</div>
	)
}