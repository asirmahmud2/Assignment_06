import React from 'react';

const Rating = () => {
    return (
        <div className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] mb-10'>
            <div className='container mx-auto flex justify-around p-10 items-center'>
                <div className='text-center space-y-4'>
                    <h1 className='text-5xl font-extrabold text-white'>50K+</h1>
                    <p className='text-gray-200'>Active Users</p>
                </div>
                <div className="border-l border-gray-300 h-15"></div>
                <div className='text-center space-y-4'>
                    <h1 className='text-5xl font-extrabold text-white'>200+</h1>
                    <p className='text-gray-200'>Premium Tools</p>
                </div>
                <div className="border-l border-gray-300 h-15"></div>
                <div className='text-center space-y-4'>
                    <h1 className='text-5xl font-extrabold text-white'>4.9</h1>
                    <p className='text-gray-200'>Rating</p>
                </div>
            </div>
        </div>
    );
};

export default Rating;