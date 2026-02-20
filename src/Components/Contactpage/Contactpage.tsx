"use client";

import React, { useState } from 'react';
import { FaFacebookF, FaGithub, FaLinkedinIn } from 'react-icons/fa';


type ContactFormData = {
    name: string;
    email: string;
    subject: string;
    message: string;
};

const Contactpage = () => {
 
    const [formData, setFormData] = useState<ContactFormData>({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate an API call
        setTimeout(() => {
            console.log("Form Data Submitted:", formData);
            setIsSubmitting(false);
            alert("Message sent successfully!");
        }, 1500);
    };

    return (
        <div className="bg-white min-h-screen py-20 px-4">
            <div className="max-w-7xl mx-auto">
                {/* --- Section Header --- */}
                <div className="mb-16">
                    <span className="text-orange-600 font-black tracking-[0.3em] uppercase text-xs">Contact Us</span>
                    <h1 className="text-5xl md:text-7xl font-black text-slate-900 mt-4">
                        Let’s start a <br />
                        <span className="text-orange-600 italic">conversation.</span>
                    </h1>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 shadow-2xl shadow-orange-100 rounded-[3.5rem] overflow-hidden border border-gray-50">

                    {/* --- Left: Contact Info (Dark Card) --- */}
                    <div className="lg:col-span-4 bg-slate-900 p-12 text-white flex flex-col justify-between">
                        <div className="space-y-12">
                            <div>
                                <h3 className="text-2xl font-bold mb-6 text-orange-500">Contact Info</h3>
                                <div className="space-y-6">
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 bg-slate-800 rounded-xl flex items-center justify-center text-xl">📍</div>
                                        <p className="text-slate-300 text-sm font-medium">123 Tech Avenue, <br />Dhaka, Bangladesh</p>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 bg-slate-800 rounded-xl flex items-center justify-center text-xl">📧</div>
                                        <p className="text-slate-300 text-sm font-medium">support@sammstore.com</p>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 bg-slate-800 rounded-xl flex items-center justify-center text-xl">📞</div>
                                        <p className="text-slate-300 text-sm font-medium">+880 17929 18325</p>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold mb-6">Working Hours</h3>
                                <p className="text-slate-400 text-sm">Monday — Friday: 9am - 6pm</p>
                                <p className="text-slate-400 text-sm">Saturday: 10am - 4pm</p>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="flex gap-4 pt-10">
                            
                            <a href='https://www.facebook.com/sk.omer.1257' target='_blank' className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center text-xs font-bold hover:bg-orange-600 hover:border-orange-600 cursor-pointer transition-all">
                                <FaFacebookF></FaFacebookF>
                                </a>
                            <a href='https://www.linkedin.com/in/omor-dev' target='_blank' className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center text-xs font-bold hover:bg-orange-600 hover:border-orange-600 cursor-pointer transition-all">
                                  <FaLinkedinIn></FaLinkedinIn>
                                </a>
                            <a  href='https://github.com/omor244' target='_blank' className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center text-xs font-bold hover:bg-orange-600 hover:border-orange-600 cursor-pointer transition-all">
                                   <FaGithub></FaGithub>
                                </a>
                            
                           
                        </div>
                    </div>

                    {/* --- Right: The Contact Form --- */}
                    <div className="lg:col-span-8 bg-white p-12">
                        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-2">
                                <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-2">Full Name</label>
                                <input
                                    required
                                    type="text"
                                    placeholder="John Doe"
                                    className="w-full px-6 py-4 bg-gray-50 rounded-2xl border-none focus:ring-2 focus:ring-orange-600 outline-none transition-all"
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-2">Email Address</label>
                                <input
                                    required
                                    type="email"
                                    placeholder="john@example.com"
                                    className="w-full px-6 py-4 bg-gray-50 rounded-2xl border-none focus:ring-2 focus:ring-orange-600 outline-none transition-all"
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                />
                            </div>
                            <div className="md:col-span-2 space-y-2">
                                <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-2">Subject</label>
                                <input
                                    required
                                    type="text"
                                    placeholder="How can we help?"
                                    className="w-full px-6 py-4 bg-gray-50 rounded-2xl border-none focus:ring-2 focus:ring-orange-600 outline-none transition-all"
                                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                />
                            </div>
                            <div className="md:col-span-2 space-y-2">
                                <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-2">Message</label>
                                <textarea
                                    required
                                    rows={5}
                                    placeholder="Your message here..."
                                    className="w-full px-6 py-4 bg-gray-50 rounded-2xl border-none focus:ring-2 focus:ring-orange-600 outline-none transition-all resize-none"
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                ></textarea>
                            </div>

                            <div className="md:col-span-2 pt-4">
                                <button
                                    disabled={isSubmitting}
                                    type="submit"
                                    className={`w-full py-5 rounded-2xl font-black text-lg transition-all duration-300 shadow-xl ${isSubmitting ? 'bg-slate-100 text-slate-400' : 'bg-orange-600 text-white hover:bg-slate-900 hover:shadow-orange-200'}`}
                                >
                                    {isSubmitting ? "SENDING..." : "SEND MESSAGE"}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contactpage;