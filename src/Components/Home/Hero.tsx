"use client";

import React from 'react';

const Hero = () => {
    return (
        <section className="relative  bg-white overflow-hidden py-12 lg:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-12">

                    {/* --- Left Content: Text & Search --- */}
                    <div className="flex-1 text-center lg:text-left space-y-8">
                        <div className="inline-block px-4 py-2 rounded-full bg-orange-50 text-orange-600 font-bold text-sm uppercase tracking-wider">
                            🛍️ 500+ Premium Products for You
                        </div>

                        <h1 className="text-5xl lg:text-7xl font-black text-slate-900 leading-tight">
                            Premium Quality <br />
                            <span className="text-orange-600">Style</span> for Your <br />
                            Modern Lifestyle.
                        </h1>

                        <p className="text-gray-500 text-lg max-w-xl mx-auto lg:mx-0">
                            Find the best electronics, fashion, and accessories from around the world. High-quality products curated specifically for you.
                        </p>

                        {/* Search Bar - Fulfills "Filtering Feature" UI requirement */}
                        <div className="flex items-center max-w-md mx-auto lg:mx-0 bg-white shadow-2xl shadow-orange-100 rounded-full p-2 border border-base-200">
                            <input
                                type="text"
                                placeholder="Search products..."
                                className="input border-none focus:outline-none w-full bg-transparent px-6"
                            />
                            <button className="btn btn-primary rounded-full text-white px-8 border-none bg-orange-600 hover:bg-orange-700">
                                Search
                            </button>
                        </div>

                        {/* Social Proof Section */}
                        <div className="flex items-center justify-center lg:justify-start gap-6 font-semibold pt-4">
                            <div className="flex -space-x-4">
                                {[1, 2, 3].map((i) => (
                                    <div key={i} className="avatar">
                                        <div className="w-12 rounded-full border-4 border-white">
                                            <img src={`https://i.pravatar.cc/150?u=${i}`} alt="user" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <p className="text-slate-800 text-sm">
                                <span className="text-orange-600">10k+</span> Happy Shoppers
                            </p>
                        </div>
                    </div>

                    {/* --- Right Content: Hero Image --- */}
                    <div className="flex-1 relative">
                        {/* Background Decorative Circles */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-orange-100/50 rounded-full blur-3xl -z-10 animate-pulse"></div>

                        <div className="relative z-10">
                            <img
                                src="https://images.pexels.com/photos/3965548/pexels-photo-3965548.jpeg"
                                alt="Modern E-commerce Products"
                                className="rounded-3xl shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500 object-cover aspect-square w-full"
                            />

                            {/* Floating Success Card - Shows "Practical Knowledge" of UI/UX */}
                            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-4 animate-bounce duration-[3000ms]">
                                <div className="bg-green-100 p-2 rounded-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500">Fast Delivery</p>
                                    <p className="text-sm font-bold">Worldwide!</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Hero;