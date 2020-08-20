import React from 'react';
import productList from '../productList'
import ProductCard from './ProductCard'
const ProductList = () =>{
    return (
        <div>
            {productList.map(product => <ProductCard product={product}/>)}
        </div>
    );
}

export default ProductList