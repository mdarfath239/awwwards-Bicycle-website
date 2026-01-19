'use client';

import React from 'react';
import { motion } from 'framer-motion';

const Section = ({
    children,
    className = "",
    id = ""
}: {
    children: React.ReactNode,
    className?: string,
    id?: string
}) => (
    <section id={id} className={`min-h-screen flex flex-col justify-center px-6 md:px-20 relative z-10 pointer-events-none ${className}`}>
        <div className="pointer-events-auto">
            {children}
        </div>
    </section>
);

const FadeIn = ({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: "-20%" }}
        transition={{ duration: 0.8, delay, ease: "easeOut" }}
    >
        {children}
    </motion.div>
);

export default function OverlaySections() {
    return (
        <div className="relative w-full text-white">
            {/* 0-15% HERO INTRO */}
            <Section className="items-center text-center pt-[20vh]" id="overview">
                <FadeIn>
                    <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-4 text-white/90">
                        CARBON PERFORMANCE
                    </h1>
                    <p className="text-xl md:text-2xl font-light text-white/60 tracking-wide max-w-2xl mx-auto">
                        Engineered for speed. Designed for control.
                    </p>
                    <p className="mt-4 text-sm text-[#00D6FF] uppercase tracking-widest font-semibold">
                        Flagship Model X
                    </p>
                </FadeIn>
            </Section>

            {/* Spacer for transition */}
            <div className="min-h-[20vh]"></div>

            {/* 15-40% ENGINEERING REVEAL */}
            <Section className="items-start" id="engineering">
                <FadeIn>
                    <div className="max-w-lg backdrop-blur-sm bg-black/20 p-8 rounded-lg border border-white/5">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white/90">
                            Precision Architecture
                        </h2>
                        <div className="space-y-4 text-lg text-white/70 font-light leading-relaxed">
                            <p>
                                Every tube profile is tuned for stiffness, efficiency, and balance.
                                Using high-modulus carbon fiber, we've eliminated excess weight without compromising structural integrity.
                            </p>
                            <p className="text-white/90 font-medium">
                                Nothing added. Nothing wasted.
                            </p>
                        </div>
                    </div>
                </FadeIn>
            </Section>

            {/* 40-65% DRIVETRAIN */}
            <Section className="items-end text-right" id="drivetrain">
                <FadeIn>
                    <div className="max-w-lg ml-auto backdrop-blur-sm bg-black/20 p-8 rounded-lg border border-white/5">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white/90">
                            Lossless Power
                        </h2>
                        <ul className="space-y-6 text-lg text-white/70 font-light">
                            <li className="flex flex-col items-end">
                                <span className="text-[#0050FF] font-semibold text-sm uppercase tracking-wider mb-1">Efficiency</span>
                                <span>Optimized drivetrain for zero wattage loss</span>
                            </li>
                            <li className="flex flex-col items-end">
                                <span className="text-[#0050FF] font-semibold text-sm uppercase tracking-wider mb-1">Response</span>
                                <span>Instant braking feedback at any speed</span>
                            </li>
                            <li className="flex flex-col items-end">
                                <span className="text-[#0050FF] font-semibold text-sm uppercase tracking-wider mb-1">Control</span>
                                <span>Race-tuned geometry for absolute confidence</span>
                            </li>
                        </ul>
                    </div>
                </FadeIn>
            </Section>

            {/* Spacer */}
            <div className="min-h-[10vh]"></div>

            {/* 65-85% RIDE FEEL */}
            <Section className="items-center text-center" id="ride">
                <FadeIn>
                    <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white/90">
                        Responsive. Balanced. <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0050FF] to-[#00D6FF]">Effortless.</span>
                    </h2>
                    <p className="text-xl text-white/60 max-w-xl mx-auto leading-relaxed">
                        Every contact point is refined for confidence. Every rotation delivers speed you can feel.
                        The road disappears, leaving only the ride.
                    </p>
                </FadeIn>
            </Section>

            {/* 85-100% REASSEMBLY & CTA */}
            <Section className="items-center text-center justify-end pb-20" id="specs">
                <FadeIn>
                    <h2 className="text-5xl md:text-7xl font-bold mb-6 text-white/90">
                        Built to disappear.
                    </h2>
                    <p className="text-xl md:text-2xl text-white/60 mb-10">
                        Pure performance. Absolute focus.
                    </p>
                    <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
                        <button className="bg-[#0050FF] hover:bg-[#0040CC] lg:text-lg text-white px-8 py-4 rounded-full font-bold transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(0,80,255,0.4)]">
                            Explore the Bicycle
                        </button>
                        <button className="text-white border border-white/20 hover:border-white/60 px-8 py-4 rounded-full font-semibold transition-all hover:bg-white/5">
                            View Full Specifications
                        </button>
                    </div>
                </FadeIn>
            </Section>

            {/* Extra scrolling space to ensure we can hit the end of the animation comfortably */}
            <div className="min-h-[50vh]"></div>
        </div>
    );
}
