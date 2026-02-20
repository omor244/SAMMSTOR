"use client"

import { useEffect, useState } from "react";
import ProductCard from "../Card/ProductCard";
import Loading from "../Loading";


type Product = {
    id: number;
    title: string;
    price: number;
    category: string;
    image: string;
    description?: string;
    tag?: string;
};

const ProductsPage = () => {
    // 2. State management with Types
    const [loading, setloading] = useState<boolean>(false)
    const [products, setProducts] = useState<Product[]>([]);
    const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

   
    const [selectedCategory, setSelectedCategory] = useState<string>("All");
    const [priceRange, setPriceRange] = useState<number>(1500); // Max price in your JSON is 1200

    useEffect(() => {
        fetch('/Products.json')
        .then(res => res.json())
        .then((data: Product[]) => {
                setloading(true)
                setProducts(data);
                setFilteredProducts(data);
                setloading(true)
        });
        
            setloading(false)
    }, []);

    // 3. Dynamic Filtering Logic
    useEffect(() => {
        let result = products;

        // Filter by Category
        if (selectedCategory !== "All") {
            result = result.filter(p => p.category.toLowerCase() === selectedCategory.toLowerCase());
        }

        // Filter by Price Range
        result = result.filter(p => p.price <= priceRange);

        setFilteredProducts(result);
    }, [selectedCategory, priceRange, products]);

    if(!loading) return <Loading></Loading>

    const categories = ["All", "Electronics", "Jewelery", "Men's Clothing", "Accessories"];

    return (
        <div className="max-w-7xl mx-auto px-4 py-10">
            <h1 className="text-4xl font-black text-slate-900 mb-10">Our <span className="text-orange-600">Products</span></h1>

            <div className="flex flex-col lg:flex-row gap-8">
                {/* --- FILTER SIDEBAR --- */}
                <aside className="w-full lg:w-64 space-y-8 bg-gray-50 p-6 rounded-3xl h-fit">
                    {/* Category Filter */}
                    <div>
                        <h3 className="font-bold text-slate-800 mb-4">Categories</h3>
                        <div className="flex flex-wrap lg:flex-col gap-2">
                            {categories.map(cat => (
                                <button
                                    key={cat}
                                    onClick={() => setSelectedCategory(cat)}
                                    className={`btn btn-sm justify-start normal-case border-none ${selectedCategory === cat ? 'bg-orange-600 text-white' : 'bg-white text-slate-600 hover:bg-orange-100'}`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Price Filter */}
                    <div>
                        <h3 className="font-bold text-slate-800 mb-4">Price Range</h3>
                        <input
                            type="range"
                            min="0"
                            max="1500"
                            value={priceRange}
                            onChange={(e) => setPriceRange(Number(e.target.value))}
                            className="range range-primary range-sm [--range-shdw:#ea580c]"
                        />
                        <div className="flex justify-between text-xs font-bold mt-2 text-slate-500">
                            <span>$0</span>
                            <span className="text-orange-600">Up to ${priceRange}</span>
                        </div>
                    </div>
                </aside>

                {/* --- PRODUCT GRID --- */}
                <main className="flex-1">
                    {filteredProducts.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                            {filteredProducts.map((product) => (
                                <ProductCard product={product} key={product.id} />
                            ))}
                        </div>
                    ) : (
                        <div className="flex flex-col items-center justify-center py-20 bg-gray-50 rounded-3xl">
                            <span className="text-5xl mb-4">🔍</span>
                            <h3 className="text-xl font-bold">No products found</h3>
                            <p className="text-gray-500">Try adjusting your filters.</p>
                            <button
                                onClick={() => { setSelectedCategory("All"); setPriceRange(1500); }}
                                className="btn btn-ghost text-orange-600 mt-4"
                            >
                                Reset All Filters
                            </button>
                        </div>
                    )}
                </main>
            </div>
        </div>
    );
};

export default ProductsPage;