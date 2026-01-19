'use client';

import Navbar from "@/components/Navbar";
import CanvasSequence from "@/components/CanvasSequence";
import OverlaySections from "@/components/OverlaySections";

export default function Home() {
  return (
    <main className="relative min-h-[500vh]">
      <Navbar />
      <CanvasSequence />
      <OverlaySections />
    </main>
  );
}
