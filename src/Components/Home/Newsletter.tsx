"use client";
import React from 'react';
import Swal from 'sweetalert2';

// Define type for our benefits list
type Benefit = {
    id: number;
    text: string;
};

const Newsletter = () => {
    const benefits: Benefit[] = [
        { id: 1, text: "Early access to sales" },
        { id: 2, text: "Exclusive discount codes" },
        { id: 3, text: "New product notifications" },
    ];

    const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // To get values easily without errors:
        const target = e.currentTarget;
        const email = target.email.value
        if (email) {
         
            Swal.fire({
                title: 'Success!',
                text: 'Thank you for subscribing to SammStore!',
                icon: 'success',
                confirmButtonColor: '#ea580c', 
                confirmButtonText: 'Great!'
            });

            target.reset(); 
        }
        // console.log("Email submitted:", email);
    };

    return (
        <section className="py-16 px-4">
            <div className="max-w-7xl mx-auto bg-orange-600 rounded-[2rem] overflow-hidden relative shadow-2xl shadow-orange-200">
                {/* Decorative Background Pattern (SVG) */}
                <div className="absolute top-0 right-0 opacity-10 pointer-events-none">
                    <svg width="400" height="400" fill="none" viewBox="0 0 400 400">
                        <circle cx="200" cy="200" r="150" stroke="white" strokeWidth="40" />
                        <circle cx="200" cy="200" r="50" stroke="white" strokeWidth="20" />
                    </svg>
                </div>

                <div className="flex flex-col lg:flex-row items-center justify-between p-8 md:p-16 gap-10 relative z-10">
                    {/* Left Side: Content */}
                    <div className="flex-1 text-center lg:text-left">
                        <h2 className="text-3xl md:text-5xl font-black text-white leading-tight">
                            Don't miss out on <br /> the best deals.
                        </h2>
                        <p className="text-orange-100 mt-4 text-lg">
                            Subscribe to our newsletter and stay updated with the latest trends and offers.
                        </p>

                        <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-8">
                            {benefits.map((benefit: Benefit) => (
                                <div key={benefit.id} className="flex items-center gap-2 text-white/90 text-sm font-medium">
                                    <div className="bg-white/20 p-1 rounded-full">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    {benefit.text}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Side: Input Field */}
                    <div className="w-full lg:max-w-md">
                        <form onSubmit={handleSubscribe} className="bg-white p-2 rounded-2xl flex flex-col sm:flex-row gap-2 shadow-lg">
                            <input
                                required
                                type="email"
                                name='email'
                                placeholder="Enter your email address"
                                className="input w-full bg-transparent border-none focus:outline-none text-slate-800 px-4"
                            />
                            <button className="btn bg-orange-600 hover:bg-slate-900 border-none text-white rounded-xl px-8 transition-all duration-300">
                                Subscribe
                            </button>
                        </form>
                        <p className="text-orange-100 text-xs mt-4 text-center lg:text-left">
                            We respect your privacy. Unsubscribe at any time.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Newsletter;