"use client";
import Link from 'next/link';
import React from 'react';

// Using 'type' as requested
type StatItem = {
    label: string;
    value: string;
};

type ValueCard = {
    icon: string;
    title: string;
    description: string;
};

const AboutPage = () => {
    // Explicitly typed arrays using the aliases above
    const stats: StatItem[] = [
        { label: "Active Users", value: "85K+" },
        { label: "Premium Products", value: "1.2K" },
        { label: "Cities Reached", value: "250+" },
        { label: "Success Rate", value: "99.9%" },
    ];

    const values: ValueCard[] = [
        {
            icon: "🎯",
            title: "Our Mission",
            description: "To democratize premium technology by making high-end electronics accessible to every household without compromise."
        },
        {
            icon: "🛡️",
            title: "Trust & Safety",
            description: "Every product in our catalog undergoes a 50-point quality check before it ever reaches your doorstep."
        },
        {
            icon: "🌍",
            title: "Sustainability",
            description: "We are committed to eco-friendly packaging and carbon-neutral shipping by the end of 2026."
        }
    ];

    return (
        <div className="bg-white min-h-screen">
            {/* --- Hero Section --- */}
            <section className="relative pt-20 pb-32 overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 relative z-10">
                    <div className="flex flex-col items-center text-center">
                        <div className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-widest text-orange-600 uppercase bg-orange-50 rounded-full">
                            Since 2024
                        </div>
                        <h1 className="text-5xl md:text-8xl font-black text-slate-900 leading-[0.9] tracking-tighter mb-8">
                            BEYOND THE <br />
                            <span className="text-orange-600">SHOPPING CART.</span>
                        </h1>
                        <p className="max-w-2xl text-lg md:text-xl text-slate-500 leading-relaxed">
                            SammStore isn't just a marketplace; it's a tech ecosystem designed to empower
                            your lifestyle through innovation and reliability.
                        </p>
                    </div>
                </div>

                {/* Background Decor */}
                <div className="absolute top-0 right-0 w-1/3 h-full bg-orange-50/50 -skew-x-12 -z-0 translate-x-20"></div>
            </section>

            {/* --- Stats Section (Dark Minimalist) --- */}
            <section className="bg-slate-900 py-20 mx-4 rounded-[3rem] shadow-2xl shadow-slate-200">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
                        {stats.map((stat: StatItem, idx: number) => (
                            <div key={idx} className="flex flex-col items-center lg:items-start border-l border-slate-800 pl-6">
                                <span className="text-4xl md:text-5xl font-black text-white mb-2 tracking-tighter">
                                    {stat.value}
                                </span>
                                <span className="text-orange-500 text-xs font-bold uppercase tracking-[0.2em]">
                                    {stat.label}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- Core Values Grid --- */}
            <section className="py-32 max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {values.map((item: ValueCard, idx: number) => (
                        <div
                            key={idx}
                            className="group p-12 rounded-[3.5rem] bg-gray-50 hover:bg-white border border-transparent hover:border-orange-100 hover:shadow-2xl hover:shadow-orange-100/50 transition-all duration-500"
                        >
                            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-3xl shadow-sm mb-8 group-hover:scale-110 group-hover:bg-orange-600 group-hover:text-white transition-all duration-500">
                                {item.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">{item.title}</h3>
                            <p className="text-slate-500 leading-relaxed font-medium">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* --- Image/Philosophy Section --- */}
            <section className="pb-32 max-w-7xl mx-auto px-4">
                <div className="flex flex-col lg:flex-row gap-12 items-center bg-orange-50 rounded-[4rem] p-8 lg:p-16">
                    <div className="w-full lg:w-1/2 overflow-hidden rounded-[3rem] shadow-xl">
                        <img
                            src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg"
                            alt="Innovation at SammStore"
                            className="w-full h-full object-cover aspect-video lg:aspect-square"
                        />
                    </div>
                    <div className="w-full lg:w-1/2 space-y-6">
                        <h2 className="text-4xl font-black text-slate-900 leading-tight">
                            "Innovation is the <br />
                            heart of everything <br />
                            we build."
                        </h2>
                        <div className="h-1.5 w-20 bg-orange-600 rounded-full"></div>
                        <p className="text-slate-600 text-lg">
                            We believe that technology should be invisible. It should just work,
                            making your life easier without demanding your constant attention.
                            That's the philosophy behind every product we curate.
                        </p>
                        <div className="pt-4">
                            <Link href={'/products'} className="px-8 py-4 bg-slate-900 text-white font-bold rounded-2xl hover:bg-orange-600 transition-colors duration-300">
                                View Our Collection
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutPage;