"use client";
import React from 'react';

// Define the type for our trending items
type TrendingProduct = {
    id: number;
    title: string;
    price: number;
    image: string;
    tag: string;
};

const TrendingSection = () => {
    const trendingItems: TrendingProduct[] = [
        {
            id: 1,
            title: "Premium Wireless Headphones",
            price: 299.99,
            image: "https://images.pexels.com/photos/3394651/pexels-photo-3394651.jpeg",
            tag: "Best Seller"
        },
        {
            id: 2,
            title: "Minimalist Leather Watch",
            price: 150.00,
            image: "https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg",
            tag: "Trending"
        },
        {
            id: 3,
            title: "Smart Home Assistant",
            price: 89.99,
            image: "https://images.pexels.com/photos/4790264/pexels-photo-4790264.jpeg",
            tag: "New Arrival"
        },
        {
            id: 4,
            title: "Pro DSLR Camera Kit",
            price: 1200.00,
            image: "https://images.pexels.com/photos/51383/photo-camera-subject-photographer-51383.jpeg",
            tag: "Popular"
        }
    ];

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4">
                {/* Header Area */}
                <div className="flex flex-col md:flex-row justify-between items-center mb-12">
                    <div className="text-center md:text-left">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Trending Now</h2>
                        <p className="text-gray-500 mt-2 text-lg">Our most loved products this week.</p>
                    </div>
                    {/* <div className="mt-6 md:mt-0 flex gap-2">
                        <button className="btn btn-circle btn-outline btn-sm">❮</button>
                        <button className="btn btn-circle btn-outline btn-sm">❯</button>
                    </div> */}
                </div>

        
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {trendingItems.map((item: TrendingProduct) => (
                        <div key={item.id} className="group cursor-pointer">
                            <div className="relative overflow-hidden rounded-2xl bg-gray-100 aspect-square mb-4">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute top-4 left-4">
                                    <span className="badge badge-white shadow-sm font-semibold py-3 px-4 uppercase text-[10px]">
                                        {item.tag}
                                    </span>
                                </div>
                               
                                <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                    <button className="btn btn-primary w-full bg-orange-600 border-none text-white rounded-xl">
                                        View Details
                                    </button>
                                </div>
                            </div>
                            <h3 className="font-bold text-slate-800 group-hover:text-orange-600 transition-colors">
                                {item.title}
                            </h3>
                            <p className="text-orange-600 font-bold mt-1">${item.price}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TrendingSection;