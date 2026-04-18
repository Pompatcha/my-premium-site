"use client";
import './globals.css';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import CustomCursor from './components/CustomCursor';
import BubbleBackground from './components/BubbleBackground';

export default function RootLayout({ children }: { children: React.ReactNode }) {
const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0, opacity: 0 });
  // 1. รวม Contact เข้ามาในนี้เลยครับ
  const menuItems = [
  { name: 'Home', href: '/' },
  { name: 'Projects', href: '/projects' },
  { name: 'Experience', href: '/experience' }, // ต้องเป็นแบบนี้
  { name: 'Contact', href: '/contact' },
];
  
const handleMouseEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
  const target = e.currentTarget;
  setIndicatorStyle({
    left: target.offsetLeft,
    width: target.offsetWidth,
    opacity: 1
  });
};

  return (
    <html lang="en">
      <body className="bg-[#a302a3] text-white font-sans min-h-screen relative overflow-x-hidden">
        <CustomCursor />
        
        <div className="fixed inset-0 z-0 pointer-events-none">
          <BubbleBackground />
        </div>

     <nav className="fixed top-0 left-0 z-100 w-full px-8 py-4 flex justify-between items-center bg-black/40 backdrop-blur-2xl border-b border-white/10 shadow-2xl">
          <div className="flex items-center gap-5">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-lg overflow-hidden border-2 border-lime-400">
                <Image src="/Patcha.jpg" alt="Profile" fill className="object-cover" />
              </div>
              <span className="text-2xl font-black tracking-tighter text-white">FAOS</span>
            </Link>
          </div>

          {/* จุดสำคัญ: div นี้ต้องมี relative เพื่อให้ absolute ข้างในอ้างอิงตำแหน่งได้ถูกต้อง */}
          <div className="relative flex items-center bg-white/5 rounded-full p-1 border border-white/5">
            
            {/* แถบสีเลื่อน (Indicator) */}
            <div 
                className="absolute h-[80%] bg-lime-400 rounded-full transition-all duration-300 ease-out z-0 shadow-[0_0_15px_rgba(163,230,53,0.5)]"
                style={{
                  left: `${indicatorStyle.left}px`,
                  width: `${indicatorStyle.width}px`,
                  opacity: indicatorStyle.opacity,
                  top: '10%'
                }}
            />

            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onMouseEnter={handleMouseEnter} 
                // เพิ่มบรรทัดนี้: เพื่อให้แถบสีหายไปเวลาเมาส์ไม่ได้ชี้ที่เมนูไหนเลย
                onMouseLeave={() => setIndicatorStyle(prev => ({ ...prev, opacity: 0 }))} 
                className="relative z-10 px-6 py-2 text-[16px] uppercase tracking-widest font-black transition-colors duration-300 hover:text-black text-white"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </nav>

       {/* รูปช้าง */ }
            
            <div className="walking-elephant walking-elephant-2">
              <Image src="/elephant1.png" alt="elephant2" width={100} height={100} className="object-contain" />
            </div>
            <div className="walking-elephant walking-elephant-3">
              <Image src="/elephant2.png" alt="elephant3" width={100} height={100} className="object-contain" />
            </div>
           
      

        <main className="relative z-10 w-full pt-40">{children}</main>
      </body>
    </html>
  );
}