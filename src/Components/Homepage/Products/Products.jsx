import React from 'react';
import { use } from 'react';
import Card from './Card';

const Products = ({ productsPromise }) => {
    const products = use(productsPromise);

    return (
        <div>
            <div className='container mx-auto p-20 space-y-3'>
                <div className="text-center">
                    <h2 className='text-4xl font-bold mb-3'>Simple, Transparent Pricing</h2>
                    <p className='text-gray-400 '>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
                </div>
                <div className="flex justify-center mt-10">
                    <div className="flex bg-gray-200 rounded-full p-1 w-fit">
                        <button className="btn px-6 py-2 rounded-full text-white bg-linear-to-r from-[#4F39F6] to-[#9514FA] shadow-md">
                            Products
                        </button>
                        <button className="btn px-6 py-2 rounded-full text-gray-700">
                            Cart (2)
                        </button>
                    </div>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10'>
                    {
                        products.map(product => {
                            return <Card key={product.price} product={product}></Card>
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default Products;