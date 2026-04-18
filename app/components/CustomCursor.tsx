'use client';
import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // ใช้ Spring เพื่อให้การเคลื่อนไหวนุ่มนวล (Smooth) เหมือนเว็บ cesse.dev
  const springConfig = { damping: 20, stiffness: 150 };
  const dotX = useSpring(0, springConfig);
  const dotY = useSpring(0, springConfig);
  const ringX = useSpring(0, { damping: 25, stiffness: 120 });
  const ringY = useSpring(0, { damping: 25, stiffness: 120 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      dotX.set(e.clientX);
      dotY.set(e.clientY);
      ringX.set(e.clientX);
      ringY.set(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [dotX, dotY, ringX, ringY]);

  return (
    <>
      {/* วงกลมชั้นนอก (Ring) */}
      <motion.div
        style={{
          position: 'fixed',
          left: 0,
          top: 0,
          x: ringX,
          y: ringY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        className="w-10 h-10 border border-white/30 rounded-full pointer-events-none z-[9999]"
      />
      
      {/* จุดตรงกลาง (Dot) - สีแดงตามรูปที่คุณส่งมา */}
      <motion.div
        style={{
          position: 'fixed',
          left: 0,
          top: 0,
          x: dotX,
          y: dotY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        className="w-4 h-4 bg-[#e55e5e] rounded-full pointer-events-none z-[9999]"
      />

      {/* ซ่อน Cursor มาตรฐานของระบบ */}
      <style jsx global>{`
        body {
          cursor: none;
        }
        a, button {
          cursor: none;
        }
      `}</style>
    </>
  );
}