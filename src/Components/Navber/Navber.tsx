"use client"; // Required for daisyUI interactive elements

import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
    const pathname = usePathname();

    // Helper function to handle active link styling
    const isActive = (path: string) =>
        pathname === path ? "text-orange-600" : "text-gray-500";

    return (
        <nav className="navbar bg-white  border-b border-gray-100 px-4 md:px-38  sticky top-0 z-50 h-20">

            {/* --- MOBILE: Hamburger Menu --- */}
            <div className="navbar-start">
                <div className="dropdown lg:hidden">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
                        </svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 border border-gray-100">
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/products">Products</Link></li>
                       
                        <li><Link href="/about">About Us</Link></li>
                    </ul>
                </div>

                {/* --- LOGO --- */}
                <Link href="/" className="flex items-center gap-2 group ml-2 lg:ml-0">
                    <div className="bg-orange-600 p-2 rounded-lg transition-transform group-hover:scale-110">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                        </svg>
                    </div>
                    <span className="text-xl md:text-2xl font-black tracking-tighter text-black">
                        SAMM<span className="text-orange-600">STORE</span>
                    </span>
                </Link>
            </div>

            {/* --- DESKTOP: Center Links --- */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-8 text-[15px] font-semibold">
                    <li>
                        <Link href="/" className={`${isActive("/")} hover:text-orange-600 transition-colors`}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href="/products" className={`${isActive("/products")} hover:text-orange-600 transition-colors`}>
                            Products
                        </Link>
                    </li>
               
                    <li>
                        <Link href="/about" className={`${isActive("/about")} hover:text-orange-600 transition-colors`}>
                            About Us
                        </Link>
                    </li>
                </ul>
            </div>

            {/* --- RIGHT SIDE: Profile & Cart --- */}
            <div className="navbar-end gap-2 md:gap-4">
                <button className="btn btn-ghost btn-circle">
                    <div className="indicator">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        <span className="badge badge-sm badge-error indicator-item text-white border-none">0</span>
                    </div>
                </button>

                <div className="avatar">
                    <div className="w-8 md:w-10 rounded-full border-2 border-orange-600 p-0.5">
                        <img
                            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                            alt="User"
                        />
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;