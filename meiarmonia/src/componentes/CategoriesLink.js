// i
import { collection, getDocs, query, where } from 'firebase/firestore';
import { getData } from '../firebase';
import { useState, useEffect } from "react";

import { Link } from "react-router-dom"


const getCategories = (productos) => {
    const categories = productos.map(producto => producto.category)
    return [...new Set(categories)]
}

export default function CategoriesLink() {
    const [itemsToRender, setItemsToRender] = useState([]);

  useEffect(() => {
    
    const getItemsToRender = async () => {
     
      const itemsToRenderCollection = collection(getData(), 'productos');
      console.log('itemsToRenderCollection ', itemsToRenderCollection )

      
      const itemsToRenderSnapshot = await getDocs(itemsToRenderCollection);
      console.log('itemsToRenderSnapshot ', itemsToRenderSnapshot )

      
      const itemsToRenderList = itemsToRenderSnapshot.docs.map(doc => ({
        
        id: doc.id,
        ...doc.data()
      }));
      console.log('itemsTRenderList ', itemsToRenderList )
      
      console.log(itemsToRenderList);
      setItemsToRender(itemsToRenderList);
    };
    
    getItemsToRender();

    
  }, []);

    return (
        <>
            {getCategories(itemsToRender).map((category) => (
              
                <Link className="dropdown-item cart" to={`/categories/${category}`} key={category}>{category}</Link>
                
            ))}
        </>
    )
}