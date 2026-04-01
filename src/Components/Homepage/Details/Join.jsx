import React from 'react';

const Join = () => {
    return (
        <div className='bg-linear-to-r from-[#4F39F6] to-[#9514FA]'>
            <div className='container mx-auto text-center p-20 space-y-3'>
                <div>
                    <h1 className='text-4xl font-bold text-white'>Ready to Transform Your Workflow?</h1>
                    <p className='text-gray-300'>Join thousands of professionals who are already using Digitools to work smarter.<br /> Start your free trial today.</p>
                </div>
                <div className='flex gap-4 justify-center mt-10'>
                    <button className="btn btn-primary rounded-full bg-white text-blue-500 border-none">Explore Products</button>
                    <button className="btn rounded-full bg-transparent border-2 flex items-center gap-2">Explore Products</button>
                </div>
                <p className='text-gray-300'>14-day free trial • No credit card required • Cancel anytime</p>
            </div>
        </div>
    );
};

export default Join;