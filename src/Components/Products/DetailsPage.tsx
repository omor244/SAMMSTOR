"use client"

import { useEffect, useState } from "react";
import Loading from "../Loading";

type Product = {
    id: number;
    title: string;
    price: number;
    category: string;
    image: string;
    description: string;
    tag?: string;
};

type DetailsPageProps = {
    id: string | number;
};

const DetailsPage = ({ id }: DetailsPageProps) => {
    const [loading, setLoading] = useState<boolean>(true);
    const [product, setProduct] = useState<Product | null>(null);
    const [quantity, setQuantity] = useState<number>(1);

    useEffect(() => {
        setLoading(true);
        fetch('/Products.json')
            .then(res => res.json())
            .then((data: Product[]) => {
                const foundProduct = data.find(item => item.id === Number(id));
                setProduct(foundProduct || null);
                setLoading(false);
            })
            .catch(err => {
                console.error("Error fetching product:", err);
                setLoading(false);
            });
    }, [id]);

    if (loading) {
        return <Loading></Loading>
    }

    if (!product) {
        return (
            <div className="text-center py-40">
                <h2 className="text-4xl font-bold text-slate-300 mb-4">404</h2>
                <p className="text-xl text-slate-500">Product not found!</p>
            </div>
        );
    }

    return (
        <div className="max-w-7xl mx-auto px-4 py-12 md:py-20 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                {/* --- IMAGE SECTION --- */}
                <div className="relative group">
                    <div className="absolute -inset-4 bg-orange-100/50 rounded-[3rem] blur-2xl group-hover:bg-orange-200/50 transition duration-700"></div>
                    <div className="relative bg-white border border-slate-100 rounded-[3rem] p-12 shadow-sm flex justify-center items-center overflow-hidden">
                        {product.tag && (
                            <span className="absolute top-8 left-8 z-50 bg-slate-900 text-white text-xs font-bold px-4 py-2 rounded-full uppercase tracking-tighter">
                                {product.tag}
                            </span>
                        )}
                        <img
                            src={product.image}
                            alt={product.title}
                            className="max-h-[550px] object-contain transform transition-transform duration-700 group-hover:scale-105"
                        />
                    </div>
                </div>

                {/* --- CONTENT SECTION --- */}
                <div className="flex flex-col space-y-8">
                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <span className="text-orange-600 font-extrabold tracking-[0.2em] uppercase text-xs px-3 py-1 bg-orange-50 rounded-md">
                                {product.category}
                            </span>
                            <div className="h-[1px] flex-1 bg-slate-100"></div>
                        </div>
                        <h1 className="text-4xl md:text-6xl  font-black text-slate-900 leading-tight">
                            {product.title}
                        </h1>
                        <div className="flex items-center gap-4">
                            <p className="text-4xl font-bold text-slate-900">${product.price}</p>
                            <span className="text-slate-400 line-through text-xl">${(product.price * 1.2).toFixed(2)}</span>
                        </div>
                    </div>

                    <p className="text-slate-500 leading-relaxed text-lg max-w-xl">
                        {product.description}
                    </p>

                    {/* Quantity & Customization */}
                    <div className="space-y-6 pt-4">
                        <div className="flex items-center gap-6">
                            <div className="flex items-center border-2 border-slate-100 rounded-2xl p-1">
                                <button
                                    onClick={() => setQuantity(q => Math.max(1, q - 1))}
                                    className="w-12 h-12 flex items-center justify-center hover:bg-slate-50 rounded-xl transition-colors text-xl font-bold"
                                >-</button>
                                <span className="w-12 text-center font-bold text-lg">{quantity}</span>
                                <button
                                    onClick={() => setQuantity(q => q + 1)}
                                    className="w-12 h-12 flex items-center justify-center hover:bg-slate-50 rounded-xl transition-colors text-xl font-bold"
                                >+</button>
                            </div>
                            <p className="text-sm font-bold text-slate-400">Total: <span className="text-slate-900">${(product.price * quantity).toFixed(2)}</span></p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <button className="flex-[2] btn btn-lg bg-orange-600 hover:bg-orange-700 border-none text-white rounded-2xl shadow-xl shadow-orange-200 h-16 text-lg font-bold transition-all hover:-translate-y-1">
                                Add to Cart
                            </button>
                            <button className="flex-1 btn btn-lg btn-outline border-slate-200 hover:bg-slate-900 hover:border-slate-900 hover:text-white rounded-2xl h-16 transition-all group">
                                <span className="group-hover:scale-125 transition-transform duration-300">❤</span> Wishlist
                            </button>
                        </div>
                    </div>

                    {/* --- TRUST BADGES --- */}
                    <div className="grid grid-cols-2 gap-4 pt-10 border-t border-slate-100">
                        <div className="flex items-start gap-3">
                            <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center text-orange-600 text-xl">🚚</div>
                            <div>
                                <h4 className="font-bold text-sm text-slate-900">Fast Shipping</h4>
                                <p className="text-xs text-slate-500">Delivery in 2-3 business days.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center text-orange-600 text-xl">🛡️</div>
                            <div>
                                <h4 className="font-bold text-sm text-slate-900">Secure Payment</h4>
                                <p className="text-xs text-slate-500">100% encrypted checkout.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailsPage;