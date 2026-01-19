'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function Navbar() {




    return (
        <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{
                opacity: 1,
                y: 0,
                backgroundColor: 'rgba(5, 5, 5, 0)',
                backdropFilter: 'blur(0px)',
                borderBottom: '1px solid rgba(255, 255, 255, 0)'
            }}
            transition={{ duration: 0.5 }}
            className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12"
        >
            <div className="text-white font-bold tracking-tight text-lg">
                BICYCLE
            </div>

            <div className="hidden md:flex space-x-8 text-sm font-medium text-white/80">
                <a href="#overview" className="hover:text-white transition-colors duration-300">Overview</a>
                <a href="#engineering" className="hover:text-white transition-colors duration-300">Engineering</a>
                <a href="#drivetrain" className="hover:text-white transition-colors duration-300">Drivetrain</a>
                <a href="#ride" className="hover:text-white transition-colors duration-300">Ride Feel</a>
                <a href="#specs" className="hover:text-white transition-colors duration-300">Specs</a>
            </div>

            <div className="flex items-center space-x-6 text-white">
                <button className="hover:text-white/80 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="11" cy="11" r="8"></circle>
                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    </svg>
                </button>
                <button className="hover:text-white/80 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                    </svg>
                </button>
                <button className="hover:text-white/80 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                </button>
                <button className="hover:text-white/80 transition-colors relative">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="9" cy="21" r="1"></circle>
                        <circle cx="20" cy="21" r="1"></circle>
                        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                    </svg>
                    <span className="absolute -top-1 -right-1 bg-white text-black text-[10px] font-bold h-3.5 w-3.5 flex items-center justify-center rounded-full">2</span>
                </button>
            </div>
        </motion.nav>
    );
}
