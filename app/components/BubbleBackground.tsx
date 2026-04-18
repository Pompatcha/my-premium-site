"use client";
import React, { useEffect, useState } from 'react';

export default function BubbleBackground() {
  const [bubbles, setBubbles] = useState<any[]>([]);

  useEffect(() => {
    // เพิ่มจำนวนเป็น 30 อันเพื่อให้กระจายทั่วหน้าจอ
    const newBubbles = [...Array(30)].map((_, i) => ({
      id: i,
      size: Math.random() * 80 + 20,
      left: Math.random() * 100,
      delay: Math.random() * 20,
      duration: Math.random() * 15 + 10,
      opacity: Math.random() * 0.3 + 0.1,
    }));
    setBubbles(newBubbles);
  }, []);

  return (
    <div className="relative w-full h-full min-h-screen overflow-hidden">
      {bubbles.map((bubble) => (
        <div
          key={bubble.id}
          className="absolute rounded-lg bg-white/20 border border-white/10 animate-float"
          style={{
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
            left: `${bubble.left}%`,
            top: '100%', // เริ่มจากขอบล่างของหน้าจอ
            animationDelay: `${bubble.delay}s`,
            animationDuration: `${bubble.duration}s`,
            // @ts-ignore
            '--op': bubble.opacity,
          }}
        />
      ))}
    </div>
  );
}