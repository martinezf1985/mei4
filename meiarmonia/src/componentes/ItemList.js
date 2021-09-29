import React from "react";
import Item from "./Item"


export default function ItemList({ productos }) {
	return (
		<div className={"item-list"}>
			{productos.map((item) => (
				<Item {...item} key={item.id}></Item>
			))}
		</div>
	)
}