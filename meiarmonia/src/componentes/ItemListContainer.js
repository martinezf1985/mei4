import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getDocs, query, where } from 'firebase/firestore';

import ItemList from './ItemList';

import carritoContext from '../context/CartContext';
import { productosCollection } from '../firebase';


export default function ItemListContainer() {
	const [datos, setDatos] = useState([])
	const [loading, setLoading] = useState(false);
	const { cartSession } = useContext(carritoContext)

	const { categoryId } = useParams()

	useEffect(() => {

		cartSession()

		setLoading(true);

		const getProductos = async () => {

			const productosSnapshot = await getDocs(productosCollection());
			const productosList = productosSnapshot.docs.map(doc => ({
				id: doc.id,
				...doc.data()
			}));

			setDatos(productosList);
			setLoading(false);
		};

		const getCategories = async () => {

			const q = query(productosCollection(), where("category", "==", categoryId));

			const productosCategorySnapshot = await getDocs(q);
			const productosCategory = productosCategorySnapshot.docs.map(doc => ({
				id: doc.id,
				...doc.data()
			}));

			setDatos(productosCategory);
			setLoading(false);
		};

		if (categoryId === undefined) {
			getProductos()
		} else {
			getCategories()
		}
		// eslint-disable-next-line
	}, [categoryId]);

	if (loading) {
		return (
			<div className="d-flex justify-content-center m-3 p-3">
				<div className="spinner-border text-success" role="status">
					<span className="sr-only">Loading...</span>
				</div>
			</div>
		);
	};

	return (
		<ItemList productos={datos} />
	);
}