"use client";

import Link from 'next/link';


type Products = {
    id: number;
    title: string;
    price: number;
    category: string;
    image: string;
    description?: string; 
    tag?: string;
};

const ProductCard = ({ product }: { product: Products }) => {

    return (
        <div className="group bg-white rounded-3xl border border-gray-100 p-4 transition-all duration-300 hover:shadow-2xl hover:shadow-orange-100 hover:-translate-y-2 flex flex-col h-full">
            {/* Image Container */}
            <div className="relative aspect-square overflow-hidden rounded-2xl bg-gray-50 mb-4">
                <img
                    src={product.image}
                    alt={product.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Badge/Tag */}
                {product.tag && (
                    <div className="absolute top-3 left-3">
                        <span className="bg-slate-900 text-white text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
                            {product.tag}
                        </span>
                    </div>
                )}

                {/* Quick Actions (Appear on Hover) */}
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                    <Link href={`/products/${product.id}`} className="btn btn-circle bg-white hover:bg-orange-600 hover:text-white border-none shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                    </Link>
                    {/* <button className="btn btn-circle bg-white hover:bg-orange-600 hover:text-white border-none shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-75">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                    </button> */}
                </div>
            </div>

            {/* Product Info */}
            <div className="flex flex-col flex-grow space-y-2">
                <div className="flex justify-between items-start">
                    <p className="text-[10px] font-bold text-orange-600 uppercase tracking-widest bg-orange-50 px-2 py-0.5 rounded">
                        {product.category}
                    </p>
                    <div className="flex items-center gap-1 text-xs font-bold text-slate-400">
                        <span className="text-yellow-400">★</span> 4.8
                    </div>
                </div>

                <Link href={`/products/${product.id}`}>
                    <h3 className="text-lg font-bold text-slate-800 line-clamp-1 hover:text-orange-600 transition-colors">
                        {product.title}
                    </h3>
                </Link>

                {/* Short Description - Requirement Added */}
                <p className="text-gray-500 text-xs leading-relaxed line-clamp-2">
                    {product.description}
                </p>

                <div className="pt-4 mt-auto border-t border-gray-50 flex items-center justify-between">
                    <span className="text-xl font-black text-slate-900">
                        ${product.price.toLocaleString()}
                    </span>
                    <Link href={`/products/${product.id}`} className="text-sm font-bold text-orange-600 hover:underline">
                        Details +
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;