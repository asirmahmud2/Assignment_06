import React from 'react';
import banner from '../../../assets/banner.png'
import play from '../../../assets/Play.png'
import dot from '../../../assets/dot.png'

const Hero = () => {
    return (
        <div>
            <div className="hero min-h-screen container mx-auto">
                <div className="hero-content flex-col lg:flex-row-reverse flex-1 gap-20">
                    <img
                        src={banner}
                        className="rounded-lg shadow-2xl"
                    />
                    <div>
                        <p className='mb-5'><span className='bg-[#E1E7FF]  rounded-full p-2 px-5 inline-flex items-center gap-2 text-[#4F39F6] text-lg'> <img src={dot} alt="" /> New: AI-Powered Tools Available</span></p>
                        <h1 className="text-6xl font-bold flex-1">Supercharge Your <br /> Digital Workflow</h1>
                        <p className="py-6 text-gray-400">
                            Access premium AI tools, design assets, templates, and productivity <br />
                            software—all in one place. Start creating faster today. <br />
                            Explore Products
                        </p>
                        <div className='flex gap-4'>
                            <button className="btn btn-primary rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] border-none">Explore Products</button>
                            <button className="btn rounded-full bg-transparent border-2 flex items-center gap-2"><img src={play} alt="" /> Explore Products</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;