import React from 'react';
import user from '../../../assets/user.png'
import rocket from '../../../assets/rocket.png'
import pac from '../../../assets/package.png'

const Getstarted = () => {
    return (
        <div className='bg-[#F9FAFC]'>
            <div className='container mx-auto text-center p-7 md:p-10 lg:p-20 space-y-3'>
                <h2 className='text-4xl font-bold'>Get Started in 3 Steps</h2>
                <p className='text-gray-400 '>Start using premium digital tools in minutes, not hours.</p>


                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10'>
                    <div className="card bg-base-100 p-5 shadow-sm relative">
                        <span className="bg-blue-400 w-8 h-8 flex items-center justify-center rounded-full text-white text-right absolute right-5 mb-5">
                            01
                        </span>
                        <figure className="px-10 pt-10">
                            <img
                                src={user}
                                alt="Shoes"
                                className="rounded-full bg-[#E1E7FF] p-4" />
                        </figure>
                        <div className="card-body items-center text-center ">
                            <h2 className="text-lg font-bold">Create Account</h2>
                            <p className='text-gray-400'>Sign up for free in seconds. No credit card <br /> required to get started.</p>

                        </div>
                    </div>

                    <div className="card bg-base-100 p-5 shadow-sm relative">
                        <span className="bg-blue-400 w-8 h-8 flex items-center justify-center rounded-full text-white text-right absolute right-5 mb-5">
                            02
                        </span>
                        <figure className="px-10 pt-10">
                            <img
                                src={pac}
                                alt="Shoes"
                                className="rounded-full bg-[#E1E7FF] p-4" />
                        </figure>
                        <div className="card-body items-center text-center ">
                            <h2 className="text-lg font-bold">Choose Products</h2>
                            <p className='text-gray-400'>Browse our catalog and select the tools <br /> that fit your needs.</p>

                        </div>
                    </div>

                    <div className="card bg-base-100 p-5 shadow-sm relative">
                        <span className="bg-blue-400 w-8 h-8 flex items-center justify-center rounded-full text-white text-right absolute right-5 mb-5">
                            03
                        </span>
                        <figure className="px-10 pt-10">
                            <img
                                src={rocket}
                                alt="Shoes"
                                className="rounded-full bg-[#E1E7FF] p-4 object-contain" />
                        </figure>
                        <div className="card-body items-center text-center ">
                            <h2 className="text-lg font-bold">Start Creating</h2>
                            <p className='text-gray-400'>Download and start using your premium <br /> tools immediately.</p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Getstarted;