import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';

import ItemDetail from "./ItemDetail";

import { productosCollection } from '../firebase';
import { getDocs } from 'firebase/firestore';



export default function ItemDetailContainer() {
    const [item, setItem] = useState([]);
    const [loading, setLoading] = useState(false);

    const { id } = useParams();


    useEffect(() => {
        setLoading(true);

        const getProductos = async () => {
            const productosSnapshot = await getDocs(productosCollection());
            const productosList = productosSnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            setItem(productosList.filter((item) => item.id === id));
            setLoading(false);
        };

        getProductos()

    }, [id]);

    if (loading) {
        return (
            <div className="d-flex justify-content-center">
                <div className="spinner-border text-success" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        );
    }

    return (
        <ItemDetail {...item[0]} key={item.id} />
    );
}
