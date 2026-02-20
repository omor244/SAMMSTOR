const FlashSale = () => {
    return (
        <section className="max-w-7xl mx-auto px-4 py-12">
            <div className="bg-slate-900 rounded-3xl overflow-hidden relative flex flex-col md:flex-row items-center">
                {/* Text Content */}
                <div className="p-8 md:p-16 flex-1 text-center md:text-left z-10">
                    <div className="badge badge-primary p-4 mb-4 font-bold">LIMITED TIME OFFER</div>
                    <h2 className="text-4xl md:text-6xl font-black text-white leading-tight">
                        Weekend Flash Sale <br />
                        <span className="text-orange-600">Up to 60% Off</span>
                    </h2>
                    <p className="text-gray-400 mt-6 text-lg max-w-md">
                        Upgrade your tech and style with our exclusive weekend deals. Valid until Sunday midnight!
                    </p>
                    <button className="btn btn-primary bg-orange-600 border-none hover:bg-orange-700 mt-8 px-10 rounded-full text-white">
                        Shop the Sale
                    </button>
                </div>

                {/* Image Content */}
                <div className="flex-1 relative h-64 md:h-[450px] w-full">
                    <img
                        src="https://images.pexels.com/photos/3184433/pexels-photo-3184433.jpeg"
                        alt="Sale Promotion"
                        className="object-cover w-full h-full md:rounded-l-[100px]"
                    />
                    {/* Decorative Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-transparent to-transparent hidden md:block"></div>
                </div>
            </div>
        </section>
    );
};

export default FlashSale