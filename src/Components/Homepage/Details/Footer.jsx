import React from 'react';
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <div className='bg-[#101727]'>
            <div className='container mx-auto p-20 pb-10 space-y-3'>
                <div className='grid grid-cols-6 gap-5'>
                    <div className='col-span-2 space-y-3'>
                        <h1 className='text-4xl font-bold text-white'>DigiTools</h1>
                        <p className='text-gray-500'>Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.</p>
                    </div>
                    <div className="space-y-2">
                        <h1 className='text-xl font-bold text-white'>DigiTools</h1>
                        <p className='text-gray-500'>Pricing</p>
                        <p className='text-gray-500'>Features</p>
                        <p className='text-gray-500'>Templates</p>
                        <p className='text-gray-500'>Integrations</p>
                    </div>
                    <div className="space-y-2">
                        <h1 className='text-xl font-bold text-white'>Company</h1>
                        <p className='text-gray-500'>About</p>
                        <p className='text-gray-500'>Blog</p>
                        <p className='text-gray-500'>Careers</p>
                        <p className='text-gray-500'>Press</p>
                    </div>
                    <div className="space-y-2">
                        <h1 className='text-xl font-bold text-white'>Resources</h1>
                        <p className='text-gray-500'>Documentation</p>
                        <p className='text-gray-500'>Help Center</p>
                        <p className='text-gray-500'>Community</p>
                        <p className='text-gray-500'>Contact</p>
                    </div>
                    <div className="space-y-2">
                        <h1 className='text-xl font-bold text-white'>Social Links</h1>
                        <div className='flex gap-3'>
                            <div className=" p-2 rounded-full border-2 bg-white border-gray-100 w-fit">
                                <span className="w-8 h-8"><FaInstagramSquare /></span>
                            </div>
                            <div className=" p-2 rounded-full border-2 bg-white border-gray-100 w-fit">
                                <span className="w-8 h-8"><FaFacebookSquare /></span>
                            </div>
                            <div className=" p-2 rounded-full border-2 bg-white border-gray-100 w-fit">
                                <span className="w-8 h-8"><FaXTwitter /></span>
                            </div>
                        </div>
                    </div>
                </div>

                <hr className='text-gray-500 mt-15' />
                <div className='flex justify-between text-gray-500 mt-7'>
                    <p>© 2026 Digitools. All rights reserved.</p>
                    <div className='flex gap-7'>
                        <p>Privacy Policy </p>
                        <p>Terms of Service </p>
                        <p>Cookies</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;