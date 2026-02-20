"use client";
import Link from "next/link";
import React from "react";

// Define Types for our Footer Links
type FooterLink = {
    name: string;
    href: string;
};

type FooterSection = {
    title: string;
    links: FooterLink[];
};

const Footer = () => {
    const sections: FooterSection[] = [
        {
            title: "Quick Links",
            links: [
                { name: "Home", href: "/" },
                { name: "Products", href: "/products" },
                { name: "About Us", href: "/about" },
                { name: "Contact", href: "/contact" },
            ],
        },
        {
            title: "Categories",
            links: [
                { name: "Electronics", href: "#" },
                { name: "Jewelery", href: "#" },
                { name: "Men's Clothing", href: "#" },
                { name: "Women's Clothing", href: "#" },
            ],
        },
        {
            title: "Support",
            links: [
                { name: "FAQ", href: "#" },
                { name: "Shipping Policy", href: "#" },
                { name: "Return & Refund", href: "#" },
                { name: "Privacy Policy", href: "#" },
            ],
        },
    ];

    return (
        <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    {/* --- Brand Section --- */}
                    <div className="space-y-6">
                        <Link href="/" className="flex items-center gap-2">
                            <div className="bg-orange-600 p-2 rounded-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                                </svg>
                            </div>
                            <span className="text-2xl font-black tracking-tighter text-white">
                                SAMM<span className="text-orange-600">STORE</span>
                            </span>
                        </Link>
                        <p className="text-sm leading-relaxed text-slate-400">
                            The ultimate destination for premium electronics, fashion, and lifestyle products. Quality you can trust, delivered to your door.
                        </p>
                        <div className="flex gap-4">
                            {/* Social Icons Placeholder */}
                            {["facebook", "twitter", "instagram", "linkedin"].map((social) => (
                                <button key={social} className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-orange-600 hover:text-white transition-all">
                                    <span className="sr-only">{social}</span>
                                    <div className="w-5 h-5 bg-current opacity-70" />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* --- Dynamic Links Sections --- */}
                    {sections.map((section) => (
                        <div key={section.title}>
                            <h3 className="text-white font-bold text-lg mb-6">{section.title}</h3>
                            <ul className="space-y-4">
                                {section.links.map((link) => (
                                    <li key={link.name}>
                                        <Link href={link.href} className="hover:text-orange-600 transition-colors text-sm">
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <hr className="border-slate-800 mb-8" />

                {/* --- Bottom Footer --- */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-xs text-slate-500">
                        © {new Date().getFullYear()} SammStore. All rights reserved.
                    </p>

                    {/* Payment Methods */}
                    <div className="flex items-center gap-4 opacity-50 grayscale hover:grayscale-0 transition-all">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-4" />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-6" />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" className="h-4" />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;