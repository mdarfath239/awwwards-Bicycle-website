'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useScroll, useTransform, useSpring } from 'framer-motion';

const FRAME_COUNT = 240;

export default function CanvasSequence() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const { scrollYProgress } = useScroll();

    // Smooth out the scroll progress
    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    // Preload images
    useEffect(() => {
        const loadImages = async () => {
            const loadedImages: HTMLImageElement[] = [];
            const promises = [];

            for (let i = 1; i <= FRAME_COUNT; i++) {
                const promise = new Promise<void>((resolve, reject) => {
                    const img = new Image();
                    const paddedIndex = i.toString().padStart(3, '0');
                    img.src = `/sequence/frame-${paddedIndex}.png`;
                    img.onload = () => {
                        loadedImages[i - 1] = img;
                        resolve();
                    };
                    img.onerror = reject;
                });
                promises.push(promise);
            }

            try {
                await Promise.all(promises);
                setImages(loadedImages);
                setIsLoading(false);
            } catch (error) {
                console.error("Failed to load images", error);
                setIsLoading(false); // Try to proceed anyway?
            }
        };

        loadImages();
    }, []);

    // Render canvas
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas || images.length === 0) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // Set canvas dimensions to match window/image aspect ratio
        // For now, we fit to cover
        const render = () => {
            const progress = smoothProgress.get();
            // Map 0-1 to 0-239. Clamp to be safe.
            const frameIndex = Math.min(
                FRAME_COUNT - 1,
                Math.max(0, Math.floor(progress * FRAME_COUNT))
            );

            const img = images[frameIndex];
            if (!img) return;

            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;

            // Calculate aspect ratio to cover
            const scale = Math.max(canvas.width / img.width, canvas.height / img.height);
            const x = (canvas.width / 2) - (img.width / 2) * scale;
            const y = (canvas.height / 2) - (img.height / 2) * scale;

            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
        };

        // Render initially
        render();

        // Subscribe to changes
        const unsubscribe = smoothProgress.on("change", render);

        // Also handle resize
        window.addEventListener('resize', render);

        return () => {
            unsubscribe();
            window.removeEventListener('resize', render);
        };
    }, [images, isLoading, smoothProgress]);

    if (isLoading) {
        return (
            <div className="fixed inset-0 flex items-center justify-center bg-[#050505] z-[60] text-white">
                <div className="flex flex-col items-center gap-4">
                    <div className="w-12 h-12 border-4 border-white/20 border-t-white rounded-full animate-spin"></div>
                    <p className="text-sm font-medium tracking-widest uppercase opacity-60">Initializing Experience</p>
                </div>
            </div>
        );
    }

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 w-full h-full object-cover z-0 bg-[#050505]"
        />
    );
}
