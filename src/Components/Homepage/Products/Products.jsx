import React, { useState } from 'react';
import { use } from 'react';
import Card from './Card';
import ProductTab from './ProductTab';
import Cart from '../Cart/Cart';

const Products = ({ productsPromise, addCart, setaddCart }) => {
    const products = use(productsPromise);
    const [isClicked, setIsClicked]= useState(false);

    return (
        <div>
            <div className='container mx-auto p-20 space-y-3'>
                <div className="text-center">
                    <h2 className='text-4xl font-bold mb-3'>Premium Digital Tools</h2>
                    <p className='text-gray-400 '>Choose from our curated collection of premium digital products designed <br /> to boost your productivity and creativity.</p>
                </div>
                <div className="flex justify-center mt-10">
                    <div className="flex bg-gray-200 rounded-full p-1 w-fit">
                        <button onClick={()=>setIsClicked(false)} 
                        className="btn px-6 py-2 rounded-full text-white bg-linear-to-r from-[#4F39F6] to-[#9514FA] shadow-md">
                            Products
                        </button>
                        <button onClick={()=>setIsClicked(true)}
                        className="btn px-6 py-2 rounded-full text-gray-700">
                            Cart ({addCart.length})
                        </button>
                    </div>
                </div>

                {
                    isClicked? <Cart addCart={addCart} setaddCart={setaddCart}></Cart>
                    :<ProductTab products={products} addCart={addCart} setaddCart={setaddCart}></ProductTab>
                }
            </div>
        </div>
    );
};

export default Products;