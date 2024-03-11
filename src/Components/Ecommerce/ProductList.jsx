import axios from 'axios';
import React, { useEffect, useState } from 'react'

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('/api/products')
            .then(response => {
                setProducts(response.data);
            })
            .catch(error => {
                console.error('Error fetching product: ', error);
            })
    }, []);

  return (
    <div>
        {products.map(product => (
            <div>
                <img src={product.image} alt={product.name} />
                <h3>{product.name}</h3>
                <p>{product.price}</p>
                <button>Add to Cart</button>
            </div>
        ))}
    </div>
  )
}

export default ProductList