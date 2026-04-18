'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function ClientLogos() {
  const clients = [
    { name: "SCG", logo: "/logos/enkei.png" },
    { name: "PTT", logo: "/logos/amazon.png" },
    { name: "CP GROUP", logo: "/logos/daido.png" },
    { name: "AGODA", logo: "/logos/agoda.png" },
    { name: "THAI AIRWAYS", logo: "/logos/faos.png" },
    { name: "YANMAR", logo: "/logos/yanmar.png" },
  ];

  const duplicatedClients = [...clients, ...clients];

  return (
    <section className="py-24 relative z-10 overflow-hidden border-y border-white/10 bg-black/5 backdrop-blur-md">
      
      {/* Header: ปรับให้พรีเมี่ยมแบบ Minimal (ตัวตรง, ไม่มีขีด, ขนาดใหญ่ขึ้น) */}
      <div className="max-w-7xl mx-auto px-8 mb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-xl md:text-2xl font-black tracking-[0.4em] text-white uppercase">
            Trusted by <span className="text-lime-400">Industry Leaders</span>
          </h2>
        </motion.div>
      </div>

      <div className="flex relative items-center">
        {/* Gradient Mask ช่วยให้ขอบดูนุ่มนวล */}
        <div className="absolute inset-y-0 left-0 w-40 bg-linear-to-r from-[#a302a3] via-[#a302a3]/80 to-transparent z-20" />
        <div className="absolute inset-y-0 right-0 w-40 bg-linear-to-l from-[#a302a3] via-[#a302a3]/80 to-transparent z-20" />

        <motion.div 
          className="flex whitespace-nowrap gap-16 md:gap-32 items-center"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ 
            duration: 35, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        >
          {duplicatedClients.map((client, idx) => (
            <div 
              key={idx} 
              className="relative w-32 h-16 md:w-48 md:h-24 shrink-0 flex items-center justify-center group"
            >
              <Image
                src={client.logo}
                alt={client.name}
                fill
                className="object-contain opacity-100 transition-transform duration-500 group-hover:scale-110 drop-shadow-[0_5px_15px_rgba(0,0,0,0.2)]"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}