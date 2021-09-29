import { productos } from "../auxs/products"

import { Link } from "react-router-dom"


const getCategories = (productos) => {
    const categories = productos.map(producto => producto.category)
    return [...new Set(categories)]
}

export default function CategoriesLink() {
    return (
        <>
            {getCategories(productos).map((category) => (
                <Link className="dropdown-item" to={`/categories/${category}`} key={category}>{category}</Link>
            ))}
        </>
    )
}