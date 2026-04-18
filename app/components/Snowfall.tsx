'use client';
import React, { useEffect, useState } from 'react';

export default function Snowfall() {
  const [flakes, setFlakes] = useState<any[]>([]);

  useEffect(() => {
    // สร้างหิมะ 30 ชิ้นพร้อมค่าสุ่ม
    const newFlakes = [...Array(30)].map((_, i) => ({
      id: i,
      size: Math.random() * 5 + 2,
      left: Math.random() * 100,
      duration: Math.random() * 10 + 10,
      delay: Math.random() * 15,
      opacity: Math.random() * 0.5 + 0.3,
    }));
    setFlakes(newFlakes);
  }, []);

  return (
    // ใช้ z-[1] เพื่อให้อยู่หลังเนื้อหา แต่หน้าพื้นหลังม่วง
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-[1]">
      {flakes.map((flake) => (
        <div
          key={flake.id}
          className="snowflake"
          style={{
            width: `${flake.size}px`,
            height: `${flake.size}px`,
            left: `${flake.left}vw`,
            animationDuration: `${flake.duration}s`,
            animationDelay: `-${flake.delay}s`,
            opacity: flake.opacity,
            backgroundColor: 'white',
            position: 'absolute',
            borderRadius: '50%',
            filter: 'blur(1px)',
            top: '-10px',
          }}
        />
      ))}
    </div>
  );
}