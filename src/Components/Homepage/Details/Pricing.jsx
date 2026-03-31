import React from 'react';
import { IoIosCheckmark } from "react-icons/io";

const Pricing = () => {
    return (
        <div>
            <div className='container mx-auto p-20 space-y-3'>
                <div className="text-center">
                    <h2 className='text-4xl font-bold'>Simple, Transparent Pricing</h2>
                    <p className='text-gray-400 '>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
                </div>


                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10'>
                    <div className="card w-full h-full bg-base-100 shadow-sm">
                        <div className="card-body">
                            <h2 className="text-3xl font-bold">Starter</h2>
                            <p className='text-gray-500 grow-0'>Perfect for getting started</p>
                            <span className="text-xl mt-5 mb-5 text-left"><span className='text-4xl font-bold text-left'>$0</span>/month</span>
                            <ul className='grow'>
                                <li className='flex items-center'>
                                    <span className="text-4xl text-success"><IoIosCheckmark /></span>
                                    <span>Access to 10 free tools</span>
                                </li>
                                <li className='flex items-center'>
                                    <span className="text-4xl text-success"><IoIosCheckmark /></span>
                                    <span>Basic templates</span>
                                </li>
                                <li className='flex items-center'>
                                    <span className="text-4xl text-success"><IoIosCheckmark /></span>
                                    <span>Community support</span>
                                </li>
                                <li className='flex items-center'>
                                    <span className="text-4xl text-success"><IoIosCheckmark /></span>
                                    <span>1 project per month</span>
                                </li>
                            </ul>
                            <div className="mt-6">
                                <button className="btn rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] border-none w-full text-white">Get Started Free</button>
                            </div>
                        </div>
                    </div>
                    <div className="card w-full bg-base-100 shadow-sm relative bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white">
                        <div className="card-body">
                            <span className="badge badge-lg badge-warning absolute -top-2 left-35 rounded-full">Most Popular</span>
                            <h2 className="text-3xl font-bold">Pro</h2>
                            <p>Best for professionals</p>
                            <span className="text-xl mt-5 mb-5"><span className='text-4xl font-bold'>$29</span>/month</span>
                            <ul>
                                <li className='flex items-center'>
                                    <span className="text-4xl text-success"><IoIosCheckmark /></span>
                                    <span>Access to all premium tools</span>
                                </li>
                                <li className='flex items-center'>
                                    <span className="text-4xl text-success"><IoIosCheckmark /></span>
                                    <span>Unlimited templates</span>
                                </li>
                                <li className='flex items-center'>
                                    <span className="text-4xl text-success"><IoIosCheckmark /></span>
                                    <span>Priority support</span>
                                </li>
                                <li className='flex items-center'>
                                    <span className="text-4xl text-success"><IoIosCheckmark /></span>
                                    <span>Unlimited projects</span>
                                </li>
                                <li className='flex items-center'>
                                    <span className="text-4xl text-success"><IoIosCheckmark /></span>
                                    <span>Cloud sync</span>
                                </li>
                                <li className='flex items-center'>
                                    <span className="text-4xl text-success"><IoIosCheckmark /></span>
                                    <span>Advanced analytics</span>
                                </li>
                            </ul>
                            <div className="mt-6">
                                <button className="btn rounded-full bg-white border-none w-full text-blue-500">Start Pro Trial</button>
                            </div>
                        </div>
                    </div>
                    <div className="card w-full h-full bg-base-100 shadow-sm">
                        <div className="card-body">
                            <h2 className="text-3xl font-bold">Enterprise</h2>
                            <p className='text-gray-500 grow-0'>For teams and businesses</p>
                            <span className="text-xl mt-5 mb-5 text-left"><span className='text-4xl font-bold text-left'>$99</span>/month</span>
                            <ul className='grow'>
                                <li className='flex items-center'>
                                    <span className="text-4xl text-success"><IoIosCheckmark /></span>
                                    <span>Everything in Pro</span>
                                </li>
                                <li className='flex items-center'>
                                    <span className="text-4xl text-success"><IoIosCheckmark /></span>
                                    <span>Team collaboration</span>
                                </li>
                                <li className='flex items-center'>
                                    <span className="text-4xl text-success"><IoIosCheckmark /></span>
                                    <span>Custom integrations</span>
                                </li>
                                <li className='flex items-center'>
                                    <span className="text-4xl text-success"><IoIosCheckmark /></span>
                                    <span>Dedicated support</span>
                                </li>
                                <li className='flex items-center'>
                                    <span className="text-4xl text-success"><IoIosCheckmark /></span>
                                    <span>SLA guarantee</span>
                                </li>
                                <li className='flex items-center'>
                                    <span className="text-4xl text-success"><IoIosCheckmark /></span>
                                    <span>Custom branding</span>
                                </li>
                            </ul>
                            <div className="mt-6">
                                <button className="btn rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] border-none w-full text-white">Contact Sales</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pricing;