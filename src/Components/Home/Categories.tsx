import Link from "next/link";

type Category = {
    name: string;
    image: string;
    count: string;
}


const Categories = () => {
    const categories: Category[] = [
        {
            name: "Electronics",
            image: "https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg",
            count: "120+ Products"
        },
        {
            name: "Men's Fashion",
            image: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg",
            count: "80+ Products"
        },
        {
            name: "Accessories",
            image: "https://images.pexels.com/photos/1453008/pexels-photo-1453008.jpeg",
            count: "50+ Products"
        },
    ];

    return (
        <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between items-end mb-10">
                    <div>
                        <h2 className="text-3xl font-bold text-slate-900">Browse by Category</h2>
                        <p className="text-gray-500 mt-2">Find exactly what you need in our curated collections.</p>
                    </div>
                    <Link href={'/products'} className="btn btn-ghost text-orange-600 hidden md:flex">View All Categories →</Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {categories.map((cat, idx) => (
                        <div key={idx} className="group relative overflow-hidden rounded-2xl cursor-pointer shadow-lg h-64">
                            <img
                                src={cat.image}
                                alt={cat.name}
                                className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                                <h3 className="text-white text-xl font-bold">{cat.name}</h3>
                                <p className="text-gray-200 text-sm">{cat.count}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Categories