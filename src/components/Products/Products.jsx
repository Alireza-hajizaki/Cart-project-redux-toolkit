import React from 'react';
import data from '../../db.json'
import ECommerceCard from "../Cart/Cart";

const Products = () => {
    return (
        <div className='flex flex-wrap gap-5 mx-36 mt-8 mb-8'>
            {
                data.products.slice(0,3).map(product => (
                 <ECommerceCard
                     key={product.id}
                     {...product}
                 />
                ))
            }
        </div>
    );
};

export default Products;