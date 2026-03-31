import React from 'react';
import Card from './Card';

const ProductTab = ({ products, addCart, setaddCart }) => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10'>
            {
                products.map(product => {
                    return (
                        <Card
                            key={product.price}
                            product={product}
                            addCart={addCart}
                            setaddCart={setaddCart}
                        />
                    );
                })
            }
        </div>
    );
};

export default ProductTab;