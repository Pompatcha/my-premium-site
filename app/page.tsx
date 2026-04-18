import Link from 'next/link';
import React from 'react';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor'; // เพิ่มการนำเข้า CustomCursor
import Image from 'next/image'; // เพิ่มการนำเข้า Image จาก Next.js
import ClientLogos from './components/ClientLogos'; // เพิ่มการนำเข้า ClientLogos


export default function Home() {
  return (
    <div className="min-h-screen bg-[#a302a3] text-white font-sans overflow-x-hidden relative">
      
      {/* 1. Motion Snow Animation Layer - เพิ่มเลเยอร์หิมะตกแบบ Fixed (ใหม่) */}
      <style>{`
        @keyframes snow {
          0% { transform: translateY(-10vh) translateX(0px); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(110vh) translateX(50px); opacity: 0; }
        }
        .snowflake {
          position: fixed;
          top: -10vh;
          background-color: white;
          border-radius: 50%;
          filter: blur(1px); /* เพิ่มความฟุ้งให้ดูเหมือนหิมะจริง */
          pointer-events: none;
          z-index: 1; /* อยู่เหนือ Background เดิม แต่ต่ำกว่า Main Content */
          animation: snow linear infinite;
        }
      `}</style>

      {/* กลุ่มเกล็ดหิมะ - ปรับขนาด, ตำแหน่งเริ่มต้น, ระยะเวลา และ Delay (ใหม่) */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {[...Array(30)].map((_, i) => {
          const size = Math.random() * 5 + 3; // ขนาด 2px - 7px
          const left = Math.random() * 100; // ตำแหน่งซ้าย 0% - 100%
          const duration = Math.random() * 10 + 10; // ระยะเวลาตก 10s - 20s
          const delay = Math.random() * 15; // ดีเลย์เริ่มต้น 0s - 15s
          const opacity = Math.random() * 0.5 + 0.2; // ความโปร่งแสง 0.2 - 0.7
          
          return (
            <div 
              key={i} 
              className="snowflake"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                left: `${left}vw`,
                animationDuration: `${duration}s`,
                animationDelay: `-${delay}s`, // ใช้ค่าติดลบเพื่อให้หิมะมีอยู่แล้วตอนโหลดหน้า
                opacity: opacity
              }}
            />
          );
        })}
      </div>

      {/* 2. 3D Background Decor - (คงเดิม) */}
      <div className="fixed inset-0 pointer-events-none opacity-20 z-0">
        <div className="absolute top-[-10vh] left-[20vw] w-[40vw] h-[60vh] rounded-full bg-magenta-400 blur-[150px]"></div>
        <div className="absolute bottom-0 right-[10vw] w-[30vw] h-[50vh] rounded-full bg-violet-600 blur-[130px]"></div>
      </div>

      {/* 3. Hero Section - (คงเดิม) */}
      <main className="max-w-7xl mx-auto px-8 pt-0 pb-40 relative z-10 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
        
        {/* ฝั่งซ้าย: ตัวหนังสือและปุ่ม */}
        <section className="flex flex-col items-start pr-10">
          <div className="flex flex-col items-start -mt-20"> 
            <div className="mb-8 inline-flex items-center gap-3 py-2 px-4 rounded-full border border-white/10 bg-white/5 backdrop-blur-md shadow-lg shadow-black/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-lime-500"></span>
              </span>
              <span className="text-[16px] uppercase tracking-[0.3em] font-bold text-lime-100/90">
                Open to collaborative research <span className="text-white/40 mx-1">&</span> development
              </span>
            </div>

            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-[0.9] flex flex-col mb-12">
              <span className="text-white drop-shadow-[0_4px_1px_rgba(0,0,0,0.4)]">Software Partner</span>
              <span className="relative text-zinc-300">
                <span className="absolute inset-0 text-magenta-900/40 -translate-y-px -translate-x-px blur-[0.5px]">Talent Acquisition.</span>
                <span className="relative bg-linear-to-b from-white to-zinc-400 bg-clip-text text-transparent drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)]">Talent Acquisition.</span>
              </span>
            </h1>

            <p className="mb-12 text-xl text-white/90 max-w-xl font-light leading-relaxed drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)]">
            FAOS bridges elite Procurement expertise with cutting-edge technology, 
            leveraging <span className="text-lime-400 font-bold">15 years</span> of industry-leading experience 
            to deliver sustainable innovation and growth.
          </p>

            <div className="flex items-center gap-10">
              <button className="bg-white text-[#a302a3] px-10 py-5 rounded-full font-extrabold text-sm uppercase tracking-wider transition-all duration-300 hover:scale-105 hover:bg-zinc-100 shadow-[0_8px_0_#e0e0e0,0_15px_20px_rgba(0,0,0,0.3)] active:shadow-[0_4px_0_#e0e0e0,0_10px_10px_rgba(0,0,0,0.2)] active:translate-y-px">
                Get Started
              </button>
              <a href="#" className="text-white hover:text-white transition underline underline-offset-4 font-bold drop-shadow-[0_2px_2px_rgba(0,0,0,0.4)]">
                View our services
              </a>
            </div>
          </div>
        </section>

        {/* ฝั่งขวา: กรอบรูปภาพ */}
        <section className="flex flex-col items-end md:pl-10">
          <div className="relative w-full aspect-square max-w-\[500px]\ rounded-3xl overflow-hidden shadow-2xl shadow-black/40 border border-white/20 transition-transform duration-500 hover:scale-[1.02] group">
            <div className="absolute inset-0 bg-linear-to-br from-magenta-500/20 to-violet-600/20 opacity-40 group-hover:opacity-60 transition-opacity"></div>
            <div className="absolute inset-0 flex items-center justify-center border-2 border-dashed border-white/30 rounded-2xl m-6">
              <Image 
          src="/patcha.jpg"
          alt="Patcharin Chanaphukdee"
          fill
          priority // ช่วยให้รูปโหลดทันที (แก้ Error LCP)
          sizes="(max-w-768px) 100vw, (max-w-1200px) 50vw, 800px" // ช่วยเรื่อง Performance
          className="object-cover rounded-2xl" // หรือคลาสเดิมที่คุณตั้งไว้
        />
            </div>
          </div>
          <div className="mt-10 max-w-125 w-full text-left ml-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight drop-shadow-md">
               {"Hi, I'm"}<span className="text-lime-400 drop-shadow-[0_0_15px_rgba(163,251,43,0.3)]">Patcharin Chanaphukdee</span>
            </h3>
            <p className="mt-3 text-[15px] font-semibold text-zinc-100 uppercase tracking-wider leading-snug">
              Procurement Specialist & Business Data Analyst & HR Recruitment Specialist & Compliance & Risk Management Expert & ISO AUDIT & Japanese Interpreter & Supplier Management & Other
              <span className="block text-lime-300/90 font-bold mt-1">15 Years Bussiness Development Experience</span>
            </p>
            <div className="mt-6 pt-6 border-t border-white/20">
              <p className="text-[16px] text-white/90 font-medium leading-relaxed">
                Master Degree in <span className="text-white border-b border-lime-400/50 pb-0.5 font-bold italic">Stamford University (International Business Management)</span>, Specialize in <span className="text-white font-bold">EdTech, AI, and Full-stack dev.</span> 
              </p>
              <p className="mt-4 text-[16px] text-zinc-200 font-medium leading-relaxed italic">
                {"Passionate about building intelligent, accessible education platforms."}
              </p>
            </div>
          </div>
        </section>
      </main>
{/* 4. My Featured Projects Section - 3 Columns with Images */}
<section className="max-w-7xl mx-auto px-0 py-32 relative z-10 -mt-54">
  <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
    <div className="max-w-2xl">
      <h2 className="text-8xl md:text-7xl font-black tracking-tighter text-white mb-6">
        My Featured <span className="text-lime-400">Projects</span>
      </h2>
      <p className="text-xl text-zinc-400 font-light leading-relaxed">
        Innovative solutions integrating AI, Automation, and Data Analytics to drive 
        business excellence and operational precision.
      </p>
    </div>
    <a href="projects" className="group flex items-center gap-3 text-white font-bold tracking-widest uppercase text-sm border-b-2 border-lime-400 pb-2 hover:text-lime-400 transition-all">
      View All Projects 
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
      </svg>
    </a>
  </div>

  {/* Project Grid - ปรับเป็น md:grid-cols-3 เพื่อแสดง 3 คอลัมน์ */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    {[
      {
        title: "AI-Powered Recruitment Precision",
        category: "LLM & Predictive Analytics",
        desc: "Advanced AI-driven screening system utilizing RAG to accurately match candidate skills with organizational needs.",
        tags: ["Next.js", "OpenAI", "RAG"],
        color: "from-blue-500/20 to-cyan-500/20"
      },
      {
        title: "End-to-End Procurement Analytics",
        category: "Power BI & Automation",
        desc: "Transforming tens of thousands of raw procurement records into high-precision cost-reduction strategies through 100% automated reporting.",
        tags: ["Power BI", "Power Automate", "SQL"],
        color: "from-purple-500/20 to-magenta-500/20"
      },
          {
            title: "Sustainable Procurement & ESG Dashboard", // ชื่อใหม่ที่สอดคล้องกับภาพ
            category: "Sustainability Analytics",
            desc: "Integrated platform for tracking supplier carbon footprints and ESG performance to ensure 100% compliance with global sustainability standards.",
            tags: ["Power BI", "Carbon Tracking", "ESG"], // เพิ่ม Tag ที่เกี่ยวกับสิ่งแวดล้อม
            color: "from-lime-500/20 to-emerald-500/20"
          }
    ].map((project, idx) => (
      <div key={idx} className="group relative flex flex-col h-full">
        {/* Project Image Container */}
        <div className={`relative aspect-16/10 rounded-3xl overflow-hidden border border-white/10 active:translate-y-1 ${project.color} backdrop-blur-sm mb-6 transition-transform duration-500 group-hover:scale-[1.02] shadow-2xl`}>
          
          {/* ดึงรูปภาพจริงจาก public/projects/ */}
          <Image 
            src={`/projects/project-${idx}.jpg`} 
            alt={project.title}
            fill
            className="object-cover transition-all duration-500 group-hover:scale-110" // ลบ class opacity ออกทั้งหมด
            sizes="(max-w-968px) 120vw, 53vw"
          />

          {/* Overlay on Hover */}
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-20">
             <button className="bg-white text-black px-6 py-2.5 rounded-full font-bold uppercase text-[10px] tracking-widest transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
               View Case Study
             </button>
          </div>
        </div>

        {/* Project Info */}
        <div className="flex flex-col gap-3 grow">
          <span className="text-lime-400 font-bold text-[10px] uppercase tracking-[0.2em]">{project.category}</span>
          <h3 className="text-2xl font-bold text-white tracking-tight group-hover:text-lime-200 transition-colors leading-tight">
            {project.title}
          </h3>
          <p className="text-zinc-400 text-sm leading-relaxed mb-4 line-clamp-3">
            {project.desc}
          </p>
          
          {/* Tags Section */}
          <div className="mt-auto flex flex-wrap gap-2">
            {project.tags.map(tag => (
              <span key={tag} className="text-[9px] px-2.5 py-1 rounded-full border border-white/10 bg-white/5 text-zinc-300 font-medium uppercase tracking-wider">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    ))}
  </div>
</section>
<section className="max-w-10xl mx-auto px-8 pt-16 pb-32 relative z-10 -mt-40">
  <div className="text-center mb-30">
    <h2 className="text-6xl md:text-8xl font-black tracking-tighter text-white mb-8 drop-shadow-[0_10px_20px_rgba(0,0,0,0.4)]">
      Why Hire <span className="text-lime-400">Me?</span>
    </h2>
    <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto font-light leading-relaxed italic drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)]">
    {"A Foundation of Trust and Excellence"}
    </p>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
    {[
      { title: "Power BI", desc: "Advanced data visualization and dashboard creation." },
      { title: "Power Automate", desc: "Streamlining business processes with smart automation." },
      { title: "SQL", desc: "Expert database management and complex querying." },
      { title: "Microsoft 365", desc: "Full suite optimization for business productivity." },
      { title: "LLM & RAG", desc: "Building intelligent AI systems with custom knowledge." },
      { title: "Data Analysis", desc: "Transforming raw data into actionable insights." },
      { title: "Procurement", desc: "15+ years of strategic sourcing and management." },
      { title: "Full-Stack Dev", desc: "Developing scalable and modern web applications." },
      { title: "Compliance", desc: "Ensuring adherence to industry regulations and ISO standards." },
      { title: "Business Dev", desc: "Strategic growth and international expansion expert." },
      { title: "AI Research", desc: "Exploring next-gen technologies for businesses." },
      { title: "Recruitment", desc: "Connecting the best IT talent with the right jobs." },
    ].map((item, i) => {
      // Automation Logic: แปลงชื่อหัวข้อเป็นชื่อไฟล์ภาพ
      const fileName = item.title
        .toLowerCase()
        .replace(/\s+/g, '-')    // ช่องว่างเป็นขีดกลาง
        .replace('&', 'and')     // & เป็น and
        .replace(/\./g, '');     // ลบจุดออก

      return (
        <div key={i} className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 transition-all group flex flex-col items-center text-center">
          
          {/* กรอบใส่โลโก้ทักษะ */}
          <div className="w-35 h-35 bg-white/10 rounded-xl border border-white/20 mb-6 flex items-center justify-center overflow-hidden group-hover:scale-110 group-hover:border-lime-400/50 transition-all duration-300 shadow-inner relative">
          <Image 
            src={`/skills/${fileName}.png`}
            alt={item.title}
            width={120}
            height={120}
            // ลบ filter grayscale และ group-hover:grayscale-0 ออก
            className="object-contain transition-all duration-300" 
          />
          </div>

          <h3 className="text-lg font-bold mb-2 text-white group-hover:text-lime-400 transition-colors">{item.title}</h3>
          <p className="text-zinc-400 text-xs leading-relaxed">{item.desc}</p>
        </div>
      );
    })}
  </div>
</section>


<div className="relative z-10 py-10">
  <ClientLogos />
</div>

      {/* 5. Footer Section */}
{/* ส่วนเนื้อหาอื่นๆ ของคุณ... */}
      
      {/* เรียกใช้คอมโพเนนต์ที่แยกไฟล์ไว้ */}
      <Footer />

    </div> // แท็กปิดของ div หลัก
  );
}

