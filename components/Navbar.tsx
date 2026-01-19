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
                CARBON X
            </div>

            <div className="hidden md:flex space-x-8 text-sm font-medium text-white/80">
                <a href="#overview" className="hover:text-white transition-colors duration-300">Overview</a>
                <a href="#engineering" className="hover:text-white transition-colors duration-300">Engineering</a>
                <a href="#drivetrain" className="hover:text-white transition-colors duration-300">Drivetrain</a>
                <a href="#ride" className="hover:text-white transition-colors duration-300">Ride Feel</a>
                <a href="#specs" className="hover:text-white transition-colors duration-300">Specs</a>
            </div>

            <button className="bg-white text-black px-6 py-2 rounded-full font-semibold text-sm hover:bg-white/90 transition-colors duration-300">
                Explore
            </button>
        </motion.nav>
    );
}
