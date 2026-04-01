import React from 'react';
import { IoIosCheckmark } from "react-icons/io";

const Card = ({ product, addCart, setaddCart }) => {

    let isSelected = false;
    addCart.forEach((item) => {
        if (item.price === product.price) {
            isSelected = true;
        }
    });
    const badgeDesign = () => {
        if (product.badge == 'New')
            return "text-[#0A883E] bg-[#DBFCE7]";
        else if (product.badge == 'Popular')
            return "text-blue-400 bg-[#E1E7FF]";
        else
            return "text-[#BB4D00] bg-[#FEF3C6]";
    }

    const addToCart = () => {
        setaddCart([...addCart, product]);
    }
    return (
        <div className="card w-full h-full bg-base-100 shadow-sm relative">
            <div className="card-body">
                <span className={`badge badge-lg absolute top-3 right-3 rounded-full 
                    ${badgeDesign()}`}>{product.badge}</span>

                <div className=" p-2 rounded-full border-2 border-gray-100 w-fit">
                    <img className="w-8 h-8" src={product.img} alt="" />
                </div>
                <h2 className="text-2xl font-bold">{product.title}</h2>
                <p className='text-gray-500 grow-0'>{product.description}</p>
                <span className="mt-5 mb-5 text-left"><span className='text-2xl font-bold text-left'>{product.price}</span>/month</span>
                <ul className='grow'>
                    {
                        product.features.map(feature => {
                            return <li className='flex items-center'>
                                <span className="text-4xl text-success"><IoIosCheckmark /></span>
                                <span>{feature}</span>
                            </li>
                        })
                    }
                </ul>
                <div className="mt-6">
                    <button
                        onClick={() => addToCart()} disabled={isSelected}
                        className="btn rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] border-none w-full text-white">
                        {
                            isSelected ? "Added To Cart" : "Buy Now"
                        }
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Card;