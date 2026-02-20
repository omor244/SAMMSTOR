// app/loading.tsx
import React from 'react';

const Loading = () => {
    return (
        <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white">
            {/* Background Decorative Glows */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-orange-100 rounded-full blur-[120px] opacity-60"></div>

            <div className="relative flex flex-col items-center">
                {/* Branded Pulsing Logo */}
                <div className="flex items-center gap-2 mb-8 animate-pulse">
                    <div className="bg-orange-600 p-3 rounded-2xl shadow-lg shadow-orange-200">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                        </svg>
                    </div>
                    <span className="text-3xl font-black tracking-tighter text-slate-900">
                        SAMM<span className="text-orange-600">STORE</span>
                    </span>
                </div>

                {/* Modern Progress Bar */}
                <div className="w-48 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full bg-orange-600 rounded-full animate-progress-loading"></div>
                </div>

                {/* Loading Text */}
                <p className="mt-4 text-slate-400 font-medium text-sm tracking-widest uppercase animate-bounce">
                    Curating for you...
                </p>
            </div>

            {/* Step-by-step styles for the custom animation */}
            <style jsx>{`
                @keyframes progress-loading {
                    0% { width: 0%; transform: translateX(-100%); }
                    50% { width: 100%; transform: translateX(0%); }
                    100% { width: 0%; transform: translateX(100%); }
                }
                .animate-progress-loading {
                    animation: progress-loading 1.5s infinite ease-in-out;
                }
            `}</style>
        </div>
    );
};

export default Loading;