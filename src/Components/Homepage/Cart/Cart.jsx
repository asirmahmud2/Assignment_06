import React from 'react';
import { CiShoppingCart } from "react-icons/ci";

const Cart = ({ addCart, setaddCart }) => {
    const calculateTotal = () => {
        let total = 0;
        addCart.forEach(ele => {
            total = ele.price + total;
        });
        return total;
    }
    const handleRemove = (product) => {
        const newCart = addCart.filter(ele => ele.price !== product.price);
        setaddCart(newCart);
    }
    return (
        <div className="bg-white rounded-xl p-10 shadow-[0_8px_30px_rgba(0,0,0,0.08)] space-y-5">
            <h2 className='font-bold text-2xl'>Your Cart</h2>
            {   addCart.length==0? 
                    <div className="text-center text-gray-500 bg-gray-100 p-20 rounded-xl text-4xl">
                        <span className='text-8xl flex items-center justify-center'><CiShoppingCart /></span>
                        <p >Your cart is empty</p>
                    </div>
                :(
                    addCart.map(product => {
                        return <div className='bg-gray-100 p-5 rounded-xl flex justify-between items-center'>
                            <div className='flex gap-4 items-center'>
                                <div className=" p-2 rounded-full bg-white border-2 border-gray-200 w-fit">
                                    <img className="w-8 h-8" src={product.img} alt="" />
                                </div>
                                <div>
                                    <h3 className='text-xl font-bold'>{product.title}</h3>
                                    <p className='text-gray-500'>${product.price}</p>
                                </div>
                            </div>
                            <div>
                                <button
                                    onClick={() => handleRemove(product)}
                                    className='btn btn-ghost text-red-600'>Remove</button>
                            </div>
                        </div>
                    }))
            }
            <div className='flex justify-between'>
                <p className='text-gray-500'>Total</p>
                <p className='font-bold text-xl'>$ {calculateTotal()}</p>
            </div>
            <button onClick={() => setaddCart([])} disabled={addCart.length==0}
             className="btn rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] border-none w-full text-white">Proceed to Checkout</button>
        </div>
    );
};

export default Cart;